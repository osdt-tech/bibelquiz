import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ColorDiceProps {
  isRolling: boolean
  faceColors: string[]
  difficulty?: number | null
}

export function ColorDice({ isRolling, faceColors, difficulty }: ColorDiceProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cubeRef = useRef<THREE.Mesh | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const rotationVelocityRef = useRef({ x: 0, y: 0, z: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      45,
      1,
      0.1,
      1000
    )
    camera.position.z = 5
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    })
    renderer.setSize(300, 300)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const geometry = new THREE.BoxGeometry(2, 2, 2, 10, 10, 10)
    
    const convertOklchToHex = (oklch: string): string => {
      const colorMap: { [key: string]: string } = {
        'oklch(0.55 0.22 25)': '#c74430',
        'oklch(0.65 0.18 50)': '#e89850',
        'oklch(0.85 0.15 95)': '#f5e55c',
        'oklch(0.60 0.18 150)': '#3eb870',
        'oklch(0.55 0.20 250)': '#4a6be3',
        'oklch(0.98 0.01 0)': '#fafafa'
      }
      return colorMap[oklch] || '#888888'
    }
    
    const createFaceTexture = (color: string): THREE.CanvasTexture => {
      const canvas = document.createElement('canvas')
      canvas.width = 512
      canvas.height = 512
      const ctx = canvas.getContext('2d')!
      
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, 512, 512)
      
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(256, 256, 180, 0, Math.PI * 2)
      ctx.fill()
      
      return new THREE.CanvasTexture(canvas)
    }
    
    const materials = [
      new THREE.MeshStandardMaterial({ map: createFaceTexture(convertOklchToHex(faceColors[0])), roughness: 0.3, metalness: 0.1 }),
      new THREE.MeshStandardMaterial({ map: createFaceTexture(convertOklchToHex(faceColors[1])), roughness: 0.3, metalness: 0.1 }),
      new THREE.MeshStandardMaterial({ map: createFaceTexture(convertOklchToHex(faceColors[2])), roughness: 0.3, metalness: 0.1 }),
      new THREE.MeshStandardMaterial({ map: createFaceTexture(convertOklchToHex(faceColors[3])), roughness: 0.3, metalness: 0.1 }),
      new THREE.MeshStandardMaterial({ map: createFaceTexture(convertOklchToHex(faceColors[4])), roughness: 0.3, metalness: 0.1 }),
      new THREE.MeshStandardMaterial({ map: createFaceTexture(convertOklchToHex(faceColors[5])), roughness: 0.3, metalness: 0.1 })
    ]
    
    const positionAttribute = geometry.attributes.position
    const vertex = new THREE.Vector3()
    const roundingRadius = 0.25
    
    for (let i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i)
      
      const absX = Math.abs(vertex.x)
      const absY = Math.abs(vertex.y)
      const absZ = Math.abs(vertex.z)
      
      const edgeThreshold = 1 - roundingRadius
      
      const isNearCorner = 
        absX > edgeThreshold && absY > edgeThreshold && absZ > edgeThreshold
      
      const isNearEdge = 
        (absX > edgeThreshold && absY > edgeThreshold) ||
        (absY > edgeThreshold && absZ > edgeThreshold) ||
        (absX > edgeThreshold && absZ > edgeThreshold)
      
      if (isNearCorner) {
        const signX = Math.sign(vertex.x)
        const signY = Math.sign(vertex.y)
        const signZ = Math.sign(vertex.z)
        
        const cornerX = signX * edgeThreshold
        const cornerY = signY * edgeThreshold
        const cornerZ = signZ * edgeThreshold
        
        const dx = vertex.x - cornerX
        const dy = vertex.y - cornerY
        const dz = vertex.z - cornerZ
        
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
        
        if (distance > 0) {
          const ratio = roundingRadius / distance
          vertex.x = cornerX + dx * ratio
          vertex.y = cornerY + dy * ratio
          vertex.z = cornerZ + dz * ratio
        }
      } else if (isNearEdge) {
        if (absX > edgeThreshold && absY > edgeThreshold) {
          const signX = Math.sign(vertex.x)
          const signY = Math.sign(vertex.y)
          const edgeX = signX * edgeThreshold
          const edgeY = signY * edgeThreshold
          
          const dx = vertex.x - edgeX
          const dy = vertex.y - edgeY
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance > 0) {
            const ratio = roundingRadius / distance
            vertex.x = edgeX + dx * ratio
            vertex.y = edgeY + dy * ratio
          }
        }
        
        if (absY > edgeThreshold && absZ > edgeThreshold) {
          const signY = Math.sign(vertex.y)
          const signZ = Math.sign(vertex.z)
          const edgeY = signY * edgeThreshold
          const edgeZ = signZ * edgeThreshold
          
          const dy = vertex.y - edgeY
          const dz = vertex.z - edgeZ
          const distance = Math.sqrt(dy * dy + dz * dz)
          
          if (distance > 0) {
            const ratio = roundingRadius / distance
            vertex.y = edgeY + dy * ratio
            vertex.z = edgeZ + dz * ratio
          }
        }
        
        if (absX > edgeThreshold && absZ > edgeThreshold) {
          const signX = Math.sign(vertex.x)
          const signZ = Math.sign(vertex.z)
          const edgeX = signX * edgeThreshold
          const edgeZ = signZ * edgeThreshold
          
          const dx = vertex.x - edgeX
          const dz = vertex.z - edgeZ
          const distance = Math.sqrt(dx * dx + dz * dz)
          
          if (distance > 0) {
            const ratio = roundingRadius / distance
            vertex.x = edgeX + dx * ratio
            vertex.z = edgeZ + dz * ratio
          }
        }
      }
      
      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z)
    }
    
    geometry.computeVertexNormals()

    const cube = new THREE.Mesh(geometry, materials)
    cube.rotation.x = 0.3
    cube.rotation.y = 0.4
    scene.add(cube)
    cubeRef.current = cube

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight1.position.set(5, 5, 5)
    scene.add(directionalLight1)

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3)
    directionalLight2.position.set(-5, -5, -5)
    scene.add(directionalLight2)

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)

      if (cubeRef.current) {
        cubeRef.current.rotation.x += rotationVelocityRef.current.x
        cubeRef.current.rotation.y += rotationVelocityRef.current.y
        cubeRef.current.rotation.z += rotationVelocityRef.current.z

        rotationVelocityRef.current.x *= 0.98
        rotationVelocityRef.current.y *= 0.98
        rotationVelocityRef.current.z *= 0.98
      }

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
      geometry.dispose()
      materials.forEach(mat => {
        if (mat.map) mat.map.dispose()
        mat.dispose()
      })
      rendererRef.current?.dispose()
    }
  }, [faceColors, difficulty])

  useEffect(() => {
    if (isRolling) {
      rotationVelocityRef.current = {
        x: (Math.random() - 0.5) * 0.4,
        y: (Math.random() - 0.5) * 0.4,
        z: (Math.random() - 0.5) * 0.4
      }
    }
  }, [isRolling])

  return (
    <div className="relative inline-block">
      <div 
        ref={containerRef} 
        className="flex justify-center items-center"
        style={{ width: '300px', height: '300px' }}
      />
    </div>
  )
}

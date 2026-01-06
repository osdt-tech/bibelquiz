import { useCallback, useEffect, useState } from "react"

type SetValue<T> = (value: T | ((prev: T) => T)) => void

export function useKV<T>(key: string, initialValue: T): [T, SetValue<T>] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue
    const stored = window.localStorage.getItem(key)
    if (stored == null) return initialValue
    try {
      return JSON.parse(stored) as T
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Local storage can fail in private mode or due to quota limits.
    }
  }, [key, value])

  const setKVValue = useCallback<SetValue<T>>((nextValue) => {
    setValue((prev) =>
      typeof nextValue === "function"
        ? (nextValue as (current: T) => T)(prev)
        : nextValue
    )
  }, [])

  return [value, setKVValue]
}

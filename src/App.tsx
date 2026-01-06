import { useState, useEffect, useMemo } from 'react'
import { useKV } from '@/hooks/use-kv'
import { CATEGORIES, QUESTIONS, type CategoryColor, type Question, type Difficulty } from '@/lib/questions'
import { ColorDice } from '@/components/ColorDice'
import { QuestionReview } from '@/components/QuestionReview'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowsClockwise, Trophy, MagnifyingGlass } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

type GameState = 'selectDifficulty' | 'dice' | 'showCategory' | 'showQuestion'

// Memoized dice colors to prevent unnecessary re-renders
const DICE_COLORS = CATEGORIES.map(cat => cat.colorValue)

function App() {
  const [gameState, setGameState] = useState<GameState>('selectDifficulty')
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null)
  const [isRolling, setIsRolling] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<CategoryColor | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [usedQuestions, setUsedQuestions] = useKV<string[]>('bible-quiz-used-questions', [])
  const [showReviewMode, setShowReviewMode] = useState(false)

  const allQuestionsForDifficulty = useMemo(() => 
    selectedDifficulty 
      ? QUESTIONS.filter(q => q.difficulty === selectedDifficulty)
      : QUESTIONS,
    [selectedDifficulty]
  )
  
  const availableQuestions = useMemo(() => 
    QUESTIONS.filter(q => 
      !usedQuestions?.includes(q.id) && 
      (!selectedDifficulty || q.difficulty === selectedDifficulty)
    ),
    [usedQuestions, selectedDifficulty]
  )
  
  const questionsByCategory = useMemo(() => 
    CATEGORIES.reduce((acc, cat) => {
      acc[cat.color] = availableQuestions.filter(q => q.category === cat.color)
      return acc
    }, {} as Record<CategoryColor, Question[]>),
    [availableQuestions]
  )
  
  const answeredCount = allQuestionsForDifficulty.length - availableQuestions.length
  const category = CATEGORIES.find(cat => cat.color === selectedCategory)

  const handleDiceClick = () => {
    if (isRolling) return
    
    setIsRolling(true)
    setSelectedCategory(null)
    setGameState('dice')

    setTimeout(() => {
      const randomCategory = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]
      setSelectedCategory(randomCategory.color)
      setIsRolling(false)
      setGameState('showCategory')
    }, 2000)
  }

  useEffect(() => {
    if (gameState === 'showCategory' && selectedCategory) {
      const timer = setTimeout(() => {
        const categoryQuestions = questionsByCategory[selectedCategory] || []
        
        if (categoryQuestions.length > 0) {
          const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)]
          setCurrentQuestion(randomQuestion)
          setGameState('showQuestion')
        }
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [gameState, selectedCategory, questionsByCategory])

  const handleNextQuestion = () => {
    if (currentQuestion) {
      setUsedQuestions((current) => [...(current || []), currentQuestion.id])
    }
    setCurrentQuestion(null)
    setShowAnswer(false)
    setSelectedCategory(null)
    setGameState('dice')
  }



  const handleReset = () => {
    setUsedQuestions([])
    setCurrentQuestion(null)
    setShowAnswer(false)
    setSelectedCategory(null)
    setSelectedDifficulty(null)
    setGameState('selectDifficulty')
  }

  const allQuestionsUsed = availableQuestions.length === 0

  // Show review mode if enabled
  if (showReviewMode) {
    return <QuestionReview onClose={() => setShowReviewMode(false)} />
  }

  return (
    <div className="min-h-screen bg-background flex flex-col p-4 pt-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col items-center gap-4 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
              Bibelquiz
            </h1>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={handleReset}
                className="gap-2"
              >
                <ArrowsClockwise className="w-5 h-5" />
                Neues Spiel
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowReviewMode(true)}
                className="gap-2"
              >
                <MagnifyingGlass className="w-5 h-5" />
                Prüfmodus
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{answeredCount} Fragen beantwortet</span>
          </div>

          {allQuestionsUsed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center space-y-6"
            >
              <Trophy className="w-24 h-24 text-primary" weight="fill" />
              <Card className="p-8 text-center rounded-3xl">
                <h2 className="text-2xl font-bold mb-4">Glückwunsch!</h2>
                <p className="text-muted-foreground mb-6">
                  Du hast alle Fragen beantwortet!
                </p>
                <Button onClick={handleReset} className="gap-2">
                  <ArrowsClockwise className="w-5 h-5" />
                  Neues Spiel starten
                </Button>
              </Card>
            </motion.div>
          ) : (
            <>
              <AnimatePresence mode="wait">
                {gameState === 'selectDifficulty' && (
                  <motion.div
                    key="difficulty"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col md:flex-row items-center gap-12 w-full justify-center"
                  >
                    <div 
                      className="cursor-pointer transition-transform hover:scale-105"
                      onClick={handleDiceClick}
                    >
                      <ColorDice isRolling={isRolling} faceColors={DICE_COLORS} difficulty={selectedDifficulty} />
                    </div>

                    <Card className="p-8 text-center rounded-3xl">
                      <h2 className="text-2xl font-bold mb-6">Wähle die Schwierigkeit</h2>
                      <div className="flex gap-4 justify-center">
                        <Button
                          size="lg"
                          variant="outline"
                          className="text-4xl font-bold w-20 h-20"
                          onClick={() => {
                            setSelectedDifficulty(1)
                            setGameState('dice')
                          }}
                        >
                          1
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="text-4xl font-bold w-20 h-20"
                          onClick={() => {
                            setSelectedDifficulty(2)
                            setGameState('dice')
                          }}
                        >
                          2
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="text-4xl font-bold w-20 h-20"
                          onClick={() => {
                            setSelectedDifficulty(3)
                            setGameState('dice')
                          }}
                        >
                          3
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                )}

                {gameState === 'dice' && (
                  <motion.div
                    key="dice"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col items-center gap-8 w-full justify-center"
                  >
                    <div 
                      className="cursor-pointer transition-transform hover:scale-105"
                      onClick={handleDiceClick}
                    >
                      <ColorDice isRolling={isRolling} faceColors={DICE_COLORS} difficulty={selectedDifficulty} />
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <p className="text-muted-foreground">Klicke auf den Würfel</p>
                    </div>
                  </motion.div>
                )}

                {gameState === 'showCategory' && category && (
                  <motion.div
                    key="category"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center space-y-8"
                  >
                    <div 
                      className="w-48 h-48 rounded-full flex items-center justify-center text-6xl shadow-2xl"
                      style={{ 
                        backgroundColor: category.colorValue,
                        color: category.textColor
                      }}
                    >
                      {category.icon}
                    </div>
                    <Card className="p-8 text-center rounded-3xl">
                      <h2 className="text-3xl font-bold">{category.name}</h2>
                    </Card>
                  </motion.div>
                )}

                {gameState === 'showQuestion' && currentQuestion && category && (
                  <motion.div
                    key="question"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="w-full"
                    style={{ perspective: '1000px', minHeight: '400px' }}
                  >
                    <motion.div
                      animate={{ rotateY: showAnswer ? 180 : 0 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      style={{ transformStyle: 'preserve-3d' }}
                      className="relative w-full"
                    >
                      <div 
                        className="absolute w-full top-0 left-0 p-8 rounded-lg"
                        style={{ 
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(0deg)',
                          backgroundColor: category.colorValue,
                          color: category.textColor,
                          border: `3px solid ${category.colorValue}`,
                          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                        }}
                      >
                        <div className="flex items-start justify-between mb-8">
                          <div className="flex items-center gap-3">
                            <div className="text-3xl">{category.icon}</div>
                            <h3 className="font-bold text-xl">{category.name}</h3>
                          </div>
                          <div className="text-6xl font-bold">{currentQuestion.difficulty}</div>
                        </div>

                        <div className="space-y-6">
                          <h2 className="text-2xl font-semibold leading-relaxed">
                            {currentQuestion.question}
                          </h2>

                          <div className="flex gap-4 pt-6">
                            <Button 
                              onClick={() => setShowAnswer(true)}
                              className="flex-1 bg-white/90 hover:bg-white text-foreground font-bold text-lg py-6"
                              size="lg"
                            >
                              Antwort anzeigen
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div 
                        className="absolute w-full top-0 left-0 p-8 rounded-lg"
                        style={{ 
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                          backgroundColor: category.colorValue,
                          color: category.textColor,
                          border: `3px solid ${category.colorValue}`,
                          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                        }}
                      >
                        <div className="flex items-start justify-between mb-8">
                          <div className="flex items-center gap-3">
                            <div className="text-3xl">{category.icon}</div>
                            <h3 className="font-bold text-xl">{category.name}</h3>
                          </div>
                          <div className="text-6xl font-bold">{currentQuestion.difficulty}</div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h3 className="font-bold text-2xl mb-4">Antwort:</h3>
                            <p className="text-xl leading-relaxed">{currentQuestion.answer}</p>
                          </div>

                          <div className="flex gap-4 pt-6">
                            <Button 
                              onClick={handleNextQuestion}
                              className="w-full gap-2 bg-white/90 hover:bg-white text-foreground font-bold text-lg py-6"
                              size="lg"
                            >
                              Nächste Frage
                              <ArrowRight className="w-5 h-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mt-12">
                {CATEGORIES.map((cat) => {
                  const categoryQuestions = questionsByCategory[cat.color] || []
                  return (
                    <Card 
                      key={cat.color}
                      className="p-4 text-center rounded-3xl"
                      style={{ 
                        backgroundColor: cat.colorValue,
                        color: cat.textColor,
                        borderColor: cat.colorValue
                      }}
                    >
                      <div className="text-3xl mb-2">{cat.icon}</div>
                      <div className="font-bold text-sm mb-1">{cat.name}</div>
                      <div className="text-xs opacity-80">
                        {categoryQuestions.length} übrig
                      </div>
                    </Card>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App

import { useState, useEffect, useMemo } from 'react'
import { useKV } from '@/hooks/use-kv'
import { CATEGORIES, QUESTIONS, type CategoryColor, type Question, type Difficulty } from '@/lib/questions'
import { ColorDice } from '@/components/ColorDice'
import { QuestionReview } from '@/components/QuestionReview'
import { Rules } from '@/components/Rules'
import { type Player } from '@/components/PlayerSetup'
import { Scoreboard } from '@/components/Scoreboard'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowsClockwise, Trophy, MagnifyingGlass, BookOpen, UserPlus, Trash, Users, Cube } from '@phosphor-icons/react'
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
  const [showRules, setShowRules] = useState(false)
  const [showPlayerSetup, setShowPlayerSetup] = useState(true)
  const [players, setPlayers] = useState<Player[]>([])
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const [soloMode, setSoloMode] = useState(true)
  const [tempPlayerName, setTempPlayerName] = useState('')
  const [isMultiplayer, setIsMultiplayer] = useState(false)

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

  const handleNextQuestion = (answeredCorrectly: boolean = false) => {
    if (currentQuestion) {
      setUsedQuestions((current) => [...(current || []), currentQuestion.id])
      
      // Punkte nur im Mehrspieler-Modus vergeben
      if (!soloMode && players.length > 0 && answeredCorrectly) {
        const updatedPlayers = [...players]
        updatedPlayers[currentPlayerIndex].score += currentQuestion.difficulty
        setPlayers(updatedPlayers)
      }
    }
    
    setCurrentQuestion(null)
    setShowAnswer(false)
    setSelectedCategory(null)
    setGameState('dice')
    
    // Nächster Spieler ist dran (nur im Mehrspieler-Modus)
    if (!soloMode && players.length > 0) {
      setCurrentPlayerIndex((current) => (current + 1) % players.length)
    }
  }



  const handleReset = () => {
    setUsedQuestions([])
    setCurrentQuestion(null)
    setShowAnswer(false)
    setSelectedCategory(null)
    setSelectedDifficulty(null)
    setGameState('selectDifficulty')
    setShowPlayerSetup(true)
    setPlayers([])
    setCurrentPlayerIndex(0)
    setSoloMode(true)
    setIsMultiplayer(false)
    setTempPlayerName('')
  }

  const addPlayer = () => {
    if (tempPlayerName.trim()) {
      const newPlayer: Player = {
        id: Math.random().toString(36).substr(2, 9),
        name: tempPlayerName.trim(),
        score: 0
      }
      setPlayers([...players, newPlayer])
      setTempPlayerName('')
    }
  }

  const removePlayer = (id: string) => {
    setPlayers(players.filter(p => p.id !== id))
  }

  const startWithPlayers = () => {
    if (players.length >= 2) {
      const shuffledPlayers = [...players].sort(() => Math.random() - 0.5)
      setPlayers(shuffledPlayers)
      setSoloMode(false)
      setShowPlayerSetup(false)
    }
  }

  const startSolo = () => {
    setPlayers([])
    setSoloMode(true)
    setShowPlayerSetup(false)
  }

  const allQuestionsUsed = availableQuestions.length === 0

  // Show rules if enabled
  if (showRules) {
    return <Rules onClose={() => setShowRules(false)} />
  }

  // Show review mode if enabled
  if (showReviewMode) {
    return <QuestionReview onClose={() => setShowReviewMode(false)} />
  }

  return (
    <div className="min-h-screen bg-background flex flex-col p-2 sm:p-4 pt-4 sm:pt-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-4 sm:space-y-8">
          <div className="flex flex-col items-center gap-2 sm:gap-4 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center">
              Bibelquiz
            </h1>
            <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
              <Button 
                variant="outline" 
                onClick={handleReset}
                className="gap-1 sm:gap-2 text-xs sm:text-sm"
                size="sm"
              >
                <ArrowsClockwise className="w-4 h-4" />
                <span className="hidden sm:inline">Neues Spiel</span>
                <span className="sm:hidden">Neu</span>
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowReviewMode(true)}
                className="gap-1 sm:gap-2 text-xs sm:text-sm"
                size="sm"
              >
                <MagnifyingGlass className="w-4 h-4" />
                <span className="hidden sm:inline">Prüfmodus</span>
                <span className="sm:hidden">Prüfen</span>
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowRules(true)}
                className="gap-1 sm:gap-2 text-xs sm:text-sm"
                size="sm"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Spielregeln</span>
                <span className="sm:hidden">Regeln</span>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{answeredCount} Fragen beantwortet</span>
            {!soloMode && players.length > 0 && (
              <>
                <span>•</span>
                <span className="font-semibold text-primary">
                  {players[currentPlayerIndex]?.name} ist am Zug
                </span>
              </>
            )}
          </div>

          {allQuestionsUsed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center space-y-4 sm:space-y-6"
            >
              <Trophy className="w-16 h-16 sm:w-24 sm:h-24 text-primary" weight="fill" />
              <Card className="p-4 sm:p-8 text-center rounded-2xl sm:rounded-3xl">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Glückwunsch!</h2>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  Du hast alle Fragen beantwortet!
                </p>
                <Button onClick={handleReset} className="gap-1 sm:gap-2 text-sm sm:text-base">
                  <ArrowsClockwise className="w-4 h-4 sm:w-5 sm:h-5" />
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
                    className="flex flex-col items-center gap-8 w-full max-w-5xl"
                  >
                    <div className={`flex flex-col md:flex-row items-center md:items-start gap-8 w-full ${!showPlayerSetup ? 'justify-center' : ''}`}>
                      {/* Spieler Setup */}
                      {showPlayerSetup && (
                        <Card className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl w-full md:w-96">
                        <div className="space-y-6">
                          {/* Toggle zwischen Solo und Mehrspieler */}
                          <div className="flex gap-2">
                            <Button
                              variant={!isMultiplayer ? "default" : "outline"}
                              className="flex-1"
                              onClick={() => {
                                setIsMultiplayer(false)
                                if (!showPlayerSetup) {
                                  startSolo()
                                }
                              }}
                            >
                              <Users className="w-4 h-4 mr-2" />
                              Solo
                            </Button>
                            <Button
                              variant={isMultiplayer ? "default" : "outline"}
                              className="flex-1"
                              onClick={() => setIsMultiplayer(true)}
                            >
                              <Cube className="w-4 h-4 mr-2" />
                              Mehrspieler
                            </Button>
                          </div>

                          {!isMultiplayer ? (
                            /* Solo Modus */
                            <div className="text-center py-4">
                              <p className="text-muted-foreground mb-4">
                                Ohne Punktezählung, nur zum Üben
                              </p>
                              {showPlayerSetup && (
                                <Button onClick={startSolo} size="lg" className="w-full">
                                  Spiel starten
                                </Button>
                              )}
                            </div>
                          ) : (
                            /* Mehrspieler Modus */
                            <div className="space-y-4">
                              <p className="text-sm text-muted-foreground">
                                Mindestens 2 Spieler für Mehrspieler-Modus
                              </p>

                              {/* Spieler hinzufügen */}
                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  value={tempPlayerName}
                                  onChange={(e) => setTempPlayerName(e.target.value)}
                                  onKeyPress={(e) => e.key === 'Enter' && addPlayer()}
                                  placeholder="Spielername..."
                                  className="flex-1 px-3 py-2 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                />
                                <Button
                                  onClick={addPlayer}
                                  disabled={!tempPlayerName.trim()}
                                  size="sm"
                                  className="gap-1"
                                >
                                  <UserPlus className="w-4 h-4" />
                                </Button>
                              </div>

                              {/* Spielerliste */}
                              {players.length > 0 && (
                                <div className="space-y-2">
                                  <h4 className="text-sm font-medium text-muted-foreground">
                                    Spieler ({players.length})
                                  </h4>
                                  <div className="space-y-2 max-h-40 overflow-y-auto">
                                    {players.map((player, index) => (
                                      <div
                                        key={player.id}
                                        className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
                                      >
                                        <div className="flex items-center gap-2">
                                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
                                            {index + 1}
                                          </div>
                                          <span className="text-sm font-medium">{player.name}</span>
                                        </div>
                                        <Button
                                          variant="ghost"
                                          size="icon"
                                          onClick={() => removePlayer(player.id)}
                                          className="h-6 w-6"
                                        >
                                          <Trash className="w-3 h-3" />
                                        </Button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Start Button */}
                              {showPlayerSetup && (
                                <Button
                                  onClick={startWithPlayers}
                                  disabled={players.length < 2}
                                  size="lg"
                                  className="w-full gap-2"
                                >
                                  <Cube className="w-5 h-5" />
                                  {players.length < 2 
                                    ? 'Mindestens 2 Spieler benötigt'
                                    : 'Spiel starten'
                                  }
                                </Button>
                              )}

                              {players.length === 1 && (
                                <p className="text-xs text-muted-foreground text-center">
                                  Füge mindestens einen weiteren Spieler hinzu
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </Card>
                      )}

                      {/* Würfel und Schwierigkeitsauswahl */}
                      <div className="flex flex-col items-center gap-4 sm:gap-8 flex-1 justify-center w-full md:w-auto">
                        <div 
                          className="cursor-pointer transition-transform hover:scale-105"
                          onClick={showPlayerSetup ? undefined : handleDiceClick}
                          style={{ opacity: showPlayerSetup ? 0.5 : 1, pointerEvents: showPlayerSetup ? 'none' : 'auto' }}
                        >
                          <ColorDice isRolling={isRolling} faceColors={DICE_COLORS} difficulty={selectedDifficulty} />
                        </div>

                        <Card className="p-4 sm:p-8 text-center rounded-2xl sm:rounded-3xl w-full max-w-sm">
                          <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">Wähle die Schwierigkeit</h2>
                          <div className="flex gap-2 sm:gap-4 justify-center">
                            <Button
                              size="lg"
                              variant="outline"
                              className="text-2xl sm:text-4xl font-bold w-16 h-16 sm:w-20 sm:h-20"
                              disabled={showPlayerSetup}
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
                              className="text-2xl sm:text-4xl font-bold w-16 h-16 sm:w-20 sm:h-20"
                              disabled={showPlayerSetup}
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
                              className="text-2xl sm:text-4xl font-bold w-16 h-16 sm:w-20 sm:h-20"
                              disabled={showPlayerSetup}
                              onClick={() => {
                                setSelectedDifficulty(3)
                                setGameState('dice')
                              }}
                            >
                              3
                            </Button>
                          </div>
                        </Card>
                      </div>
                    </div>
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

                    {/* Scoreboard für Mehrspieler unter dem Würfel */}
                    {!soloMode && players.length > 0 && (
                      <div className="w-full max-w-2xl">
                        <Scoreboard players={players} currentPlayerIndex={currentPlayerIndex} />
                      </div>
                    )}

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
                    className="flex flex-col items-center space-y-4 sm:space-y-8"
                  >
                    <div 
                      className="w-32 h-32 sm:w-48 sm:h-48 rounded-full flex items-center justify-center text-4xl sm:text-6xl shadow-2xl"
                      style={{ 
                        backgroundColor: category.colorValue,
                        color: category.textColor
                      }}
                    >
                      {category.icon}
                    </div>
                    <Card className="p-4 sm:p-8 text-center rounded-2xl sm:rounded-3xl">
                      <h2 className="text-xl sm:text-3xl font-bold">{category.name}</h2>
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
                        <div className="flex items-start justify-between mb-4 sm:mb-8">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="text-xl sm:text-3xl">{category.icon}</div>
                            <h3 className="font-bold text-base sm:text-xl">{category.name}</h3>
                          </div>
                          <div className="text-3xl sm:text-6xl font-bold">{currentQuestion.difficulty}</div>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                          <h2 className="text-lg sm:text-2xl font-semibold leading-relaxed">
                            {currentQuestion.question}
                          </h2>

                          <div className="flex gap-2 sm:gap-4 pt-4 sm:pt-6">
                            <Button 
                              onClick={() => setShowAnswer(true)}
                              className="flex-1 bg-white/90 hover:bg-white text-foreground font-bold text-sm sm:text-lg py-4 sm:py-6"
                              size="lg"
                            >
                              Antwort anzeigen
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div 
                        className="absolute w-full top-0 left-0 p-4 sm:p-8 rounded-lg"
                        style={{ 
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                          backgroundColor: category.colorValue,
                          color: category.textColor,
                          border: `3px solid ${category.colorValue}`,
                          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                        }}
                      >
                        <div className="flex items-start justify-between mb-4 sm:mb-8">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="text-xl sm:text-3xl">{category.icon}</div>
                            <h3 className="font-bold text-base sm:text-xl">{category.name}</h3>
                          </div>
                          <div className="text-3xl sm:text-6xl font-bold">{currentQuestion.difficulty}</div>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                          <div>
                            <h3 className="font-bold text-lg sm:text-2xl mb-2 sm:mb-4">Antwort:</h3>
                            <p className="text-base sm:text-xl leading-relaxed">{currentQuestion.answer}</p>
                          </div>

                          {!soloMode && players.length > 0 && (
                            <div className="bg-white/20 p-3 sm:p-4 rounded-xl">
                              <p className="text-sm sm:text-lg font-semibold mb-2">Hast du richtig geantwortet?</p>
                              <div className="flex gap-2 sm:gap-3">
                                <Button 
                                  onClick={() => handleNextQuestion(true)}
                                  className="flex-1 gap-1 sm:gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-sm sm:text-lg py-3 sm:py-4"
                                  size="lg"
                                >
                                  ✓ Ja (+{currentQuestion.difficulty} Punkt{currentQuestion.difficulty > 1 ? 'e' : ''})
                                </Button>
                                <Button 
                                  onClick={() => handleNextQuestion(false)}
                                  className="flex-1 gap-1 sm:gap-2 bg-red-500 hover:bg-red-600 text-white font-bold text-sm sm:text-lg py-3 sm:py-4"
                                  size="lg"
                                >
                                  ✗ Nein
                                </Button>
                              </div>
                            </div>
                          )}

                          {soloMode && (
                            <div className="flex gap-2 sm:gap-4">
                              <Button 
                                onClick={() => handleNextQuestion()}
                                className="w-full gap-1 sm:gap-2 bg-white/90 hover:bg-white text-foreground font-bold text-sm sm:text-lg py-4 sm:py-6"
                                size="lg"
                              >
                                Nächste Frage
                                <ArrowRight className="w-5 h-5" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 w-full mt-8 sm:mt-12">
                {CATEGORIES.map((cat) => {
                  const categoryQuestions = questionsByCategory[cat.color] || []
                  return (
                    <Card 
                      key={cat.color}
                      className="p-2 sm:p-4 text-center rounded-2xl sm:rounded-3xl"
                      style={{ 
                        backgroundColor: cat.colorValue,
                        color: cat.textColor,
                        borderColor: cat.colorValue
                      }}
                    >
                      <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{cat.icon}</div>
                      <div className="font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">{cat.name}</div>
                      <div className="text-[10px] sm:text-xs opacity-80">
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

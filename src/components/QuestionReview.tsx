import { useState, useMemo } from 'react'
import { CATEGORIES, QUESTIONS, type CategoryColor, type Difficulty } from '@/lib/questions'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, X, FunnelSimple } from '@phosphor-icons/react'

interface QuestionReviewProps {
  onClose: () => void
}

export function QuestionReview({ onClose }: QuestionReviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filterCategory, setFilterCategory] = useState<CategoryColor | 'all'>('all')
  const [filterDifficulty, setFilterDifficulty] = useState<Difficulty | 'all'>('all')

  const filteredQuestions = useMemo(() => {
    return QUESTIONS.filter(q => {
      if (filterCategory !== 'all' && q.category !== filterCategory) return false
      if (filterDifficulty !== 'all' && q.difficulty !== filterDifficulty) return false
      return true
    })
  }, [filterCategory, filterDifficulty])

  const currentQuestion = filteredQuestions[currentIndex]
  const category = CATEGORIES.find(cat => cat.color === currentQuestion?.category)

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1))
  }

  const handleCategoryFilter = (cat: CategoryColor | 'all') => {
    setFilterCategory(cat)
    setCurrentIndex(0)
  }

  const handleDifficultyFilter = (diff: Difficulty | 'all') => {
    setFilterDifficulty(diff)
    setCurrentIndex(0)
  }

  if (!currentQuestion || !category) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <Card className="p-8 text-center">
          <p className="text-muted-foreground mb-4">Keine Fragen gefunden</p>
          <Button onClick={onClose}>Zurück zum Quiz</Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col p-2 sm:p-4 pt-4 sm:pt-8">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-lg sm:text-2xl font-bold">Fragen-Prüfmodus</h1>
          <Button variant="outline" onClick={onClose} className="gap-1 sm:gap-2 text-xs sm:text-sm" size="sm">
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
            Schließen
          </Button>
        </div>

        {/* Filter */}
        <Card className="p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <FunnelSimple className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold text-sm sm:text-base">Filter</span>
          </div>
          
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <div>
              <label className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2 block">Kategorie</label>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                <Button
                  size="sm"
                  variant={filterCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => handleCategoryFilter('all')}
                >
                  Alle
                </Button>
                {CATEGORIES.map(cat => (
                  <Button
                    key={cat.color}
                    size="sm"
                    variant={filterCategory === cat.color ? 'default' : 'outline'}
                    onClick={() => handleCategoryFilter(cat.color)}
                    style={filterCategory === cat.color ? { 
                      backgroundColor: cat.colorValue, 
                      color: cat.textColor,
                      borderColor: cat.colorValue
                    } : {}}
                  >
                    {cat.icon} {cat.name}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2 block">Schwierigkeit</label>
              <div className="flex gap-1 sm:gap-2">
                <Button
                  size="sm"
                  variant={filterDifficulty === 'all' ? 'default' : 'outline'}
                  onClick={() => handleDifficultyFilter('all')}
                >
                  Alle
                </Button>
                {([1, 2, 3] as Difficulty[]).map(diff => (
                  <Button
                    key={diff}
                    size="sm"
                    variant={filterDifficulty === diff ? 'default' : 'outline'}
                    onClick={() => handleDifficultyFilter(diff)}
                  >
                    {diff}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Progress */}
        <div className="text-center mb-3 sm:mb-4 text-sm sm:text-base text-muted-foreground">
          Frage {currentIndex + 1} von {filteredQuestions.length}
          <span className="ml-2 text-[10px] sm:text-xs">
            (ID: {currentQuestion.id})
          </span>
        </div>

        {/* Question Card */}
        <Card 
          className="p-4 sm:p-8 mb-4 sm:mb-6"
          style={{ 
            backgroundColor: category.colorValue,
            color: category.textColor,
            border: `3px solid ${category.colorValue}`
          }}
        >
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="text-xl sm:text-3xl">{category.icon}</div>
              <h3 className="font-bold text-base sm:text-xl">{category.name}</h3>
            </div>
            <div className="text-3xl sm:text-5xl font-bold">{currentQuestion.difficulty}</div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <h4 className="text-xs sm:text-sm font-semibold opacity-70 mb-1 sm:mb-2">FRAGE:</h4>
              <h2 className="text-base sm:text-xl font-semibold leading-relaxed">
                {currentQuestion.question}
              </h2>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-current/20">
              <h4 className="text-xs sm:text-sm font-semibold opacity-70 mb-1 sm:mb-2">ANTWORT:</h4>
              <p className="text-sm sm:text-lg leading-relaxed">
                {currentQuestion.answer}
              </p>
            </div>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between gap-2 sm:gap-4">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="gap-1 sm:gap-2 text-xs sm:text-sm"
            size="sm"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Vorherige</span>
            <span className="sm:hidden">Zurück</span>
          </Button>
          
          <div className="flex gap-1 sm:gap-2">
            <input
              type="number"
              min={1}
              max={filteredQuestions.length}
              value={currentIndex + 1}
              onChange={(e) => {
                const val = parseInt(e.target.value) - 1
                if (val >= 0 && val < filteredQuestions.length) {
                  setCurrentIndex(val)
                }
              }}
              className="w-16 sm:w-20 text-center border rounded-md px-1 sm:px-2 py-1 text-sm"
            />
          </div>

          <Button
            variant="outline"
            onClick={handleNext}
            disabled={currentIndex === filteredQuestions.length - 1}
            className="gap-1 sm:gap-2 text-xs sm:text-sm"
            size="sm"
          >
            <span className="hidden sm:inline">Nächste</span>
            <span className="sm:hidden">Weiter</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>

        {/* Stats */}
        <Card className="p-3 sm:p-4 mt-4 sm:mt-6">
          <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Statistik</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm">
            <div>
              <span className="text-muted-foreground">Gesamt:</span>
              <span className="ml-2 font-bold">{QUESTIONS.length}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Gefiltert:</span>
              <span className="ml-2 font-bold">{filteredQuestions.length}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Kategorie:</span>
              <span className="ml-2 font-bold">
                {filterCategory === 'all' ? 'Alle' : CATEGORIES.find(c => c.color === filterCategory)?.name}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">Schwierigkeit:</span>
              <span className="ml-2 font-bold">
                {filterDifficulty === 'all' ? 'Alle' : filterDifficulty}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

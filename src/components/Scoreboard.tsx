import { Card } from '@/components/ui/card'
import { Trophy, Crown } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import type { Player } from './PlayerSetup'

interface ScoreboardProps {
  players: Player[]
  currentPlayerIndex: number
}

export function Scoreboard({ players, currentPlayerIndex }: ScoreboardProps) {
  if (players.length === 0) return null

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score)
  const maxScore = Math.max(...players.map(p => p.score), 0)

  return (
    <Card className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl">
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-primary" weight="duotone" />
        <h2 className="text-lg sm:text-xl font-bold">Spielstand</h2>
      </div>
      
      <div className="space-y-2">
        {sortedPlayers.map((player, index) => {
          const isCurrentPlayer = players[currentPlayerIndex]?.id === player.id
          const isLeader = player.score === maxScore && maxScore > 0
          
          return (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`
                flex items-center justify-between p-2 sm:p-3 rounded-xl transition-all
                ${isCurrentPlayer 
                  ? 'bg-primary/20 border-2 border-primary' 
                  : 'bg-muted/50'
                }
              `}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className={`
                  w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold
                  ${isCurrentPlayer 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-primary/20'
                  }
                `}>
                  {index + 1}
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className={`font-medium text-sm sm:text-base ${isCurrentPlayer ? 'font-bold' : ''}`}>
                    {player.name}
                  </span>
                  {isCurrentPlayer && (
                    <span className="text-[10px] sm:text-xs bg-primary text-primary-foreground px-1.5 sm:px-2 py-0.5 rounded-full">
                      Am Zug
                    </span>
                  )}
                  {isLeader && (
                    <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" weight="fill" />
                  )}
                </div>
              </div>
              <div className="text-sm sm:text-lg font-bold">
                {player.score} <span className="hidden sm:inline">{player.score === 1 ? 'Punkt' : 'Punkte'}</span><span className="sm:hidden">P</span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Card>
  )
}

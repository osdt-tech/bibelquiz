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
    <Card className="p-6 rounded-3xl">
      <div className="flex items-center gap-3 mb-4">
        <Trophy className="w-6 h-6 text-primary" weight="duotone" />
        <h2 className="text-xl font-bold">Spielstand</h2>
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
                flex items-center justify-between p-3 rounded-xl transition-all
                ${isCurrentPlayer 
                  ? 'bg-primary/20 border-2 border-primary' 
                  : 'bg-muted/50'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  ${isCurrentPlayer 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-primary/20'
                  }
                `}>
                  {index + 1}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`font-medium ${isCurrentPlayer ? 'font-bold' : ''}`}>
                    {player.name}
                  </span>
                  {isCurrentPlayer && (
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                      Am Zug
                    </span>
                  )}
                  {isLeader && (
                    <Crown className="w-4 h-4 text-yellow-500" weight="fill" />
                  )}
                </div>
              </div>
              <div className="text-lg font-bold">
                {player.score} {player.score === 1 ? 'Punkt' : 'Punkte'}
              </div>
            </motion.div>
          )
        })}
      </div>
    </Card>
  )
}

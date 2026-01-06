import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, UserPlus, Trash, Cube, X } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export interface Player {
  id: string
  name: string
  score: number
}

interface PlayerSetupProps {
  onStartGame: (players: Player[], soloMode: boolean) => void
  onClose: () => void
}

export function PlayerSetup({ onStartGame, onClose }: PlayerSetupProps) {
  const [players, setPlayers] = useState<Player[]>([])
  const [newPlayerName, setNewPlayerName] = useState('')

  const addPlayer = () => {
    if (newPlayerName.trim()) {
      const newPlayer: Player = {
        id: Math.random().toString(36).substr(2, 9),
        name: newPlayerName.trim(),
        score: 0
      }
      setPlayers([...players, newPlayer])
      setNewPlayerName('')
    }
  }

  const removePlayer = (id: string) => {
    setPlayers(players.filter(p => p.id !== id))
  }

  const handleStartMultiplayer = () => {
    if (players.length >= 2) {
      // Zufällige Reihenfolge der Spieler
      const shuffledPlayers = [...players].sort(() => Math.random() - 0.5)
      onStartGame(shuffledPlayers, false)
    }
  }

  const handleStartSolo = () => {
    onStartGame([], true)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col p-4 pt-8">
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Spieler einrichten
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="space-y-6">
          {/* Solo spielen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="p-6 rounded-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" weight="duotone" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Alleine spielen</h3>
                    <p className="text-sm text-muted-foreground">Ohne Punktezählung, nur zum Üben</p>
                  </div>
                </div>
                <Button onClick={handleStartSolo} size="lg">
                  Starten
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Mehrspieler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Cube className="w-6 h-6 text-primary" weight="duotone" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Mehrspieler-Modus</h3>
                  <p className="text-sm text-muted-foreground">Mit Punktezählung (mindestens 2 Spieler)</p>
                </div>
              </div>

              {/* Spieler hinzufügen */}
              <div className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newPlayerName}
                    onChange={(e) => setNewPlayerName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addPlayer()}
                    placeholder="Spielername eingeben..."
                    className="flex-1 px-4 py-2 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button
                    onClick={addPlayer}
                    disabled={!newPlayerName.trim()}
                    className="gap-2"
                  >
                    <UserPlus className="w-5 h-5" />
                    Hinzufügen
                  </Button>
                </div>

                {/* Spielerliste */}
                {players.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Spieler ({players.length})
                    </h4>
                    <div className="space-y-2">
                      {players.map((player, index) => (
                        <motion.div
                          key={player.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="flex items-center justify-between p-3 rounded-xl bg-muted/50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                            <span className="font-medium">{player.name}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removePlayer(player.id)}
                            className="h-8 w-8"
                          >
                            <Trash className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Start Button */}
                {players.length >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pt-4"
                  >
                    <Button
                      onClick={handleStartMultiplayer}
                      size="lg"
                      className="w-full gap-2"
                    >
                      <Cube className="w-5 h-5" />
                      Spiel starten (Startspieler wird zufällig bestimmt)
                    </Button>
                  </motion.div>
                )}

                {players.length === 1 && (
                  <p className="text-sm text-muted-foreground text-center pt-2">
                    Füge mindestens einen weiteren Spieler hinzu
                  </p>
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

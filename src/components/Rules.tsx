import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { X, Cube, Users, Trophy, Palette } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

interface RulesProps {
  onClose: () => void
}

export function Rules({ onClose }: RulesProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col p-2 sm:p-4 pt-4 sm:pt-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Spielregeln
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* Einführung */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
          >
            <Card className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <Cube className="w-8 h-8 sm:w-12 sm:h-12 text-primary" weight="duotone" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">Ein fröhliches Frage- und Antwortspiel mit Farbwürfeln</h2>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    <strong>spannend – lehrreich – interessant</strong>
                  </p>
                  <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
                    <p><strong>Spieler:</strong> 2 – 6 Personen</p>
                    <p><strong>Alter:</strong> 8 – 99</p>
                    <p><strong>Inhalt:</strong> 300 Frage- und Antwortkarten aus 6 Wissensgebieten der Bibel in drei Schwierigkeitsstufen</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Spielablauf */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-primary" weight="duotone" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Spielablauf</h2>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        <strong>1. Schwierigkeit wählen:</strong> Zu Beginn wählst du die Schwierigkeit der Fragen aus (1, 2 oder 3).
                      </p>
                    </div>

                    <div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        <strong>2. Würfeln:</strong> Klicke auf den Farbwürfel, um eine zufällige Kategorie zu ermitteln. 
                        Der Würfel entscheidet, aus welchem Wissensgebiet deine nächste Frage stammt.
                      </p>
                    </div>

                    <div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        <strong>3. Frage beantworten:</strong> Nach dem Würfeln wird dir automatisch eine Frage aus der 
                        gewürfelten Kategorie angezeigt. Überlege in Ruhe und klicke dann auf "Antwort zeigen", 
                        um die richtige Lösung zu sehen.
                      </p>
                    </div>

                    <div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        <strong>4. Punkte zählen:</strong> Bei richtiger Antwort erhältst du die entsprechenden Punkte 
                        (1, 2 oder 3 Punkte je nach Schwierigkeitsgrad). Bei falscher Antwort kannst du dir die Frage merken 
                        und beim nächsten Mal besser vorbereitet sein!
                      </p>
                    </div>

                    <div className="bg-primary/5 p-3 sm:p-4 rounded-xl">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        <strong>Tipp:</strong> Die digitale Version eignet sich perfekt zum Lernen und Trainieren! 
                        Du kannst jederzeit neue Runden starten oder im Prüfmodus gezielt Fragen aus bestimmten 
                        Kategorien üben.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Spielende */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-primary" weight="duotone" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Spielende</h2>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                    <p className="leading-relaxed">
                      Die zu einem Sieg notwendige Höchstpunktzahl kann beliebig hoch festgelegt werden, etwa auf 30 Punkte. 
                      Der Spieler, der zuerst die festgelegte Punktzahl erreicht, ist Sieger.
                    </p>
                    <p className="leading-relaxed">
                      Haben zwei oder mehrere Spieler im letzten Fragendurchgang die festgelegte Höchstpunktzahl erreicht, 
                      so wird der Sieger durch Zusatzfrage ermittelt.
                    </p>
                    <div className="bg-primary/5 p-3 sm:p-4 rounded-xl">
                      <p className="leading-relaxed font-medium">
                        Das Bibelquiz kann natürlich auch ohne eine zu erreichende Höchstpunktzahl gespielt werden, 
                        also nach jeder Fragerunde abgebrochen werden. Sieger ist dann der Spieler, der bis dahin 
                        die meisten Punkte gewonnen hat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Schwierigkeitsgrade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary" weight="duotone" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Schwierigkeitsgrade der Fragen</h2>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                    <p className="leading-relaxed">
                      Die Fragen haben drei Schwierigkeitsgrade, die auf jeder Fragekarte rechts oben angegeben sind:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                      <div className="bg-green-500/10 border border-green-500/20 p-3 sm:p-4 rounded-xl text-center">
                        <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1 sm:mb-2">1</div>
                        <p className="font-medium text-sm sm:text-base">Leichte Frage</p>
                        <p className="text-xs sm:text-sm">1 Punkt</p>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/20 p-3 sm:p-4 rounded-xl text-center">
                        <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-1 sm:mb-2">2</div>
                        <p className="font-medium text-sm sm:text-base">Mittelschwere Frage</p>
                        <p className="text-xs sm:text-sm">2 Punkte</p>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/20 p-3 sm:p-4 rounded-xl text-center">
                        <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-1 sm:mb-2">3</div>
                        <p className="font-medium text-sm sm:text-base">Schwere Frage</p>
                        <p className="text-xs sm:text-sm">3 Punkte</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Variationsmöglichkeiten */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-secondary/20 to-secondary/5">
              <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Variationsmöglichkeiten</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                <p className="leading-relaxed">
                  Anstelle von Einzelspielern können auch kleine Gruppen gebildet werden, die als Mannschaften 
                  gegeneinander spielen.
                </p>
                <p className="leading-relaxed">
                  Man kann die Punktzahl auch verändern, indem man die Zahl mit dem Schwierigkeitsgrad bei der 
                  Gutschrift mit einer Null hinten versieht – bei ungelösten Fragen würde man entsprechend 
                  Zahlen absetzen.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Viel Spaß */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-center bg-gradient-to-r from-primary/10 to-primary/20">
              <p className="text-lg sm:text-2xl font-bold text-primary">
                Viel Spaß beim Bibelquiz-Spiel!
              </p>
            </Card>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-xs sm:text-sm text-muted-foreground py-4">
            <p>© Copyright by Verlag der Liebenzeller Mission, Bad Liebenzell</p>
            <p className="mt-1">Idee: Karl Albus</p>
            <p>Kartentexte: Karl und Wiltrud Albus und Hans-Albert Schneider</p>
            <p className="mt-3 font-medium">Digitale Version Idee & Umsetzung: Otto Schmidt</p>
          </motion.div>

          <div className="flex justify-center pb-6 sm:pb-8">
            <Button onClick={onClose} size="lg" className="gap-1 sm:gap-2 text-sm sm:text-base">
              Zurück zum Spiel
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

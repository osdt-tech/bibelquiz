# Bibelquiz - ChurchTools Extension

🎲 Ein interaktives Bibelquiz-Spiel als ChurchTools-Extension

**Live Demo:** https://osdt-tech.github.io/bibelquiz/

Ein fröhliches Frage- und Antwortspiel mit Farbwürfeln für 2-6 Spieler (Alter: 8-99 Jahre). Das Bibelquiz bietet 300 Frage- und Antwortkarten aus 6 Wissensgebieten der Bibel in drei Schwierigkeitsstufen.

## Features

✨ **Solo- und Mehrspieler-Modus**
- Solo-Modus zum Üben ohne Punktezählung
- Mehrspieler-Modus mit automatischer Punktezählung
- Zufällige Spielerreihenfolge beim Start

🎨 **6 Kategorien mit Farbwürfel**
- 🔴 Rot: AT Personen & Ereignisse
- 🟠 Orange: AT Geschichte
- 🟡 Gelb: NT Personen & Ereignisse  
- 🟢 Grün: NT Geschichte
- 🔵 Blau: Bibel allgemein
- ⚪ Weiß: Gemischte Fragen

📱 **Responsive Design**
- Optimiert für Desktop und mobile Geräte
- Speziell angepasst für iPhone 11 und ähnliche Smartphones
- Touch-optimierte 3D-Würfel-Animation

🎯 **3 Schwierigkeitsstufen**
- Level 1: Leichte Fragen (1 Punkt)
- Level 2: Mittelschwere Fragen (2 Punkte)
- Level 3: Schwere Fragen (3 Punkte)

📊 **Weitere Funktionen**
- Prüfmodus zum Durchsuchen aller Fragen
- Filterfunktion nach Kategorie und Schwierigkeit
- Spielregeln-Anzeige
- Fortschrittsspeicherung (LocalStorage)
- Moderne 3D-Würfel-Animation mit Three.js

## Technologie-Stack

- **React 18** mit TypeScript
- **Vite** für schnelles Development und Builds
- **Tailwind CSS v4** für modernes Styling
- **Three.js** für 3D-Würfel-Animation
- **Framer Motion** für flüssige Animationen
- **Phosphor Icons** für moderne Icons

## Getting Started

### Prerequisites

-   Node.js (version 18 oder höher)
-   npm oder yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/osdt-tech/bibelquiz.git
    cd Bibelquiz2
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Optional: Using Dev Container

This project includes a dev container configuration. If you use VS Code with the "Dev Containers" extension, you can:

1. Clone the repository
2. Open it in VS Code
3. Click the Remote Indicator in the bottom-left corner of VS Code status bar
4. Select "Reopen in Container"

The container includes the tools mentioned in the prerequisites pre-installed and also runs `npm install` on startup.

## Configuration

Für die Entwicklung kann optional eine `.env` Datei erstellt werden:

1. Kopiere `.env-example` zu `.env`
2. Konfiguriere die notwendigen Variablen für dein ChurchTools-Setup

Die `.env` Datei ist in `.gitignore` eingetragen, um sensible Daten zu schützen.

## Development and Deployment

### Development Server

Starte einen lokalen Development-Server mit Hot-Reload:

```bash
npm run dev
```

Die Anwendung ist dann unter `http://localhost:5173/bibelquiz/` erreichbar.

> **Hinweis für CORS:** Für die lokale Entwicklung mit ChurchTools-API muss CORS
> in der ChurchTools-Instanz konfiguriert werden:
> "Systemeinstellungen" > "Integrationen" > "API" > "Cross-Origin Resource Sharing"
>
> **Safari Cookie-Problem:**
> Falls Login in Chrome funktioniert, aber nicht in Safari:
> - Safari blockiert `Secure; SameSite=None` Cookies auf `http://localhost`
> - Nutze einen Vite Proxy für API-Calls oder
> - Verwende HTTPS für den Dev-Server mit [mkcert](https://github.com/FiloSottile/mkcert)

### Building for Production

Production Build erstellen:

```bash
npm run build
```

Die fertigen Dateien befinden sich im `dist/` Ordner.

### Preview Production Build

Production Build lokal testen:

```bash
npm run preview
```

### Deployment als ChurchTools Extension

Extension für ChurchTools verpacken:

```bash
npm run deploy
```

Dieser Befehl führt folgende Schritte aus:

1. Erstellt einen Production Build
2. Verpackt die Extension mit dem `scripts/package.js` Script
3. Erstellt eine ZIP-Datei im `releases/` Ordner

**Installation in ChurchTools:**

1. ZIP-Datei aus dem `releases/` Ordner herunterladen
2. In ChurchTools: Admin → Extensions → Extension hochladen
3. ZIP-Datei auswählen und installieren

## Projekt-Struktur

```
Bibelquiz2/
├── src/
│   ├── components/         # React-Komponenten
│   │   ├── ColorDice.tsx   # 3D-Würfel mit Three.js
│   │   ├── QuestionReview.tsx  # Prüfmodus
│   │   ├── Rules.tsx       # Spielregeln
│   │   ├── Scoreboard.tsx  # Punkteanzeige
│   │   └── ui/            # UI-Komponenten
│   ├── hooks/             # Custom React Hooks
│   ├── lib/               # Hilfsfunktionen
│   │   ├── questions.ts   # Fragenkatalog
│   │   └── utils.ts       # Utilities
│   ├── types/             # TypeScript Definitionen
│   ├── App.tsx            # Hauptkomponente
│   └── main.tsx           # Entry Point
├── releases/              # Deployment-Packages
├── scripts/
│   └── package.js         # Build-Script
└── dist/                  # Production Build
```

## Credits

**Original Bibelquiz:**
- © Verlag der Liebenzeller Mission, Bad Liebenzell
- Idee: Karl Albus
- Kartentexte: Karl und Wiltrud Albus, Hans-Albert Schneider

**Digitale Version:**
- Idee & Umsetzung: Otto Schmidt
- GitHub: [@osdt-tech](https://github.com/osdt-tech)

## Support & Kontakt

- **Issues:** [GitHub Issues](https://github.com/osdt-tech/bibelquiz/issues)
- **Website:** [osdt-tech.github.io/bibelquiz](https://osdt-tech.github.io/bibelquiz/)

## License

Dieses Projekt steht unter folgenden Lizenzen:
- Originalinhalte (Fragen & Antworten): © Verlag der Liebenzeller Mission
- Softwarecode: MIT License (siehe LICENSE-Datei)

---

**Viel Spaß beim Bibelquiz-Spiel!** 🎉📖

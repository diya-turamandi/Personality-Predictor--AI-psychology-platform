# AI Personality Predictor

Quick starter for the AI Personality Predictor — a beginner-friendly React + Vite app scaffold.

Getting started:

Install dependencies:
```
npm install
```

Run dev server:
```
npm run dev
```

Build:
```
npm run build
```

This scaffold includes a simple dark theme toggle and sample components under `src/`.

## Flask backend and model API

1. Install Python dependencies:

```bash
cd backend
pip install -r requirements.txt
```

2. Train the model and save the files:

```bash
cd ..
python scripts/train_personality_model.py
```

3. Start the Flask server:

```bash
python backend/app.py
```

4. Start the React frontend in a separate terminal:

```bash
npm run dev
```

The React app will send prediction requests to `http://localhost:5000/predict`.

## History (localStorage)

The app saves quiz attempts to the browser's `localStorage` so you can view past results. Each saved entry includes:

- `userName`: the name entered at start
- `personality`: predicted label
- `traits`: array of trait scores (name + value)
- `scores`: object mapping trait name → score
- `date` / `timestamp`: when the attempt was saved
- `mood`: a simple mood analysis derived from key traits

The code that manages this is in `src/utils/historyManager.js`. To clear history within the app, use the Clear history button in the results view, or run `localStorage.removeItem('personalityHistory')` in your browser console.

## Trends & Insights

The app can compare previous attempts and surface simple trend charts and short AI-style insights. Trend logic lives in `src/utils/trendAnalyzer.js` and currently:

- Aggregates trait scores across recorded attempts
- Computes simple linear trends per trait
- Detects personality label changes
- Produces concise human-readable insights

Open the results panel after multiple attempts to view the trend chart and insights.


# Pokémon × Squid Game — The Final Trial (Frontend Starter)

## What is implemented now
- Standalone responsive frontend that runs without installation (open `frontend/index.html` in Chrome, Edge or Firefox).
- Intro screen; six *unique* random rounds drawn from the eleven-game pool.
- Pokémon selection from a curated catalog of **unevolved, non-Legendary, non-Mythical species** (e.g., Pichu rather than Pikachu).
- Local decision-based playable prototype for all eleven challenge types; **simplified prototypes**, not their eventual arcade-specific mini-games.
- Pre-round recommendation and rules-based Monte Carlo strategy comparison; predictions are **illustrative game-engine estimates**, not validated machine-learning predictions.
- Computer opponents with Rookie, Challenger, Master profiles; tournament progress and session summary.
- Browser-local session persistence and a separate demo Game Master dashboard. The same browser can resume a session after refresh.

## Not implemented yet
- Three-laptop synchronization, local server, shared database, authoritative game logic, trained/evaluated predictive models, production-grade mini-games and Chapter 6 prescriptive methods.
- This frontend demonstration is **not** yet sufficient for the instructor's three-device verification.

## Open in VS Code
1. Unzip the folder and select `File > Open Folder`.
2. Open `frontend/index.html` in a browser. A VS Code Live Server extension is optional; the app also works as a static file.
3. Use **Player Terminal** to start a session. Choose a Pokémon, compare strategies, and play six random rounds.
4. Use **Control Center** to inspect local demonstration logs (not synchronized with other devices yet).
5. For a fresh run, select **Reset Demo Data** in the control center.

## Technical roadmap
1. Frontend: replace decision-card challenge prototypes with optimized 2D gameplay; refine accessibility, animation and timer UX.
2. Database: define SQLite schema, audit/event grain, migrations and seed fixtures.
3. Backend: local Node.js API, websocket messaging, server-authoritative decisions, idempotency, snapshots and reconnect recovery.
4. Analytics: descriptive and diagnostic aggregates, proper population/source labels.
5. Models: evaluate predictive baselines and candidate models on held-out datasets; scenario-based prescriptive engine after Chapter 6.

## Academic/data caveats
- Custom Pokémon gameplay attributes in `frontend/js/data.js` are fictional *arcade stats*, not PokéAPI base stats.
- Results generated in this frontend are *demo/game-simulated*, never actual exhibition evidence.
- Prescriptive recommendations in this prototype are rule-based comparisons only. Chapter 6 is pending.
- Official Pokémon intellectual property belongs to its owners; no copyrighted character imagery is bundled.

## Suggested team organization
- Frontend/UI and game-loop, data/database, backend/network, analytics/models, QA/booth operations.

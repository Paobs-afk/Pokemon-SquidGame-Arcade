# Architecture and implementation status

Current: browser-only module imports (`frontend/js/*.js`), localStorage per browser. No internet dependency or build chain.

Target: Player Laptop A / Player Laptop B → Wi-Fi LAN → Laptop 1 (Node host, SQLite WAL, rule engine, models + analytics dashboard). Host has authority and saves random round selections before play; no reliance on classroom public internet.

Game pool: Red Light Green Light, Honeycomb, Tug of War, Marbles, Glass Bridge, Squid Game, Six Legs, Mingle, Hide & Seek, Jump Rope, Sky Squid Game. Six drawn without replacement.

Eligible species: stage-one only, non-legendary, non-mythical. Frontend curated small list for prototyping; production imports and validates species classification using cached PokéAPI data plus evolution-chain traversal. Pikachu is NOT eligible because Pichu evolves into Pikachu.

Academic mapping: Ch1 decisions & value; Ch2 objective, KPIs, constraints; Ch3 validated event grain and sources; Ch4 summaries and diagnostic relationship analyses; Ch5 evaluated predictive estimates; Ch6 method TBD.

Important: The current playable frontend uses one simple probabilistic decision interaction per round, NOT the final six-game mini-game mechanics. Score and probability values are simulated and cannot substitute for instructor verification.

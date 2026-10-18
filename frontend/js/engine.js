import {GAMES,POKEMON,DIFFICULTIES} from './data.js';
export function shuffleSix(){const a=[...GAMES];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a.slice(0,6).map(g=>g.id)}
export function getGame(id){return GAMES.find(g=>g.id===id)}
export function getPokemon(id){return POKEMON.find(p=>p.id===Number(id))}
export function opponentFor(difficulty){return POKEMON[Math.floor(Math.random()*POKEMON.length)].id}
export function choices(game){const keyed={
  'red-light':['Quick dash','Balanced sprint','Careful steps'],
  honeycomb:['Trace rapidly','Trace steadily','Use the safe edge'],
  'tug-of-war':['Full strength','Rhythmic pulls','Conserve energy'],
  marbles:['High wager','Measured wager','Observe first'],
  'glass-bridge':['Take a blind step','Inspect carefully','Spend a clue'],
  'squid-game':['Aggressive push','Balanced route','Defensive route'],
  'six-legs':['Fast tempo','Keep rhythm','Slow and steady'],
  mingle:['Rush nearest room','Read group movement','Wait and react'],
  'hide-seek':['Sprint past seeker','Take cover','Study patrol'],
  'jump-rope':['Quick jump','Steady jump','Wait for pattern'],
  'sky-squid':['Attack platform','Balance position','Observe rival']};return keyed[game.id]}
export function estimateChance(game,pokemon,choice,difficulty='challenger'){
 const j=choices(game).indexOf(choice);
 const primary=pokemon[game.stat];
 const adjustment=[-4,3,0][j]??0;
 const match=(j===0?pokemon.speed:j===1?pokemon.strategy:pokemon.insight);
 const pct=43+primary*4+match*1.1+adjustment-(DIFFICULTIES[difficulty]?.bonus??0);
 return Math.max(8,Math.min(92,pct))/100;
}
export function runScenario(game,pokemon,choice,difficulty,trials=250){let wins=0;const prob=estimateChance(game,pokemon,choice,difficulty);for(let i=0;i<trials;i++)if(Math.random()<prob)wins++;return {wins,trials,winRate:wins/trials,baseline:prob}}
export function recommend(game,difficulty){let best=null;for(const pokemon of POKEMON){for(const choice of choices(game)){const chance=estimateChance(game,pokemon,choice,difficulty);if(!best||chance>best.chance)best={pokemon,choice,chance}}}return best}
export function resolve(game,pokemon,choice,difficulty){const chance=estimateChance(game,pokemon,choice,difficulty);return {survived:Math.random()<chance,chance}}

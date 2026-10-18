export const GAMES = [
  {id:'red-light',name:'Red Light, Green Light',stat:'speed',desc:'Time your sprint and stop safely.'},
  {id:'honeycomb',name:'Honeycomb',stat:'precision',desc:'Protect the fragile shape.'},
  {id:'tug-of-war',name:'Tug of War',stat:'strength',desc:'Find the best pulling rhythm.'},
  {id:'marbles',name:'Marbles',stat:'strategy',desc:'Make smart wagers.'},
  {id:'glass-bridge',name:'Glass Bridge',stat:'insight',desc:'Spend clues to manage uncertainty.'},
  {id:'squid-game',name:'Squid Game',stat:'agility',desc:'Break through the defensive line.'},
  {id:'six-legs',name:'Six Legs',stat:'precision',desc:'Keep the team in sync.'},
  {id:'mingle',name:'Mingle',stat:'agility',desc:'Find a room before the clock expires.'},
  {id:'hide-seek',name:'Hide & Seek',stat:'insight',desc:'Outthink the seeker.'},
  {id:'jump-rope',name:'Jump Rope',stat:'agility',desc:'Stay on beat.'},
  {id:'sky-squid',name:'Sky Squid Game',stat:'strategy',desc:'Protect your position on the platform.'}
];
// All entries are manually vetted unevolved, non-legendary, non-mythical species.
// Stats below are CUSTOM arcade balance scores, not official PokéAPI base stats.
export const POKEMON = [
 {id:172,name:'Pichu',icon:'⚡',type:'Electric',speed:9,precision:5,strength:2,strategy:5,insight:5,agility:8},
 {id:1,name:'Bulbasaur',icon:'🌱',type:'Grass',speed:5,precision:7,strength:5,strategy:8,insight:7,agility:5},
 {id:4,name:'Charmander',icon:'🔥',type:'Fire',speed:7,precision:5,strength:7,strategy:5,insight:4,agility:8},
 {id:7,name:'Squirtle',icon:'💧',type:'Water',speed:4,precision:8,strength:7,strategy:7,insight:7,agility:5},
 {id:66,name:'Machop',icon:'💪',type:'Fighting',speed:5,precision:4,strength:10,strategy:4,insight:3,agility:5},
 {id:92,name:'Gastly',icon:'👻',type:'Ghost',speed:7,precision:6,strength:2,strategy:7,insight:10,agility:8},
 {id:133,name:'Eevee',icon:'⭐',type:'Normal',speed:7,precision:7,strength:5,strategy:7,insight:6,agility:7},
 {id:74,name:'Geodude',icon:'🪨',type:'Rock',speed:2,precision:5,strength:9,strategy:5,insight:6,agility:3}
];
export const DIFFICULTIES={rookie:{bonus:-8,label:'Rookie'},challenger:{bonus:0,label:'Challenger'},master:{bonus:9,label:'Master'}};

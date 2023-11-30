import { Mage, Necromancer, Warrior } from './Archetypes';
import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import { Dwarf, Halfling, Orc } from './Races';
import getRandomInt from './utils';

const player1 = new Character(
  'player1',
  new Necromancer('player1'),
  new Halfling('player1', getRandomInt(1, 10)),
);
const player2 = new Character(
  'player2',
  new Mage('player2'),
  new Orc('player2', getRandomInt(1, 10)),
);
const player3 = new Character(
  'player3',
  new Warrior('player3'),
  new Dwarf('player3', getRandomInt(1, 10)),
);
player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player3, player2);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]): void {
  battles.forEach((battle) => {
    battle.fight();
  });
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
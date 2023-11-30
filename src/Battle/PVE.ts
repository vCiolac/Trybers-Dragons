import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _enemies: SimpleFighter[];

  constructor(player: Fighter, enemies: SimpleFighter[]) {
    super(player);
    this._enemies = enemies;
  }

  fight(): number {
    const battleResult = this.battleWinner();

    if (battleResult !== 0) {
      return battleResult;
    }

    return super.fight();
  }

  private battleWinner(): number {
    let leftMonsters = 0;

    this._enemies.forEach((enemy) => {
      leftMonsters += enemy.lifePoints;
    });

    return this.player.lifePoints > leftMonsters ? 1 : -1;
  }
}

export default PVE;

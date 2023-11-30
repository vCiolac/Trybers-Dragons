import Fighter, { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private readonly _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  public attack(enemy: Fighter): void {
    const strength = this._strength;
    enemy.receiveDamage(strength);
  }

  public receiveDamage(attackPoints: number): number {
    const afterDamage = this._lifePoints - attackPoints;
    if (afterDamage < 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}

export default Monster;
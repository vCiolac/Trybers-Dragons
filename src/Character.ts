import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';

class Character implements Fighter {
  private _race: Race;
  private _name: string;
  private _dexterity: number;
  private _archetype: Archetype;

  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;

  constructor(
    name: string,
    archetype?: Archetype,
    race?: Race,
  ) {
    this._race = race || new Elf(name, Character.random());
    this._name = name;
    this._archetype = archetype || new Mage(name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this.race.maxLifePoints / 2;
    this._strength = Character.random();
    this._defense = Character.random();
    this._dexterity = Character.random();
    this._energy = { type_: this._archetype.energyType, amount: Character.random() };
  }

  get name(): string { return this._name; }

  get race(): Race { return this._race; }

  get archetype(): Archetype { return this._archetype; }

  get maxLifePoints(): number { return this._maxLifePoints; }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  get defense(): number { return this._defense; }

  get dexterity(): number { return this._dexterity; }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  public attack(enemy: SimpleFighter): void {
    const strength = this._strength;
    enemy.receiveDamage(strength);
  }

  public special?(enemy: SimpleFighter): void {
    const strength = this._strength + Character.random();
    enemy.receiveDamage(strength);
  }

  public levelUp(): void {
    this._maxLifePoints += Character.random();
    this._maxLifePoints = this._maxLifePoints >= this._race.maxLifePoints
      ? this._race.maxLifePoints
      : this._maxLifePoints;
    this._strength += Character.random();
    this._dexterity += Character.random();
    this._defense += Character.random();
    if (this._energy) {
      this._energy.amount = 10;
    }
    this._lifePoints = this._maxLifePoints;
  }

  public receiveDamage(attackPoints: number): number {
    const defense = this._defense;
    const damage = attackPoints - defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    this._lifePoints = this._lifePoints < 0 ? -1 : this._lifePoints;
    return this._lifePoints;
  }

  static random() { return Math.floor(Math.random() * 10) + 1; }
}

export default Character;

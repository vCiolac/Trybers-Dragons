import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  readonly _energy: EnergyType = 'stamina';
  private static instancesCount = 0;

  constructor(name: string) {
    super(name);
    Warrior.instancesCount += 1;
  }

  static createdArchetypesInstances(): number {
    return Warrior.instancesCount;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Warrior;
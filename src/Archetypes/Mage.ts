import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  readonly _energy: EnergyType = 'mana';
  private static instancesCount = 0;

  constructor(name: string) {
    super(name);
    Mage.instancesCount += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypesInstances(): number {
    return Mage.instancesCount;
  }
}

export default Mage;
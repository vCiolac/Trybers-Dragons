import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  readonly _energy: EnergyType = 'mana';
  private static instancesCount = 0;

  constructor(name: string) {
    super(name);
    Necromancer.instancesCount += 1;
  }

  static createdArchetypesInstances(): number {
    return Necromancer.instancesCount;
  }
  
  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Necromancer;
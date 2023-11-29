import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  readonly _energy: EnergyType = 'stamina';
  private static instancesCount = 0;

  constructor(name: string) {
    super(name);
    Ranger.instancesCount += 1;
  }

  static createdArchetypesInstances(): number {
    return Ranger.instancesCount;
  }
  
  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Ranger;
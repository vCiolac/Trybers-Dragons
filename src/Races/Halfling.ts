import Race from './Race';

class Halfling extends Race {
  readonly maxLifePoints = 60;
  private static _instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return this._instancesCount;
  }
}

export default Halfling;
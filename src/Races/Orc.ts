import Race from './Race';

class Orc extends Race {
  readonly maxLifePoints = 74;
  private static _instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return this._instancesCount;
  }
}

export default Orc;
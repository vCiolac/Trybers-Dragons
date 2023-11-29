import Race from './Race';

class Halfling extends Race {
  readonly maxLifePoints = 60;
  private static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instancesCount;
  }
}

export default Halfling;
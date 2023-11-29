import Race from './Race';

class Orc extends Race {
  readonly maxLifePoints = 74;
  private static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instancesCount;
  }
}

export default Orc;
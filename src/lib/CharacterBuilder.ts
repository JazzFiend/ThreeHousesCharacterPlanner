import Character from './Character';
import House from './enums/House';
import Sex from './enums/Sex';
import Skill from './enums/Skill';

export default class CharacterBuilder {
  private name: string = '';
  private house: House = House.GarregMach;
  private boons: Skill[] = [];
  private banes: Skill[] = [];
  private buddingTalents: Skill[] = [];
  private caster: boolean = false;
  private sex: Sex = Sex.None;
  private student: boolean = true;

  public static createNewCharacter(): CharacterBuilder {
    return new CharacterBuilder();
  }
  public withName(name: string): CharacterBuilder {
    this.name = name;
    return this;
  }

  public withBoons(boons: Skill[]): CharacterBuilder {
    this.boons = boons;
    return this;
  }

  public withBanes(banes: Skill[]): CharacterBuilder {
    this.banes = banes;
    return this;
  }

  public withBuddingTalents(buddingTalents: Skill[]): CharacterBuilder {
    this.buddingTalents = buddingTalents;
    return this;
  }

  public withCasterStatus(isCaster: boolean): CharacterBuilder {
    this.caster = isCaster;
    return this;
  }

  public withSex(sex: Sex): CharacterBuilder {
    this.sex = sex;
    return this;
  }

  public withStudentStatus(isStudent: boolean): CharacterBuilder {
    this.student = isStudent;
    return this;
  }

  public withHouse(house: House): CharacterBuilder {
    this.house = house;
    return this;
  }

  public build(): Character {
    return new Character(this.name, this.house, this.boons, this.banes, this.buddingTalents,
      this.caster, this.sex, this.student);
  }
}

import House from '../enums/House';
import Sex from '../enums/Sex';
import Skill from '../enums/Skill';

export default class Character {
  private name: string;
  private house: House;
  private boons: Skill[];
  private banes: Skill[];
  private buddingTalents: Skill[];
  private caster: boolean;
  private sex: Sex;
  private student: boolean;

  constructor(
    name: string,
    house: House,
    boons: Skill[] = [],
    banes: Skill[] = [],
    buddingTalents: Skill[] = [],
    isCaster: boolean = false,
    sex: Sex = Sex.Female,
    student: boolean = true,
  ) {
    this.name = name;
    this.house = house;
    this.boons = boons;
    this.banes = banes;
    this.buddingTalents = buddingTalents;
    this.caster = isCaster;
    this.sex = sex;
    this.student = student;
  }

  public getName(): string {
    return this.name;
  }

  public isCaster(): boolean {
    return this.caster;
  }

  public getSex(): Sex {
    return this.sex;
  }

  public isBoon(skill: Skill): boolean {
    return this.boons.indexOf(skill) > -1;
  }

  public isBane(skill: Skill): boolean {
    return this.banes.indexOf(skill) > -1;
  }

  public isBuddingTalent(skill: Skill): boolean {
    return this.buddingTalents.indexOf(skill) > -1;
  }

  public isStudent(): boolean {
    return this.student;
  }

  public getHouse(): House {
    return this.house;
  }
}

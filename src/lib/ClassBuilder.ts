import ClassCategory from './enums/ClassCategory';
import Sex from './enums/Sex';
import Skill from './enums/Skill';
import { FEClass } from './types/FEClass';

export default class ClassBuilder {
  private name: string = '';
  private category: ClassCategory = ClassCategory.Unknown;
  private requiredSkills: Skill[] = [];
  private canUseMagic: boolean = false;
  private sexRequirement: Sex = Sex.None;
  private personalClassNames: string[] = [];
  private studentRequired: boolean = true;

  public static createNewClass(): ClassBuilder {
    return new ClassBuilder();
  }

  public withName(name: string): ClassBuilder {
    this.name = name;
    return this;
  }

  public withCategory(category: ClassCategory): ClassBuilder {
    this.category = category;
    return this;
  }

  public withRequiredSkills(requiredSkills: Skill[]): ClassBuilder {
    this.requiredSkills = requiredSkills;
    return this;
  }

  public withMagicStatus(canUseMagic: boolean): ClassBuilder {
    this.canUseMagic = canUseMagic;
    return this;
  }

  public withSexRequirement(sexRequirement: Sex): ClassBuilder {
    this.sexRequirement = sexRequirement;
    return this;
  }

  public withPersonalClassNames(personalClassNames: string[]): ClassBuilder {
    this.personalClassNames = personalClassNames;
    return this;
  }

  public withStudentStatus(studentRequired: boolean): ClassBuilder {
    this.studentRequired = studentRequired;
    return this;
  }

  public build(): FEClass {
    return {
      name: this.name,
      category: this.category,
      requiredSkills: this.requiredSkills,
      canUseMagic: this.canUseMagic,
      sexRequirement: this.sexRequirement,
      personalClassNames: this.personalClassNames,
      studentRequired: this.studentRequired,
    };
  }
}

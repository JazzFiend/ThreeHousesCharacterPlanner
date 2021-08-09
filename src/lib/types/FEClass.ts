import ClassCategory from '../enums/ClassCategory';
import Sex from '../enums/Sex';
import Skill from '../enums/Skill';

export type FEClass = {
  name: string,
  category: ClassCategory,
  requiredSkills: Skill[],
  canUseMagic: boolean,
  sexRequirement: Sex,
  personalClassNames: string[],
  studentRequired: boolean,
};

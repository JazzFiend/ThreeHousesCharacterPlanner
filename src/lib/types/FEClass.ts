import Sex from '../enums/Sex';
import Skill from '../enums/Skill';

export type FEClass = {
  name: string,
  requiredSkills: Skill[],
  canUseMagic: boolean,
  sexRequirement: Sex,
  personalClassName: string[],
  studentRequired: boolean,
};

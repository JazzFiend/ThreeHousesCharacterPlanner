import Sex from './lib/enums/Sex';
import Skill from './lib/enums/Skill';
import { FEClass } from './lib/types/FEClass';

export default class ThreeHousesClassList {
  public static getFinalClassListRaw(): FEClass[] {
    const classList:FEClass[] = [];
    classList.push({
      name: 'Falcon Knight',
      requiredSkills: [Skill.Sword, Skill.Lance, Skill.Flying],
      canUseMagic: false,
      sexRequirement: Sex.Female,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Wyvern Lord',
      requiredSkills: [Skill.Lance, Skill.Axe, Skill.Flying],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Mortal Savant',
      requiredSkills: [Skill.Sword, Skill.Reason],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Great Knight',
      requiredSkills: [Skill.Axe, Skill.HeavyArmor, Skill.Riding],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Bow Knight',
      requiredSkills: [Skill.Lance, Skill.Bow, Skill.Riding],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Dark Knight',
      requiredSkills: [Skill.Lance, Skill.Reason, Skill.Riding],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Holy Knight',
      requiredSkills: [Skill.Lance, Skill.Faith, Skill.Riding],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'War Master',
      requiredSkills: [Skill.Axe, Skill.Brawling],
      canUseMagic: false,
      sexRequirement: Sex.Male,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Gremory',
      requiredSkills: [Skill.Reason, Skill.Faith],
      canUseMagic: true,
      sexRequirement: Sex.Female,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Trickster',
      requiredSkills: [Skill.Sword, Skill.Faith],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'War Monk',
      requiredSkills: [Skill.Brawling, Skill.Faith],
      canUseMagic: true,
      sexRequirement: Sex.Male,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'War Cleric',
      requiredSkills: [Skill.Brawling, Skill.Faith],
      canUseMagic: true,
      sexRequirement: Sex.Female,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Dark Flier',
      requiredSkills: [Skill.Reason, Skill.Flying],
      canUseMagic: true,
      sexRequirement: Sex.Female,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Valkyrie',
      requiredSkills: [Skill.Reason, Skill.Riding],
      canUseMagic: true,
      sexRequirement: Sex.Female,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Swordmaster',
      requiredSkills: [Skill.Sword],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Assassin',
      requiredSkills: [Skill.Sword, Skill.Bow],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Sniper',
      requiredSkills: [Skill.Bow],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Grappler',
      requiredSkills: [Skill.Brawling],
      canUseMagic: false,
      sexRequirement: Sex.Male,
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Enlightened One',
      requiredSkills: [],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassName: ['Byleth - Male', 'Byleth - Female'],
      studentRequired: false,
    });
    classList.push({
      name: 'Death Knight',
      requiredSkills: [],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassName: ['Jeritza'],
      studentRequired: false,
    });
    classList.push({
      name: 'Emperor',
      requiredSkills: [],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassName: ['Edelgard'],
      studentRequired: false,
    });
    classList.push({
      name: 'Great Lord',
      requiredSkills: [],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassName: ['Dimitri'],
      studentRequired: false,
    });
    classList.push({
      name: 'Barbarossa',
      requiredSkills: [],
      canUseMagic: false,
      sexRequirement: Sex.None,
      personalClassName: ['Claude'],
      studentRequired: false,
    });
    classList.push({
      name: 'Dancer',
      requiredSkills: [Skill.Sword, Skill.Riding],
      canUseMagic: true,
      sexRequirement: Sex.None,
      personalClassName: [],
      studentRequired: true,
    });
    return classList;
  }
}

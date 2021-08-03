import { FEClass } from './lib/types/FEClass';

export default class ThreeHousesClassList {
  public static getFinalClassListRaw(): FEClass[] {
    const classList:FEClass[] = [];
    classList.push({
      name: 'Falcon Knight',
      requiredSkills: ['Sword', 'Lance', 'Flying'],
      canUseMagic: false,
      sexRequirement: 'female',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Wyvern Lord',
      requiredSkills: ['Lance', 'Axe', 'Flying'],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Mortal Savant',
      requiredSkills: ['Sword', 'Reason'],
      canUseMagic: true,
      sexRequirement: 'none',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Great Knight',
      requiredSkills: ['Axe', 'Heavy Armor', 'Riding'],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Bow Knight',
      requiredSkills: ['Lance', 'Bow', 'Riding'],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Dark Knight',
      requiredSkills: ['Lance', 'Reason', 'Riding'],
      canUseMagic: true,
      sexRequirement: 'none',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Holy Knight',
      requiredSkills: ['Lance', 'Faith', 'Riding'],
      canUseMagic: true,
      sexRequirement: 'none',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'War Master',
      requiredSkills: ['Axe', 'Brawling'],
      canUseMagic: false,
      sexRequirement: 'male',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Gremory',
      requiredSkills: ['Reason', 'Faith'],
      canUseMagic: true,
      sexRequirement: 'female',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Trickster',
      requiredSkills: ['Sword', 'Faith'],
      canUseMagic: true,
      sexRequirement: 'none',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'War Monk',
      requiredSkills: ['Brawling', 'Faith'],
      canUseMagic: true,
      sexRequirement: 'male',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'War Cleric',
      requiredSkills: ['Brawling', 'Faith'],
      canUseMagic: true,
      sexRequirement: 'female',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Dark Flier',
      requiredSkills: ['Reason', 'Flying'],
      canUseMagic: true,
      sexRequirement: 'female',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Valkyrie',
      requiredSkills: ['Reason', 'Riding'],
      canUseMagic: true,
      sexRequirement: 'female',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Swordmaster',
      requiredSkills: ['Sword'],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Assassin',
      requiredSkills: ['Sword', 'Bow'],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Sniper',
      requiredSkills: ['Bow'],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Grappler',
      requiredSkills: ['Brawling'],
      canUseMagic: false,
      sexRequirement: 'male',
      personalClassName: [],
      studentRequired: false,
    });
    classList.push({
      name: 'Enlightened One',
      requiredSkills: [],
      canUseMagic: true,
      sexRequirement: 'none',
      personalClassName: ['Byleth - Male', 'Byleth - Female'],
      studentRequired: false,
    });
    classList.push({
      name: 'Death Knight',
      requiredSkills: [],
      canUseMagic: true,
      sexRequirement: 'none',
      personalClassName: ['Jeritza'],
      studentRequired: false,
    });
    classList.push({
      name: 'Emperor',
      requiredSkills: [],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: ['Edelgard'],
      studentRequired: false,
    });
    classList.push({
      name: 'Great Lord',
      requiredSkills: [],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: ['Dimitri'],
      studentRequired: false,
    });
    classList.push({
      name: 'Barbarossa',
      requiredSkills: [],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: ['Claude'],
      studentRequired: false,
    });
    classList.push({
      name: 'Dancer',
      requiredSkills: ['Sword', 'Riding'],
      canUseMagic: true,
      sexRequirement: 'none',
      personalClassName: [],
      studentRequired: true,
    });
    return classList;
  }
}

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
    });
    classList.push({
      name: 'Wyvern Lord',
      requiredSkills: ['Lance', 'Axe', 'Flying'],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: [],
    });
    classList.push({
      name: 'Mortal Savant',
      requiredSkills: ['Sword', 'Reason'],
      canUseMagic: true,
      sexRequirement: 'none',
      personalClassName: [],
    });
    classList.push({
      name: 'Great Knight',
      requiredSkills: ['Axe', 'Heavy Armor', 'Riding'],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: [],
    });
    classList.push({
      name: 'Bow Knight',
      requiredSkills: ['Lance', 'Bow', 'Riding'],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: [],
    });
    classList.push({
      name: 'Dark Knight',
      requiredSkills: ['Lance', 'Reason', 'Riding'],
      canUseMagic: true,
      sexRequirement: 'none',
      personalClassName: [],
    });
    classList.push({
      name: 'Holy Knight',
      requiredSkills: ['Lance', 'Faith', 'Riding'],
      canUseMagic: true,
      sexRequirement: 'none',
      personalClassName: [],
    });
    classList.push({
      name: 'War Master',
      requiredSkills: ['Axe', 'Brawling'],
      canUseMagic: false,
      sexRequirement: 'male',
      personalClassName: [],
    });
    classList.push({
      name: 'Gremory',
      requiredSkills: ['Reason', 'Faith'],
      canUseMagic: true,
      sexRequirement: 'female',
      personalClassName: [],
    });
    classList.push({
      name: 'Trickster',
      requiredSkills: ['Sword', 'Faith'],
      canUseMagic: true,
      sexRequirement: 'none',
      personalClassName: [],
    });
    classList.push({
      name: 'War Monk',
      requiredSkills: ['Brawling', 'Faith'],
      canUseMagic: true,
      sexRequirement: 'male',
      personalClassName: [],
    });
    classList.push({
      name: 'War Cleric',
      requiredSkills: ['Brawling', 'Faith'],
      canUseMagic: true,
      sexRequirement: 'female',
      personalClassName: [],
    });
    classList.push({
      name: 'Dark Flier',
      requiredSkills: ['Reason', 'Flying'],
      canUseMagic: true,
      sexRequirement: 'female',
      personalClassName: [],
    });
    classList.push({
      name: 'Valkyrie',
      requiredSkills: ['Reason', 'Riding'],
      canUseMagic: true,
      sexRequirement: 'female',
      personalClassName: [],
    });
    classList.push({
      name: 'Swordmaster',
      requiredSkills: ['Sword'],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: [],
    });
    classList.push({
      name: 'Assassin',
      requiredSkills: ['Sword', 'Bow'],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: [],
    });
    classList.push({
      name: 'Sniper',
      requiredSkills: ['Bow'],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: [],
    });
    classList.push({
      name: 'Grappler',
      requiredSkills: ['Brawling'],
      canUseMagic: false,
      sexRequirement: 'male',
      personalClassName: [],
    });
    classList.push({
      name: 'Enlightened One',
      requiredSkills: [],
      canUseMagic: true,
      sexRequirement: 'none',
      personalClassName: ['Byleth - Male', 'Byleth - Female'],
    });
    classList.push({
      name: 'Death Knight',
      requiredSkills: [],
      canUseMagic: true,
      sexRequirement: 'none',
      personalClassName: ['Jeritza'],
    });
    classList.push({
      name: 'Emperor',
      requiredSkills: [],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: ['Edelgard'],
    });
    classList.push({
      name: 'Great Lord',
      requiredSkills: [],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: ['Dimitri'],
    });
    classList.push({
      name: 'Barbarossa',
      requiredSkills: [],
      canUseMagic: false,
      sexRequirement: 'none',
      personalClassName: ['Claude'],
    });
    return classList;
  }
}

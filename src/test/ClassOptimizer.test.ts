import CharacterClassRatings from '../lib/CharacterClassRatings';
import ClassOptimizer from '../lib/ClassOptimizer';
import Character from '../lib/Character';
import ClassSkillGrouping from '../lib/ClassSkillGrouping';
import { FEClass } from '../lib/types/FEClass';

function generateClassList(): FEClass[] {
  const classList:FEClass[] = [];
  classList.push({
    name: 'a',
    requiredSkills: [],
    canUseMagic: true,
    sexRequirement: 'none',
    personalClassName: [],
  });
  classList.push({
    name: 'b',
    requiredSkills: ['skill1'],
    canUseMagic: false,
    sexRequirement: 'none',
    personalClassName: [],
  });
  classList.push({
    name: 'c',
    requiredSkills: ['skill2', 'skill3'],
    canUseMagic: true,
    sexRequirement: 'female',
    personalClassName: [],
  });
  classList.push({
    name: 'd',
    requiredSkills: ['skill2'],
    canUseMagic: true,
    sexRequirement: 'male',
    personalClassName: [],
  });
  classList.push({
    name: 'e',
    requiredSkills: [],
    canUseMagic: false,
    sexRequirement: 'none',
    personalClassName: ['Personal'],
  });
  return classList;
}

function generateClassSkillPairingList(classAndSkills: string): ClassSkillGrouping[] {
  if (classAndSkills === '') return [];

  const classSkillTokenized: string[] = classAndSkills.split(',');
  const expected: ClassSkillGrouping[] = [];
  for (let i = 0; i < classSkillTokenized.length; i += 3) {
    expected.push(new ClassSkillGrouping(
      classSkillTokenized[i],
      parseInt(classSkillTokenized[i + 1], 10),
      parseInt(classSkillTokenized[i + 2], 10),
    ));
  }
  return expected;
}

function expectOptimizedClasses(
  optimizedClasses: CharacterClassRatings,
  expectedAdvantages: ClassSkillGrouping[],
  expectedNeutral: ClassSkillGrouping[],
  expectedDisadvantages: ClassSkillGrouping[],
): void {
  expect(optimizedClasses.getAdvantages()).toEqual(expectedAdvantages);
  expect(optimizedClasses.getNeutral()).toEqual(expectedNeutral);
  expect(optimizedClasses.getDisadvantages()).toEqual(expectedDisadvantages);
}

test('Generic Character', () => {
  const classList:FEClass[] = generateClassList();
  const character = new Character('name', [], [], [], false, 'female');
  const opt = new ClassOptimizer(classList);
  const optimizedClasses:CharacterClassRatings = opt.getOptimizedClasses(character);

  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList(''), generateClassSkillPairingList('a,0,0,b,0,1,c,0,2'), generateClassSkillPairingList(''));
});

test('One Boon', () => {
  const classList:FEClass[] = generateClassList();
  const character = new Character('name', ['skill1'], [], [], false, 'female');
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList('b,1,1'), generateClassSkillPairingList('a,0,0,c,0,2'), generateClassSkillPairingList(''));
});

test('One Bane', () => {
  const classList:FEClass[] = generateClassList();
  const character = new Character('name', [], ['skill1'], [], false, 'female');
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList(''), generateClassSkillPairingList('a,0,0,c,0,2'), generateClassSkillPairingList('b,-1,1'));
});

test('One Budding Talent', () => {
  const classList:FEClass[] = generateClassList();
  const character = new Character('name', [], [], ['skill1'], false, 'female');
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList('b,1,1'), generateClassSkillPairingList('a,0,0,c,0,2'), generateClassSkillPairingList(''));
});

test('One Budding Talent that is also a bane', () => {
  const classList:FEClass[] = generateClassList();
  const character = new Character('name', [], ['skill1'], ['skill1'], false, 'female');
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList('b,1,1'), generateClassSkillPairingList('a,0,0,c,0,2'), generateClassSkillPairingList(''));
});

test('Two Advantagous classes, sorted', () => {
  const classList:FEClass[] = generateClassList();
  const character = new Character('name', ['skill1', 'skill2', 'skill3'], [], [], false, 'female');
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList('c,2,2,b,1,1'), generateClassSkillPairingList('a,0,0'), generateClassSkillPairingList(''));
});

test('Two Disadvantagous classes, sorted', () => {
  const classList:FEClass[] = generateClassList();
  const character = new Character('name', [], ['skill1', 'skill2', 'skill3'], [], false, 'female');
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList(''), generateClassSkillPairingList('a,0,0'), generateClassSkillPairingList('b,-1,1,c,-2,2'));
});

test('For a magical character, physical classes are omitted.', () => {
  const classList:FEClass[] = generateClassList();
  const character = new Character('name', ['skill2'], ['skill1'], ['skill3'], true, 'female');
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList('c,2,2'), generateClassSkillPairingList('a,0,0'), generateClassSkillPairingList(''));
});

test('Male character cannot be considered for female classes', () => {
  const classList:FEClass[] = generateClassList();
  const character = new Character('name', ['skill1', 'skill2'], [], ['skill3'], false, 'male');
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList('b,1,1,d,1,1'), generateClassSkillPairingList('a,0,0'), generateClassSkillPairingList(''));
});

test('Personal Class should work when the name matches', () => {
  const classList:FEClass[] = generateClassList();
  const character = new Character('Personal', ['skill1', 'skill2'], [], ['skill3'], false, 'male');
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList('e,10,0,b,1,1,d,1,1'), generateClassSkillPairingList('a,0,0'), generateClassSkillPairingList(''));
});

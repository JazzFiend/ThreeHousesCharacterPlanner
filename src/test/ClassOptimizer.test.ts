import CharacterClassRatings from '../lib/CharacterClassRatings';
import ClassOptimizer from '../lib/ClassOptimizer';
import Character from '../lib/Character';
import ClassSkillGrouping from '../lib/ClassSkillGrouping';
import { FEClass } from '../lib/types/FEClass';
import CharacterBuilder from '../lib/CharacterBuilder';
import Sex from '../lib/enums/Sex';
import Skill from '../lib/enums/Skill';

function generateClassList(): FEClass[] {
  const classList:FEClass[] = [];
  classList.push({
    name: 'a',
    requiredSkills: [],
    canUseMagic: true,
    sexRequirement: Sex.None,
    personalClassName: [],
    studentRequired: false,
  });
  classList.push({
    name: 'b',
    requiredSkills: [Skill.Sword],
    canUseMagic: false,
    sexRequirement: Sex.None,
    personalClassName: [],
    studentRequired: false,
  });
  classList.push({
    name: 'c',
    requiredSkills: [Skill.Reason, Skill.Flying],
    canUseMagic: true,
    sexRequirement: Sex.Female,
    personalClassName: [],
    studentRequired: false,
  });
  classList.push({
    name: 'd',
    requiredSkills: [Skill.Reason],
    canUseMagic: true,
    sexRequirement: Sex.Male,
    personalClassName: [],
    studentRequired: false,
  });
  classList.push({
    name: 'e',
    requiredSkills: [],
    canUseMagic: false,
    sexRequirement: Sex.None,
    personalClassName: ['Personal'],
    studentRequired: false,
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

test('Generic Character with no skills', () => {
  const classList:FEClass[] = generateClassList();
  const character = (CharacterBuilder.createNewCharacter().withSex(Sex.Female).build());
  const opt = new ClassOptimizer(classList);
  const optimizedClasses:CharacterClassRatings = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList(''), generateClassSkillPairingList('a,0,0,b,0,1,c,0,2'), generateClassSkillPairingList(''));
});

test('One Boon', () => {
  const classList:FEClass[] = generateClassList();
  const character = (CharacterBuilder.createNewCharacter()
    .withBoons([Skill.Sword])
    .withSex(Sex.Female)
    .build());
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList('b,1,1'), generateClassSkillPairingList('a,0,0,c,0,2'), generateClassSkillPairingList(''));
});

test('One Bane', () => {
  const classList:FEClass[] = generateClassList();
  const character = (CharacterBuilder.createNewCharacter()
    .withBanes([Skill.Sword])
    .withSex(Sex.Female)
    .build());
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList(''), generateClassSkillPairingList('a,0,0,c,0,2'), generateClassSkillPairingList('b,-1,1'));
});

test('One Budding Talent', () => {
  const classList:FEClass[] = generateClassList();
  const character = (CharacterBuilder.createNewCharacter()
    .withBuddingTalents([Skill.Sword])
    .withSex(Sex.Female)
    .build());
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList('b,1,1'), generateClassSkillPairingList('a,0,0,c,0,2'), generateClassSkillPairingList(''));
});

test('One Budding Talent that is also a bane', () => {
  const classList:FEClass[] = generateClassList();
  const character = (CharacterBuilder.createNewCharacter()
    .withBanes([Skill.Sword])
    .withBuddingTalents([Skill.Sword])
    .withSex(Sex.Female)
    .build());
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList('b,1,1'), generateClassSkillPairingList('a,0,0,c,0,2'), generateClassSkillPairingList(''));
});

test('Two Advantageous classes, sorted', () => {
  const classList:FEClass[] = generateClassList();
  const character = (CharacterBuilder.createNewCharacter()
    .withBoons([Skill.Sword, Skill.Reason, Skill.Flying])
    .withSex(Sex.Female)
    .build());
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList('c,2,2,b,1,1'), generateClassSkillPairingList('a,0,0'), generateClassSkillPairingList(''));
});

test('Two Disadvantageous classes, sorted', () => {
  const classList:FEClass[] = generateClassList();
  const character = (CharacterBuilder.createNewCharacter()
    .withBanes([Skill.Sword, Skill.Reason, Skill.Flying])
    .withSex(Sex.Female)
    .build());
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList(''), generateClassSkillPairingList('a,0,0'), generateClassSkillPairingList('b,-1,1,c,-2,2'));
});

test('For a magical character, physical classes are omitted.', () => {
  const classList:FEClass[] = generateClassList();
  const character = (CharacterBuilder.createNewCharacter()
    .withBoons([Skill.Reason])
    .withBanes([Skill.Sword])
    .withBuddingTalents([Skill.Flying])
    .withCasterStatus(true)
    .withSex(Sex.Female)
    .build());
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList('c,2,2'), generateClassSkillPairingList('a,0,0'), generateClassSkillPairingList(''));
});

test('Male character cannot be considered for female classes', () => {
  const classList:FEClass[] = generateClassList();
  const character = (CharacterBuilder.createNewCharacter()
    .withBoons([Skill.Sword, Skill.Reason])
    .withBanes([Skill.Flying])
    .withSex(Sex.Male)
    .build());
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList('b,1,1,d,1,1'), generateClassSkillPairingList('a,0,0'), generateClassSkillPairingList(''));
});

test('Personal Class should work when the name matches', () => {
  const classList:FEClass[] = generateClassList();
  const character = (CharacterBuilder.createNewCharacter()
    .withName('Personal')
    .withBoons([Skill.Sword, Skill.Reason])
    .withBuddingTalents([Skill.Flying])
    .withSex(Sex.Male)
    .build());
  const opt = new ClassOptimizer(classList);
  const optimizedClasses = opt.getOptimizedClasses(character);
  expectOptimizedClasses(optimizedClasses, generateClassSkillPairingList('e,10,0,b,1,1,d,1,1'), generateClassSkillPairingList('a,0,0'), generateClassSkillPairingList(''));
});

test('Student specific class should only select students', () => {
  const classList:FEClass[] = [];
  classList.push({
    name: 'studentSpecific',
    requiredSkills: [Skill.Sword],
    canUseMagic: true,
    sexRequirement: Sex.None,
    personalClassName: [],
    studentRequired: true,
  });
  const student:Character = (CharacterBuilder.createNewCharacter()
    .withName('Student')
    .withBoons([Skill.Sword])
    .withStudentStatus(true)
    .build());
  const notStudent:Character = (CharacterBuilder.createNewCharacter()
    .withName('Not a Student')
    .withBoons([Skill.Sword])
    .withStudentStatus(false)
    .build());
  const opt = new ClassOptimizer(classList);
  expectOptimizedClasses(opt.getOptimizedClasses(student), generateClassSkillPairingList('studentSpecific,1,1'), generateClassSkillPairingList(''), generateClassSkillPairingList(''));
  expectOptimizedClasses(opt.getOptimizedClasses(notStudent), generateClassSkillPairingList(''), generateClassSkillPairingList(''), generateClassSkillPairingList(''));
});

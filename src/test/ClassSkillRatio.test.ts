import ClassSkillRatio from '../lib/ClassSkillRatio';
import ClassCategory from '../lib/enums/ClassCategory';

test('Sort by Class Ranking correctly', () => {
  const a = new ClassSkillRatio('a', ClassCategory.Intermediate, 0, 2);
  const b = new ClassSkillRatio('b', ClassCategory.Master, 1, 2);
  expect(ClassSkillRatio.sortFunction(a, b)).toEqual(3);
});

test('Class ranking equal; secondary sort by Skill Count', () => {
  const a = new ClassSkillRatio('a', ClassCategory.Intermediate, 0, 2);
  const b = new ClassSkillRatio('b', ClassCategory.Intermediate, 1, 2);
  const sortDifference:number = ClassSkillRatio.sortFunction(a, b);
  expect(sortDifference).toEqual(0.5);
});

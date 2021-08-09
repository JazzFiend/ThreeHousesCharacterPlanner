import ClassBuilder from '../lib/ClassBuilder';
import ClassFilter from '../lib/ClassFilter';
import ClassCategory from '../lib/enums/ClassCategory';
import { FEClass } from '../lib/types/FEClass';

function generateSimpleClassPool(): FEClass[] {
  const classPool: FEClass[] = [];
  classPool.push(ClassBuilder.createNewClass().withName('Master').withCategory(ClassCategory.Master).build());
  classPool.push(ClassBuilder.createNewClass().withName('Unique').withCategory(ClassCategory.Unique).build());
  return classPool;
}

test('No parameters should return nothing', () => {
  expect(ClassFilter.getClassesByCategory(generateSimpleClassPool(), [])).toEqual([]);
});

test('Extract only one class category', () => {
  const classPool: FEClass[] = generateSimpleClassPool();
  const expected = ClassBuilder.createNewClass().withName('Advanced').withCategory(ClassCategory.Advanced).build();
  classPool.push(expected);
  expect(
    ClassFilter.getClassesByCategory(classPool, [ClassCategory.Advanced]),
  ).toEqual([expected]);
});

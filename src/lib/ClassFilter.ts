import { FEClass } from './types/FEClass';
import ClassCategory from './enums/ClassCategory';

export default class ClassFilter {
  public static getClassesByCategory(
    classPool: FEClass[],
    classCategories: ClassCategory[],
  ): FEClass[] {
    return classPool.filter(
      (classFromPool: FEClass) => classCategories.includes(classFromPool.category),
    );
  }
}

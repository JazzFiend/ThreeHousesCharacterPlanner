import Character from './lib/Character/Character';
import ClassRater from './lib/ClassRater';
import { FEClass } from './lib/types/FEClass';
import ThreeHousesCharacterList from './lib/data/ThreeHousesCharacterList';
import ThreeHousesClassList from './lib/data/ThreeHousesClassList';

const threeHousesClassList:FEClass[] = ThreeHousesClassList.getFinalClassListRaw();
const characterList: Character[] = ThreeHousesCharacterList.getThreeHousesCharacterList();

// CharacterFilter will reduce the number of characters
// const blueLions = CharacterFilter.getCharactersByHouse(characterList, House.BlueLions);

// Class filter will reduce the number of classes
// const highLevelClasses = ClassFilter.getClassesByCategory(
//   threeHousesClassList,
//   [ClassCategory.Master, ClassCategory.Advanced, ClassCategory.Special, ClassCategory.Unique],
// );

// As this stands, all characters and classes will be considered.
characterList.forEach((character) => {
  console.log(character.getName());
  console.log(ClassRater.calculateClassRatings(threeHousesClassList, character).getAdvantages());
});

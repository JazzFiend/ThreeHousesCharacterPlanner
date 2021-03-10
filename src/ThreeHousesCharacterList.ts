import Character from './lib/Character';

export default class ThreeHousesCharacterList {
  public static getThreeHousesCharacterList(): Character[] {
    const characterList: Character[] = [];
    // Golden Deer
    characterList.push(new Character('Claude', ['Sword', 'Bow', 'Authority', 'Riding', 'Flying'], ['Lance', 'Faith'], ['Axe'], false, 'male'));
    characterList.push(new Character('Lorenz', ['Lance', 'Reason', 'Riding'], ['Brawling'], [], true, 'male'));
    characterList.push(new Character('Raphael', ['Axe', 'Brawling', 'Heavy Armor'], ['Bow', 'Reason', 'Riding'], [], false, 'male'));
    characterList.push(new Character('Ignatz', ['Sword', 'Bow', 'Authority'], ['Flying'], ['Reason'], false, 'male'));
    characterList.push(new Character('Lysithea', ['Reason', 'Faith', 'Authority'], ['Sword', 'Lance', 'Axe', 'Heavy Armor'], ['Sword'], true, 'female'));
    characterList.push(new Character('Marianne', ['Sword', 'Faith', 'Riding', 'Flying'], ['Brawling', 'Heavy Armor'], ['Lance'], true, 'female'));
    characterList.push(new Character('Hilda', ['Lance', 'Axe'], ['Faith', 'Authority'], ['Heavy Armor'], false, 'female'));
    characterList.push(new Character('Leonie', ['Lance', 'Bow', 'Riding'], [], [], false, 'female'));

    // Black Eagles
    characterList.push(new Character('Edelgard', ['Sword', 'Axe', 'Authority', 'Heavy Armor'], ['Bow', 'Faith'], ['Reason'], false, 'female'));
    characterList.push(new Character('Hubert', ['Bow', 'Reason', 'Authority'], ['Axe', 'Faith', 'Flying'], ['Lance'], true, 'male'));
    characterList.push(new Character('Ferdinand', ['Sword', 'Lance', 'Axe', 'Riding'], [], ['Heavy Armor'], false, 'male'));
    characterList.push(new Character('Linhardt', ['Reason', 'Faith'], ['Axe', 'Brawling'], [], true, 'male'));
    characterList.push(new Character('Caspar', ['Axe', 'Brawling'], ['Bow', 'Reason', 'Authority'], [], false, 'male'));
    characterList.push(new Character('Bernadetta', ['Lance', 'Bow'], ['Sword', 'Axe', 'Brawling', 'Heavy Armor'], ['Riding'], false, 'female'));
    characterList.push(new Character('Dorothea', ['Sword', 'Reason'], ['Faith', 'Riding', 'Flying'], ['Faith'], true, 'female'));
    characterList.push(new Character('Petra', ['Sword', 'Axe', 'Bow', 'Flying'], ['Reason', 'Faith'], [], false, 'female'));

    // Blue Lions
    characterList.push(new Character('Dimitri', ['Sword', 'Lance', 'Authority'], ['Axe', 'Reason'], ['Riding'], false, 'male'));
    characterList.push(new Character('Dedue', ['Lance', 'Axe', 'Brawling', 'Heavy Armor'], ['Faith', 'Riding', 'Flying'], [], false, 'male'));
    characterList.push(new Character('Felix', ['Sword', 'Bow', 'Brawling'], ['Reason', 'Authority'], ['Reason'], false, 'male'));
    characterList.push(new Character('Ashe', ['Axe', 'Bow'], ['Reason'], ['Lance'], false, 'male'));
    characterList.push(new Character('Sylvain', ['Lance', 'Axe', 'Riding'], ['Bow'], ['Reason'], false, 'male'));
    characterList.push(new Character('Mercedes', ['Reason', 'Faith'], ['Sword', 'Lance', 'Axe', 'Heavy Armor'], ['Bow'], true, 'female'));
    characterList.push(new Character('Annette', ['Axe', 'Reason', 'Authority'], ['Bow', 'Heavy Armor'], [], true, 'female'));
    characterList.push(new Character('Ingrid', ['Sword', 'Lance', 'Riding', 'Flying'], [], [], false, 'female'));

    // Ashen Wolves
    characterList.push(new Character('Yuri', ['Sword', 'Reason', 'Faith', 'Authority'], ['Lance', 'Axe', 'Riding', 'Flying'], ['Bow'], false, 'male'));
    characterList.push(new Character('Balthus', ['Sword', 'Axe', 'Brawling', 'Faith', 'Heavy Armor'], ['Lance', 'Bow', 'Flying'], ['Reason'], false, 'male'));
    characterList.push(new Character('Constance', ['Sword', 'Reason', 'Authority', 'Flying'], ['Axe', 'Heavy Armor'], ['Brawling'], true, 'female'));
    characterList.push(new Character('Hapi', ['Reason', 'Riding', 'Flying'], ['Brawling', 'Authority', 'Heavy Armor'], ['Axe'], true, 'female'));

    // Officers Academy
    characterList.push(new Character('Byleth - Male', ['Sword', 'Brawling', 'Authority'], [], ['Faith'], false, 'male'));
    characterList.push(new Character('Byleth - Female', ['Sword', 'Brawling', 'Authority'], [], ['Faith'], false, 'female'));
    characterList.push(new Character('Manuela', ['Sword', 'Faith', 'Flying'], ['Reason', 'Heavy Armor'], [], true, 'female'));
    characterList.push(new Character('Hanneman', ['Bow', 'Reason', 'Riding'], ['Heavy Armor', 'Flying'], [], true, 'male'));
    characterList.push(new Character('Catherine', ['Sword', 'Brawling'], ['Reason'], [], false, 'female'));
    characterList.push(new Character('Alois', ['Axe', 'Brawling', 'Heavy Armor'], ['Reason', 'Flying'], [], false, 'male'));
    characterList.push(new Character('Seteth', ['Sword', 'Lance', 'Axe', 'Authority', 'Flying'], ['Riding'], [], false, 'male'));
    characterList.push(new Character('Flayn', ['Lance', 'Faith'], ['Heavy Armor', 'Riding'], ['Reason'], true, 'female'));
    characterList.push(new Character('Gilbert', ['Lance', 'Axe', 'Heavy Armor', 'Riding'], [], [], false, 'male'));
    characterList.push(new Character('Jeritza', ['Sword', 'Lance', 'Brawling', 'Riding'], ['Faith', 'Authority'], ['Flying'], false, 'male'));
    characterList.push(new Character('Shamir', ['Lance', 'Bow'], ['Faith'], [], false, 'female'));
    characterList.push(new Character('Cyril', ['Lance', 'Axe', 'Bow', 'Riding', 'Flying'], ['Reason', 'Faith'], [], false, 'male'));
    characterList.push(new Character('Anna', ['Sword', 'Axe', 'Bow', 'Faith'], ['Reason', 'Authority'], ['Riding'], false, 'female'));

    return characterList;
  }
}

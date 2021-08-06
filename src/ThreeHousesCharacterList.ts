import Character from './lib/Character';
import CharacterBuilder from './lib/CharacterBuilder';
import House from './lib/enums/House';
import Sex from './lib/enums/Sex';
import Skill from './lib/enums/Skill';

export default class ThreeHousesCharacterList {
  public static getThreeHousesCharacterList(): Character[] {
    const characterList: Character[] = [];
    // Golden Deer
    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Claude')
      .withHouse(House.GoldenDeer)
      .withBoons([Skill.Sword, Skill.Bow, Skill.Authority, Skill.Riding, Skill.Flying])
      .withBanes([Skill.Lance, Skill.Faith])
      .withBuddingTalents([Skill.Axe])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Lorenz')
      .withHouse(House.GoldenDeer)
      .withBoons([Skill.Lance, Skill.Reason, Skill.Riding])
      .withBanes([Skill.Brawling])
      .withBuddingTalents([])
      .withCasterStatus(true)
      .withSex(Sex.Male)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Raphael')
      .withHouse(House.GoldenDeer)
      .withBoons([Skill.Axe, Skill.Brawling, Skill.HeavyArmor])
      .withBanes([Skill.Bow, Skill.Reason, Skill.Riding])
      .withBuddingTalents([])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Ignatz')
      .withHouse(House.GoldenDeer)
      .withBoons([Skill.Sword, Skill.Bow, Skill.Authority])
      .withBanes([Skill.Flying])
      .withBuddingTalents([Skill.Reason])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Lysithea')
      .withHouse(House.GoldenDeer)
      .withBoons([Skill.Reason, Skill.Faith, Skill.Authority])
      .withBanes([Skill.Sword, Skill.Lance, Skill.Axe, Skill.HeavyArmor])
      .withBuddingTalents([Skill.Sword])
      .withCasterStatus(true)
      .withSex(Sex.Female)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Marianne')
      .withHouse(House.GoldenDeer)
      .withBoons([Skill.Sword, Skill.Faith, Skill.Riding, Skill.Flying])
      .withBanes([Skill.Brawling, Skill.HeavyArmor])
      .withBuddingTalents([Skill.Lance])
      .withCasterStatus(true)
      .withSex(Sex.Female)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Hilda')
      .withHouse(House.GoldenDeer)
      .withBoons([Skill.Lance, Skill.Axe])
      .withBanes([Skill.Faith, Skill.Authority])
      .withBuddingTalents([Skill.HeavyArmor])
      .withCasterStatus(false)
      .withSex(Sex.Female)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Leonie')
      .withHouse(House.GoldenDeer)
      .withBoons([Skill.Lance, Skill.Bow, Skill.Riding])
      .withBanes([])
      .withBuddingTalents([])
      .withCasterStatus(false)
      .withSex(Sex.Female)
      .withStudentStatus(true)
      .build());

    // Black Eagles
    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Edelgard')
      .withHouse(House.BlackEagles)
      .withBoons([Skill.Sword, Skill.Axe, Skill.Authority, Skill.HeavyArmor])
      .withBanes([Skill.Bow, Skill.Faith])
      .withBuddingTalents([Skill.Reason])
      .withCasterStatus(false)
      .withSex(Sex.Female)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Hubert')
      .withHouse(House.BlackEagles)
      .withBoons([Skill.Bow, Skill.Reason, Skill.Authority])
      .withBanes([Skill.Axe, Skill.Faith, Skill.Flying])
      .withBuddingTalents([Skill.Lance])
      .withCasterStatus(true)
      .withSex(Sex.Male)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Ferdinand')
      .withHouse(House.BlackEagles)
      .withBoons([Skill.Sword, Skill.Lance, Skill.Axe, Skill.Riding])
      .withBanes([])
      .withBuddingTalents([Skill.HeavyArmor])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Linhardt')
      .withHouse(House.BlackEagles)
      .withBoons([Skill.Reason, Skill.Faith])
      .withBanes([Skill.Axe, Skill.Brawling])
      .withBuddingTalents([])
      .withCasterStatus(true)
      .withSex(Sex.Male)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Caspar')
      .withHouse(House.BlackEagles)
      .withBoons([Skill.Axe, Skill.Brawling])
      .withBanes([Skill.Bow, Skill.Reason, Skill.Authority])
      .withBuddingTalents([])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Bernadetta')
      .withHouse(House.BlackEagles)
      .withBoons([Skill.Lance, Skill.Bow])
      .withBanes([Skill.Sword, Skill.Axe, Skill.Brawling, Skill.HeavyArmor])
      .withBuddingTalents([Skill.Riding])
      .withCasterStatus(false)
      .withSex(Sex.Female)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Dorothea')
      .withHouse(House.BlackEagles)
      .withBoons([Skill.Sword, Skill.Reason])
      .withBanes([Skill.Faith, Skill.Riding, Skill.Flying])
      .withBuddingTalents([Skill.Faith])
      .withCasterStatus(true)
      .withSex(Sex.Female)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Petra')
      .withHouse(House.BlackEagles)
      .withBoons([Skill.Sword, Skill.Axe, Skill.Bow, Skill.Flying])
      .withBanes([Skill.Reason, Skill.Faith])
      .withBuddingTalents([])
      .withCasterStatus(false)
      .withSex(Sex.Female)
      .withStudentStatus(true)
      .build());

    // Blue Lions

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Dimitri')
      .withHouse(House.BlueLions)
      .withBoons([Skill.Sword, Skill.Lance, Skill.Authority])
      .withBanes([Skill.Axe, Skill.Reason])
      .withBuddingTalents([Skill.Riding])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Dedue')
      .withHouse(House.BlueLions)
      .withBoons([Skill.Lance, Skill.Axe, Skill.Brawling, Skill.HeavyArmor])
      .withBanes([Skill.Faith, Skill.Riding, Skill.Flying])
      .withBuddingTalents([])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Felix')
      .withHouse(House.BlueLions)
      .withBoons([Skill.Sword, Skill.Bow, Skill.Brawling])
      .withBanes([Skill.Reason, Skill.Authority])
      .withBuddingTalents([Skill.Reason])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Ashe')
      .withHouse(House.BlueLions)
      .withBoons([Skill.Axe, Skill.Bow])
      .withBanes([Skill.Reason])
      .withBuddingTalents([Skill.Lance])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Sylvain')
      .withHouse(House.BlueLions)
      .withBoons([Skill.Lance, Skill.Axe, Skill.Riding])
      .withBanes([Skill.Bow])
      .withBuddingTalents([Skill.Reason])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Mercedes')
      .withHouse(House.BlueLions)
      .withBoons([Skill.Reason, Skill.Faith])
      .withBanes([Skill.Sword, Skill.Lance, Skill.Axe, Skill.HeavyArmor])
      .withBuddingTalents([Skill.Bow])
      .withCasterStatus(true)
      .withSex(Sex.Female)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Annette')
      .withHouse(House.BlueLions)
      .withBoons([Skill.Axe, Skill.Reason, Skill.Authority])
      .withBanes([Skill.Bow, Skill.HeavyArmor])
      .withBuddingTalents([])
      .withCasterStatus(true)
      .withSex(Sex.Female)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Ingrid')
      .withHouse(House.BlueLions)
      .withBoons([Skill.Sword, Skill.Lance, Skill.Riding, Skill.Flying])
      .withBanes([])
      .withBuddingTalents([])
      .withCasterStatus(false)
      .withSex(Sex.Female)
      .withStudentStatus(true)
      .build());

    // Ashen Wolves
    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Yuri')
      .withHouse(House.AshenWolves)
      .withBoons([Skill.Sword, Skill.Reason, Skill.Faith, Skill.Authority])
      .withBanes([Skill.Lance, Skill.Axe, Skill.Riding, Skill.Flying])
      .withBuddingTalents([Skill.Bow])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Balthus')
      .withHouse(House.AshenWolves)
      .withBoons([Skill.Sword, Skill.Axe, Skill.Brawling, Skill.Faith, Skill.HeavyArmor])
      .withBanes([Skill.Lance, Skill.Bow, Skill.Flying])
      .withBuddingTalents([Skill.Reason])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Constance')
      .withHouse(House.AshenWolves)
      .withBoons([Skill.Sword, Skill.Reason, Skill.Authority, Skill.Flying])
      .withBanes([Skill.Axe, Skill.HeavyArmor])
      .withBuddingTalents([Skill.Brawling])
      .withCasterStatus(true)
      .withSex(Sex.Female)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Hapi')
      .withHouse(House.AshenWolves)
      .withBoons([Skill.Reason, Skill.Riding, Skill.Flying])
      .withBanes([Skill.Brawling, Skill.Authority, Skill.HeavyArmor])
      .withBuddingTalents([Skill.Axe])
      .withCasterStatus(true)
      .withSex(Sex.Female)
      .withStudentStatus(true)
      .build());

    // Officers Academy
    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Byleth - Male')
      .withHouse(House.GarregMach)
      .withBoons([Skill.Sword, Skill.Brawling, Skill.Authority])
      .withBanes([])
      .withBuddingTalents([Skill.Faith])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(false)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Byleth - Female')
      .withHouse(House.GarregMach)
      .withBoons([Skill.Sword, Skill.Brawling, Skill.Authority])
      .withBanes([])
      .withBuddingTalents([Skill.Faith])
      .withCasterStatus(false)
      .withSex(Sex.Female)
      .withStudentStatus(false)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Manuela')
      .withHouse(House.GarregMach)
      .withBoons([Skill.Sword, Skill.Faith, Skill.Flying])
      .withBanes([Skill.Reason, Skill.HeavyArmor])
      .withBuddingTalents([])
      .withCasterStatus(true)
      .withSex(Sex.Female)
      .withStudentStatus(false)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Hanneman')
      .withHouse(House.GarregMach)
      .withBoons([Skill.Bow, Skill.Reason, Skill.Riding])
      .withBanes([Skill.HeavyArmor, Skill.Flying])
      .withBuddingTalents([])
      .withCasterStatus(true)
      .withSex(Sex.Male)
      .withStudentStatus(false)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Catherine')
      .withHouse(House.GarregMach)
      .withBoons([Skill.Sword, Skill.Brawling])
      .withBanes([Skill.Reason])
      .withBuddingTalents([])
      .withCasterStatus(false)
      .withSex(Sex.Female)
      .withStudentStatus(false)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Alois')
      .withHouse(House.GarregMach)
      .withBoons([Skill.Axe, Skill.Brawling, Skill.HeavyArmor])
      .withBanes([Skill.Reason, Skill.Flying])
      .withBuddingTalents([])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(false)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Seteth')
      .withHouse(House.GarregMach)
      .withBoons([Skill.Sword, Skill.Lance, Skill.Axe, Skill.Authority, Skill.Flying])
      .withBanes([Skill.Riding])
      .withBuddingTalents([])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(false)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Flayn')
      .withHouse(House.GarregMach)
      .withBoons([Skill.Lance, Skill.Faith])
      .withBanes([Skill.HeavyArmor, Skill.Riding])
      .withBuddingTalents([Skill.Reason])
      .withCasterStatus(true)
      .withSex(Sex.Female)
      .withStudentStatus(true)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Gilbert')
      .withHouse(House.GarregMach)
      .withBoons([Skill.Lance, Skill.Axe, Skill.HeavyArmor, Skill.Riding])
      .withBanes([])
      .withBuddingTalents([])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(false)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Jeritza')
      .withHouse(House.GarregMach)
      .withBoons([Skill.Sword, Skill.Lance, Skill.Brawling, Skill.Riding])
      .withBanes([Skill.Faith, Skill.Authority])
      .withBuddingTalents([Skill.Flying])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(false)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Shamir')
      .withHouse(House.GarregMach)
      .withBoons([Skill.Lance, Skill.Bow])
      .withBanes([Skill.Faith])
      .withBuddingTalents([])
      .withCasterStatus(false)
      .withSex(Sex.Female)
      .withStudentStatus(false)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Cyril')
      .withHouse(House.GarregMach)
      .withBoons([Skill.Lance, Skill.Axe, Skill.Bow, Skill.Riding, Skill.Flying])
      .withBanes([Skill.Reason, Skill.Faith])
      .withBuddingTalents([])
      .withCasterStatus(false)
      .withSex(Sex.Male)
      .withStudentStatus(false)
      .build());

    characterList.push(CharacterBuilder.createNewCharacter()
      .withName('Anna')
      .withHouse(House.GarregMach)
      .withBoons([Skill.Sword, Skill.Axe, Skill.Bow, Skill.Faith])
      .withBanes([Skill.Reason, Skill.Authority])
      .withBuddingTalents([Skill.Riding])
      .withCasterStatus(false)
      .withSex(Sex.Female)
      .withStudentStatus(false)
      .build());

    return characterList;
  }
}

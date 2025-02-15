/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// GameObject class
class GameObject{
    constructor(attributes){
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }
    // method
    destroy(){
        return `${this.name} was removed from the game`; 
    }
}

  // CharacterStats class  
  class CharacterStats extends GameObject{
      constructor(character){
        super(character);
        this.healthPoints = character.healthPoints;
        this.name = character.name; 
      }
      // method
      takeDamage(){
        return `${this.name} took damage`; 
      }
  }

  // humanoid class
  class Humanoid extends CharacterStats{
      constructor(humano){
        super(humano); 
        this.team = humano.team; 
        this.weapons = humano.weapons; 
        this.language = humano.language;
      }
      // method
      greet(){
        return `${this.name} offers a greeting in ${this.language}`; 
      }
  }
  
  //Test you work by uncommenting these 3 objects and the list of console logs below:
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
    console.log("*****************************");
    console.log(mage.createdAt); // Today's date
    console.log("*****************************");
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log("*****************************");
    console.log(swordsman.healthPoints); // 15
    console.log("*****************************");
    console.log(mage.name); // Bruce
    console.log("*****************************");
    console.log(swordsman.team); // The Round Table
    console.log("*****************************");
    console.log(mage.weapons); // Staff of Shamalama
    console.log("*****************************");
    console.log(archer.language); // Elvish
    console.log("*****************************");
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log("*****************************");
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log("*****************************");
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  

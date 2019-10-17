// CODE here for your Lambda Classes

// Person class
class Person{
    constructor(atrributes){
        this.name = atrributes.name;
        this.age = atrributes.age;
        this.location = atrributes.location;
    }
    speak(){
        console.log(`Hello my name ${this.name}, I am from ${this.location}`);
    }
}

// Instructor class
class Instructor extends Person{
    constructor(atrributes){
        super(atrributes);
        this.specialty = atrributes.specialty;
        this.favLanguage = atrributes.favLanguage;
        this.catchPhrase = atrributes.catchPhrase;
    }
    demo(subject){
        return (`Today we are learning about ${subject} where subject is the param passed in.`)
    }
    grade(student, subject){
        return (`${student.name} receives a perfect score on ${subject}`)
    }
}

// Student class
class Student extends Person{
    constructor(atrributes){
        super(atrributes);
        this.previousBackground = atrributes.previousBackground;
        this.className = atrributes.className;
        this.favSubjects = atrributes.favSubjects;
    }
    listsSubjects(){
        const myArr =[];
        this.favSubjects.forEach(function(item){
            myArr.push(item);
        })
        console.log(myArr.join(", "));
    }
    PRAssignment(subject){
        return (`${this.name} has submitted a PR for ${subject}`);

    }
    sprintChallenge(subject){
        return (`${this.name} has begun sprint challenge on ${subject}`)
    }
}

// Project Manager class
class ProjectManager extends Instructor{
    constructor(atributes){
        super(atributes);
        this.gradClassName = atributes.gradClassName;
        this.favInstructor = atributes.favInstructor;
    }
    // methods
    standUp(channel){
       return ( `${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject){
        return (`${this.name} debugs ${student}'s code on ${subject}`)
    }
}

// Objects 

const individual = new Person({
    name: "Noni",
    age: "26",
    location: "Alabama"
})

const secondIndividual = new Person({
    name: "Libra",
    age: "20",
    location: "Andromeda"
})

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const freddie = new Instructor({
    name: 'Freddie',
    location: 'Sol',
    age: 37,
    favLanguage: 'C#',
    specialty: 'Back-end',
    catchPhrase: `If I learned how to code, so can you!`
  });

const ale = new Student({
    name: 'Ale',
    location: 'Moon',
    age: 24,
    previousBackground: 'dancer',
    className: ' CS132',
    favSubjects: ['moon walk', 'space view', 'rocket science']
});

const bob = new Student({
    name: 'Bob',
    location: 'Stars',
    age: 24,
    previousBackground: 'dancer',
    className: ' C159',
    favSubjects: ['art', 'literature', 'music']
});    

const suzy = new ProjectManager({
    name: 'Suzy',
    location: 'Earth',
    age: 26,
    gradClassName: 'CS1',
    favInstructor: 'Mr. Feet on the Ground',
});

const lucy = new ProjectManager({
    name: 'Lust',
    location: 'Hawaii',
    age: 28,
    gradClassName: 'CS150',
    favInstructor: 'Ms. Walker',
});

// test
console.log("********Testing Objects for Person class*********");
console.log(individual.name);
console.log(secondIndividual.age);
console.log(individual.location);
console.log("********Testing Objects for Instructor class*********");
console.log(fred.name);
console.log(fred.age);
console.log(freddie.location);
console.log(fred.favLanguage);
console.log(fred.age);
console.log(freddie.catchPhrase);
console.log("********Testing Objects for Student class*********");
console.log(ale.name);
console.log(ale.age);
console.log(ale.location);
console.log(ale.age);
console.log(ale.previousBackground);
console.log(bob.age);
console.log(bob.className);
console.log(ale.favSubjects);
console.log("*****Testing Objects for Project manager class*****");
console.log(suzy.name);
console.log(suzy.age);
console.log(suzy.location);
console.log(suzy.standUp('Git Up!'));
console.log(lucy.debugsCode('Ale', 'C++'));



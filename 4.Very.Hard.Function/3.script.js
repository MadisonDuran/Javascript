// 4. VERY HARD
// This exercise demonstrates object prototypes and inheritance in Javascript.
// Created a Person constructor, extend it with a Programmer constructor, and add methods to each prototype.

// Person Constructor 
// The Person constructor initializes name, job, and age for each person.
function Person(name, job, age) {
    this.name = name ;
    this.job = job;
    this.age = age;
}

// Adds an exercise method to Person prototype that logs a message.
Person.prototype.exercise = function() {
    console.log("Running is fun - said no one ever");
};

// Adds a fetchJob method to Person prototype that logs the person's name or job.
Person.prototype.fetchJob = function() {
    console.log(`${this.name} is a ${this.job}`);
};

// Programmer constructor
// The programmer constructor inherits properties from Person and adds new ones: languages and busy.
function Programmer(name, job, age, languages) {
    Person.call(this, name, job, age); // Calls the Person constructor to set inherited properties
    this.languages = languages; // Array to store programming languages known by the programmer
    this.busy = true; // Busy is true by default
}

// Set up prototype inheritance so Programmer inherits methods from Person.
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;
// Programmer Methods
// Sets busy to false when a programmer completes a task.
Programmer.prototype.completeTask = function() {
    this.busy = false;
};

// Sets busy to true when a programmer accepts a new task.
Programmer.prototype.acceptNewTask = function() {
    this.busy = true;
};

// Logs a message depending on whether the programmer is busy or available.
Programmer.prototype.offerNewTask = function () {
    if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
      console.log(`${this.name} would love to take on a new responsibility.`);
    }
};

// Adds a new language to the programmer's list of languages.
Programmer.prototype.learnLanguage = function(language) {
    this.languages.push(language);
};

// Lists all languages the programmer knows
Programmer.prototype.listLanguages = function() {
    console.log(this.languages.join(", "));
};

// Create instances of Programmer with different properties
const c1 = new Programmer("Liana", "Janitor", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "DevOps", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

// Test learning new languages
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

// Test listing languages
console.log(c1.listLanguages());
console.log(c2.listLanguages());
console.log(c3.listLanguages());

// Test task handling
c1.offerNewTask();
c1.completeTask();
c1.offerNewTask();

// Test inherited methods from Person
const person1 = new Person("Harold", "Backend Engineer", 20);
person1.exercise();
person1.fetchJob();

// Log objects to see their structure
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);





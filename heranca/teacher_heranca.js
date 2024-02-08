function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.greeting = function () {
    console.log("Hi! I'm " + this.name.first + ".");
};

//O método call() é uma função capaz de alterar o valor this . Por padrão, 
//o primeiro parâmetro que recebe é o valor do this e o demais parâmetros são da função que invoca o método Call .
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);

    this.subject = subject;
}
Teacher.prototype.greeting = function () {
    var prefix;

    if (
        this.gender === "male" ||
        this.gender === "Male" ||
        this.gender === "m" ||
        this.gender === "M"
        ) {
        prefix = "Mr.";
    } else if (
        this.gender === "female" ||
        this.gender === "Female" ||
        this.gender === "f" ||
        this.gender === "F"
    ) {
        prefix = "Mrs.";
    } else {
        prefix = "Mx.";
    }

    console.log(
        "Hello. My name is " +
        prefix +
        " " +
        this.name.last +
        ", and I teach " +
        this.subject +
        ".",
    );
};
var teacher1 = new Teacher(
    "Dave",
    "Griffiths",
    31,
    "male",
    ["football", "cookery"],
    "mathematics",
);

console.log(teacher1.name.first);
console.log(teacher1.interests[0]);
console.log(teacher1.subject);
console.log(teacher1.greeting());
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const person1 = new Person("Susy", "Haga", 36, "female", ["workout","punkrock concert", "lay on the sofa"])

console.log(person1)
console.log(person1.greeting())
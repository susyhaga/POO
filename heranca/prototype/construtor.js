//Retorna uma referência para a função Object que cria a instância do protótipo.
// Note que o valor desse protótipo é uma referência para a própria função, 
//não uma string contendo o nome da função. O valor é apenas read-only para valores primitivos como 1, true e "test".

// var o = {};
// o.constructor === Object; // true

// var a = [];
// a.constructor === Array; // true

// var n = new Number(3);
// n.constructor === Number; // true

function Tree(name) {
    this.name = name;
}

var theTree = new Tree("Redwood");
console.log("theTree.constructor is " + theTree.constructor); //theTree.constructor is function Tree(name) {this.name = name;}


//cat

function Animal() {
    this.sound = "";
}

Animal.prototype.makeSound = function() {
    console.log(this.sound);
};

function Cat() {
    this.sound = "Meow";
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

const cat = new Cat();
  console.log(cat.makeSound()); // "Meow"
console.log(Cat.prototype.constructor = Cat) //[Function: Cat]
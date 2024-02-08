
class User {
  constructor() {
      this.nome = 'Leonardo';
      this.profissao = 'Desenvolvedor';
    }
}

User.prototype.idade = ''

const user1 = new User(22);
user1.idade = 33;

const user2 = new User(33);


console.log(user1.idade)

//////////////////////////////////////////////////////////////////////////////////////////////


function Calculadora() {
  this.valor = 0;
}

Calculadora.prototype.adicionar = function(valor) {
  this.valor += valor;
};

Calculadora.prototype.subtrair = function(valor) {
  this.valor -= valor;
};

Calculadora.prototype.obterResultado = function() {
  return this.valor;
};

const minhaCalculadora = new Calculadora();
minhaCalculadora.adicionar(5);
minhaCalculadora.subtrair(2);
console.log(minhaCalculadora.obterResultado()); // 3

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Neste exemplo, definimos uma função construtora, assim:

function Person(first, last, age, gender, interests) {
  // property and method definitions
    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;

}

//Nós criamos então uma instância de objeto como esta:

var person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);

//console.log(Object.valueOf())
console.log(person1.valueOf())

//console.log(Object.prototype);

console.log(person1.constructor)


var person2 = Object.create(person1);

//construtor

var person3 = new person1.constructor("Karen", "Stephenson", 26, "female", [
    "playing drums",
    "mountain climbing",
]);

console.log(person3.first);
console.log(person3.age);
//console.log(person3.bio())
console.log(person3.constructor.name);


//Modificando Protótiposs

// Person.prototype.farewell = function () {
//    // alert(this.first + " has left the building. Bye for now!");
//   };

  //console.log(person1.farewell());

  
  var person4 = new Person("Tammi", "Smith", 32, "neutral", [
    "music",
    "skiing",
    "kickboxing",
  ]);
  
  Person.prototype.farewell = function () {
   //alert(this.first + " has left the building. Bye for now!");
  };

  console.log(person4.farewell())
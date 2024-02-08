//De onde vem hasOwnProperty? vem do protótipo Object.
let names = {
    fname: "Dillion",
    lname: "Megida"
}
console.log(names.fname);// Dillion
console.log(names.hasOwnProperty("uname"));// false



console.log(names);
//A variável de objeto names tem apenas duas propriedades - fname e lname. Ela não tem métodos.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Object.create() + SPEAK: function()

//usa o argumento passado para ele para se tornar o protótipo.

function DogObject(name, age) {
    let dog = Object.create(constructorObject);
    dog.name = name;
    dog.age = age;
    return dog;
}
let constructorObject = {
    speak: function(){
        return "I am a dog"
    }
}
let bingo = DogObject("Bingo", 54);
console.log(bingo);
////////////////////////////////////////////////////////////////////

//ENCADEAMENTO DE PROTÓTIPOS.

// A propriedade __proto__ de john é direcionada para o protótipo de CatObject. Lembre-se, no entanto, 
// de que o protótipo de CatObject é um objeto (para chave-valor).
//  Por isso, ele também tem uma propriedade __proto__ que faz referência ao protótipo global de Object.
function CatObject(nome, idade) {
    this.nome = nome;
    this.idade = idade;
} 
CatObject.prototype.speak = function() {
    return "I am a cat";
}
let john = new CatObject ("John", 45);

console.log(john);


//Observe que a abordagem com a palavra-chave new  faz o mesmo que Object.create(),
// mas facilita o processo, pois faz algumas coisas automaticamente por você.


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//classes
class Animals {
    constructor(name1, specie1) {
        this.name = name1;
        this.specie = specie1;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
}
let bingo1 = new Animals("OSWALDO", "duck");
console.log(bingo1);


//VERSAO COM PROTOTYPE
function Animals2(name2, specie2) {
    this.name1 = name2;
    this.specie1 = specie2;
}
Animals2.prototype.sing = function(){
    return `${this.name1} can sing`;
}
Animals2.prototype.dance = function() {
    return `${this.specie1} can dance`;
}
let bibi = new Animals2("Bingo", "duck");

console.log(bibi)
console.log(bibi.sing());
console.log(bibi.dance());
////////////////////////////////////////////////////////////////////

//SUBCLASSES  extends/ constructor/super/

class Animals3 {
    constructor(name4, age4) {
        this.name11 = name4;
        this.age11 = age4;
    }
    sings() {
        return `${this.name11} can sing`;
    }
    dances() {
        return `${this.name11} can dance`;
    }
} 
class Cats extends Animals3 {
    constructor(name7, age7, whiskerColor) {
        super(name7, age7);
        this.whiskerColor = whiskerColor;
    }
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
let clara = new Cats("Clara", 33, "indigo");

console.log(clara.sings());
console.log(clara.whiskers());

//SUBCLASSES COM OBJECT.CREATE
//Usando a abordagem com o método Object.create, o que vemos acima se traduz assim:
function Animals22(name22, age22) {
    let newAnimal = Object.create(animalConstructor);
    newAnimal.name = name22;
    newAnimal.age = age22;
    return newAnimal;

}
let animalConstructor = {
    sing22: function() {
        return `${this.name} can sing happy`;
    },
    dance22: function() {
        return `${this.name} can dance`;
    }
}
function Cat2(name, age, whiskerColor) {
    let newCat = Animals22(name, age);
    Object.setPrototypeOf(newCat, catConstructor);
    newCat.whiskerColor = whiskerColor;
    return newCat;
}
let catConstructor = {
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    },
    miu(){
        return `${this.name} can MIAUUUUU`
    }
}
Object.setPrototypeOf(catConstructor, animalConstructor);
const clara22 = Cat2("Clara", 33, "purple");
console.log(clara22.sing22());
console.log(clara22.miu());
console.log(clara22.whiskers());
// Resultado esperado
// "Clara can sing"
// "I have purple whiskers"

//Object.setPrototypeOf é um método que recebe dois argumentos - 
//o objeto (primeiro argumento) e o protótipo desejado (segundo argumento).

//A partir do que vemos acima, a função Animals retorna um objeto com animalConstructor como protótipo. 
//A função Cats retorna um objeto com catConstructor como seu protótipo. catConstructor, por outro lado, 
//recebe o protótipo de animalConstructor.

//Portanto, animais comuns têm acesso apenas a animalConstructor, mas gatos têm acesso a catConstructor e a animalConstructor.
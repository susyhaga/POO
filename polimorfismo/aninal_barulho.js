function Animal(){}
function Cachorro(){}

Animal.prototype.fazerBarulho = function(){
	console.log("Barulho base");
};


// A maioria dos animais que programamos tem 4 pernas. Isso pode ser substituído se necessário
Animal.prototype.pernas = 4;


console.log(Animal.prototype)

//Cachorro estende Animal e herda suas propriedades e metodos

Cachorro.prototype = new Animal(); 

//polimorfismo... alterando o barulho de animal em cachorro
Cachorro.prototype.fazerBarulho = function(){
    console.log("Au au");  
};
console.log(Cachorro.prototype.pernas)

var animal = new Animal();
var cachorro = new Cachorro();

animal.fazerBarulho();   // Barulho base
animal.pernas; 
cachorro.fazerBarulho();   // Au au - isso foi substituído
console.log(cachorro.pernas);           // 4! Isso foi herdado
//precisa colocar dentro de um console (cachorro.pernas) pq ele nao ta impresso em nenhum trecho do codigo
//////////////////////////////////////////////////
// Estudando Herança em javascript através de funções construtoras...


//////////////////////////////////////////////////////////////	
// Função construtora, uma simulação de uma Class Abstrata...

function Animal(nome) {
    
}

//////////////////////////////////////////////////////////////	
// Metodos da Class...

 Animal.prototype.nascer = function() {
 	return 'Nasceu um Animal.';
 }
 Animal.prototype.respirar = function() {
 	return 'Começou a respirar por se mesmo.';
 }
 Animal.prototype.morrer = function() {
 	return 'Acabou de morrer.';
 }

//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////	
// Função construtora de um Gato...

 function Gato( nome ) {
 	this.nome = nome;
 }

//////////////////////////////////////////////////////////////	
// A class Gato está estendendo a class Animal...

 Gato.prototype = new Animal();
 Gato.prototype.constructor = Gato;

//////////////////////////////////////////////////////////////	
// Acrescentando um método miar a class Gato...

 Gato.prototype.miar = function() {
    return this.nome + ' está miando.';
 }

///////////////////////////////////////////////////////////////////////////////////	
// Instanciando um objeto do tipo Gato e usando alguns métodos da class Animal...

var gatinho = new Gato('Belinha');
    console.log( gatinho.nascer() );
    console.log( gatinho.respirar() );
    console.log( gatinho.miar() );


///////////////////////////////////////////////////////////////////////////////////	
// O gatinho morre depois de 3 Mille  segundos...

var CeifarVida = setInterval( function() {
    console.log(gatinho.morrer());
}, 3000 );

clearInterval(CeifarVida);
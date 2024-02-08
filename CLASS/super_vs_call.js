

//super vs call()

//super() 

//é uma palavra-chave específica de classes em JavaScript, utilizada dentro de um construtor 
//de uma classe filha para chamar o construtor da classe pai. Isso é comumente usado em cenários de herança para 
//garantir que a inicialização da classe pai seja executada antes da inicialização da classe filha.


class Animal1 {
    constructor(name) {
        this.name = name;
    }
}

class Dog1 extends Animal1 {
    constructor(name, breed) {
      // Chama o construtor da classe pai (Animal)
        super(name);
        this.breed = breed;
    }
}
//Aqui, super(name) chama o construtor da classe pai Animal, passando name como argumento.

// call():

// call() é um método disponível para todas as funções em JavaScript e é 
// usado para chamar uma função com um determinado valor para this e argumentos fornecidos individualmente.


function Animal2(name) {
    this.name = name;
}

function Dog2(name, breed) {
    // Chama o construtor da classe pai (Animal) usando call
    Animal2.call(this, name);
    this.breed = breed;
}

// Aqui, Animal.call(this, name) está chamando o construtor da função Animal,
//  mas aplicando-o ao contexto do objeto atual (this), efetivamente inicializando as propriedades do objeto atual 
//  com os valores fornecidos.

// No contexto de classes, a palavra-chave super() é mais apropriada, pois é específica para herança de classes 
// e torna o código mais legível. A utilização de call() é mais comum em situações onde você está 
// lidando com funções regulares e deseja especificar explicitamente o contexto (this).

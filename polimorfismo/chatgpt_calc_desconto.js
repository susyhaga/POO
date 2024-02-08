// Classe base
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("O animal faz um som.");
        }
}

  // Subclasse que estende a classe Animal
class Dog extends Animal {
    makeSound() {
        console.log("O cachorro late.");
    }
}

  // Subclasse que estende a classe Animal
class Cat extends Animal {
    makeSound() {
        console.log("O gato mia.");
    }
}

  // Função que recebe um objeto Animal e chama o método makeSound
function makeAnimalSound(animal) {
    animal.makeSound();
}

//animal eh o parametro da funcao...onde vai ser substituido por uma variavel que contem o novo objeto

  // Criando instâncias das classes Dog e Cat
const dog = new Dog("Rex");
const cat = new Cat("Whiskers");

  // Chamando a função makeAnimalSound com diferentes objetos
  makeAnimalSound(dog); // Saída: "O cachorro late."
  makeAnimalSound(cat); // Saída: "O gato mia."

  //É possível aplicar polimorfismo na programaçao funcional?


//   🤖 ChatGPT: - Na programação funcional, o conceito de polimorfismo é um pouco diferente do exemplo anterior,
//    pois não há classes ou herança como na programação orientada a objetos.

//No entanto, é possível obter um comportamento polimórfico usando funções de alta ordem (higher-order functions) 
//e passando funções como parâmetros.

// // Função polimórfica que recebe uma função como argumento
// function makeAnimalSound(animalFn) {
//     return animalFn();
// }

//   // Funções específicas para diferentes sons de animais
// function dogSound() {
//     console.log("O cachorro late.");
// }

// function catSound() {
//     console.log("O gato mia.");
// }

//   // Utilizando a função polimórfica com diferentes funções
//   makeAnimalSound(dogSound); // Saída: "O cachorro late."
//   makeAnimalSound(catSound); // Saída: "O gato mia."

//PRODUCT DESCONTO POLIMORFISMO COM CLASSE

// Classe base
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }   

    calculateDiscount() {
      return 0; // sem desconto por padrão
    }
}

  // Subclasse que estende a classe Product
class SaleProduct extends Product {
    constructor(name, price, discountPercentage) {
        super(name, price);
        this.discountPercentage = discountPercentage;
    }

    calculateDiscount() {
      return (this.price * this.discountPercentage) / 100;
    }
}

  // Subclasse que estende a classe Product
class ClearanceProduct extends Product {
    constructor(name, price, clearancePrice) {
        super(name, price);
        this.clearancePrice = clearancePrice;
    }

    calculateDiscount() {
        return this.price - this.clearancePrice;
    }
}

  // Função que recebe um objeto Product e calcula o desconto
function calculateProductDiscount(product) {
    const discount = product.calculateDiscount();
    console.log(`O desconto do produto ${product.name} é de ${discount} reais.`);
}

  // Criando instâncias das classes SaleProduct e ClearanceProduct
  const saleProduct = new SaleProduct("Camiseta", 50, 20); // 20% de desconto
  const clearanceProduct = new ClearanceProduct("Calça", 100, 70); // preço de liquidação de 70 reais

  // Chamando a função calculateProductDiscount com diferentes objetos
  calculateProductDiscount(saleProduct); // Saída: "O desconto do produto Camiseta é de 10 reais."
  calculateProductDiscount(clearanceProduct); // Saída: "O desconto do produto Calça é de 30 reais."





///////////////////////////////////////////////////////////////////
  //POLIMORFISMO COM FUNCAO

  ///////////////////////////////////////////////
  // Função base
function calculateDiscount(product) {
    return 0; // sem desconto por padrão
}

  // Função para calcular o desconto de um produto em promoção
function calculateSaleDiscount(product) {
    return (product.price * product.discountPercentage) / 100;
}

  // Função para calcular o desconto de um produto em liquidação
function calculateClearanceDiscount(product) {
    return product.price - product.clearancePrice;
}

  // Objeto representando um produto em promoção
const saleProduct = {
    name: "Camiseta",
    price: 50,
    discountPercentage: 20, // 20% de desconto
};

  // Objeto representando um produto em liquidação
const clearanceProduct = {
    name: "Calça",
    price: 100,
    clearancePrice: 70, // preço de liquidação de 70 reais
};

  // Função que recebe um objeto produto e uma função de desconto e calcula o desconto
function calculateProductDiscount(product, discountFunction) {
    const discount = discountFunction(product);
    console.log(`O desconto do produto ${product.name} é de ${discount} reais.`);
}

  // Chamando a função calculateProductDiscount com diferentes objetos e funções de desconto
  calculateProductDiscount(saleProduct, calculateSaleDiscount); // Saída: "O desconto do produto Camiseta é de 10 reais."
  calculateProductDiscount(clearanceProduct, calculateClearanceDiscount); // Saída: "O desconto do produto Calça é de 30 reais."
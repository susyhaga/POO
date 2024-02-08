

//COMECO BASICO PARA ENTENDER O SUPER EM OBJETO DE CLASSE /HERANCA ES6

//A palavra-chave super é frequentemente usada para chamar o construtor de uma classe pai 
//quando você está trabalhando com herança em JavaScript. Quando uma classe estende outra classe,
// você pode usar super() no construtor da classe filha para chamar o construtor da classe pai.
// Isso garante que a inicialização da classe pai seja executada antes da inicialização específica da classe filha.


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} faz um som.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Chama o construtor da classe pai com o argumento 'name'
        this.breed = breed;
    }

    speak() {
        super.speak(); // Chama o método da classe pai
    console.log(`${this.name} late.`);
    }
}

const myDog = new Dog('Buddy', 'Labrador');
myDog.speak();// nao precisa do console pq ele esta apenas chamando o metodo speak em myDog


////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.name = 'Polygon';
    }
}

class Square extends Polygon {
    constructor(length) {
      // Chama o construtor da classe pai (Polygon) com o comprimento como altura e largura
        super(length, length);

      // Atribui o comprimento ao atributo 'length' da classe Square
        this.length = length;

      // Atribui um nome à classe Square
        this.name = "Square";
    }

    get area() {
      // Retorna a área calculada usando a altura e a largura
      return this.height * this.width;
    }

    set area(value) {
      // Define a área, assumindo que o usuário forneceu um valor correto
      // Lembre-se de que a área de um quadrado é o lado ao quadrado
        this.length = Math.sqrt(value);
        this.height = this.width = this.length;
    }
}

  // Exemplo de uso
const square = new Square(5);
const polygon = new Polygon()

console.log(square.area); // Saída: 25 (5 * 5)
square.area = 36;
console.log(square.length); // Saída: 6 (raiz quadrada de 36)
console.log(square.area); // Saída: 36 (6 * 6)
console.log(square.name) //Square
console.log(polygon.name) //Polygon






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Super chamando métodos estáticos

// Você também pode chamar o super em métodos estáticos.


class Human {
    constructor() {}
    static ping() {
    return "ping";
    }
}

class Computer extends Human {
    constructor() {}
    static pingpong() {
    return super.ping() + " pong";
    }
}
console.log(Computer.pingpong()); // 'ping pong'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ao deletar propriedades do super, será emitido um erro

// Você não pode utilizar o delete operator (en-US) e
// super.prop ou super[expr] para deletar uma propriedade da classe pai. Isto emitirá um ReferenceError.

// class Base {
//     constructor() {}
//     foo() {}
// }
// class Derived extends Base {
//     constructor() {}
//     delete() {
//         delete super.foo;
//     }
// }

//   new Derived().delete(); // ReferenceError: invalid delete involving 'super'.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Super.prop não pode sobrescrever propriedades não editáveis

// supernão pode sobrescrever o valor de uma propriedade quando esta houver sido definida como não editável
//  ('writable: false') com, e.g., Object.defineProperty.

class X {
    constructor() {
        Object.defineProperty(this, "prop", {
        configurable: true,
        writable: false,
        value: 1,
        });
    }
    f() {
        //super.prop = 2;
    }
}

var x = new X();
x.f();
console.log(x.prop); // 1


////////////////////////////////////////////////////////////////////////////////////////////////////////

// Usando super.prop em objetos literais

// super também pode ser usado na inicialização da notação literal de objetos.
//  No exemplo abaixo, cada objeto define um método. No segundo objeto, super chama o método do primeiro objeto. 
//  Isso funciona graças ao Object.setPrototypeOf(), com o qual é possível configurar o prototype do obj2 para o obj1,
//  tornando o super capaz de encontrar o method1() por meio do obj2.

var obj1 = {
    method1() {
        console.log("method 1");
    },
};

var obj2 = {
    method2() {
        super.method1();
    },
};

Object.setPrototypeOf(obj2, obj1);
  obj2.method2(); // retorna "method 1"
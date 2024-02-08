//class, constructor, super(), extends
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    
    falar() {
        console.log(`${this.nome} faz barulho.`);
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }
    
    falar() {
        console.log(`${this.nome} faz au au.`);
    }
    
    mostrarRaca() {
        console.log(`Sou um ${this.raca}.`);
    }
}

let meuCachorro = new Cachorro("Rex", "Labrador");
  meuCachorro.falar(); // Output: Rex faz au au.
  meuCachorro.mostrarRaca(); // Output: Sou um Labrador.

//////////////////////////////////////////////////////////////////////////////////////////////////

//constructor, class, super(), extends ====> ES6

// class Quadrado extends Poligono {
//     constructor(comprimento) {
//       // super chama o construtor da classe pai que vai atribuir comprimento para
//       // os atributos comprimento e altura herdados pela nossa classe filha Quadrado
//         super(comprimento, comprimento);
//       // Nas classes filhas, super() deve ser chamado antes de usar o this. Sem ele
//       // vai ocorrer um erro de referência. O this agora se refere a classe filha Quadrado
//         this.nome = "Quadrado";
//     }

//     // os atributos a seguir são herdados da classe pai Poligono: altura, comprimento e area.

//     get area() {
//       return this.altura * this.comprimento;
//     }

//     set area(valor) {
//         this.area = valor;
//     }
// }
const pessoa = {
    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome}!`);
    }
};

const cliente = Object.create(pessoa);
cliente.nome = "João";
cliente.endereco = "Rua A, 123";

cliente.cumprimentar(); // "Olá, meu nome é João!"

// Neste exemplo, criamos um objeto cliente com base no protótipo pessoa, adicionamos a propriedade nome e utilizando
//  o método cumprimentar do protótipo pessoa.

// Esses foram apenas alguns exemplos de como utilizar protótipos em JavaScript. 
// Através dessa abordagem, podemos criar objetos de forma mais eficiente, reutilizar código e
//  organizar nossas aplicações de maneira mais estruturada. A utilização de protótipos é uma das 
//  características essenciais do JavaScript e entender seu funcionamento é fundamental para se tornar
//   um programador mais completo e eficiente.
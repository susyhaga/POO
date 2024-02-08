// Um método estático em JavaScript é um método que pertence à própria classe, 
// em vez de pertencer a instâncias específicas dessa classe. 
// Métodos estáticos são definidos usando a palavra-chave static antes do nome do método na declaração da classe.

// A principal característica de métodos estáticos é que eles não têm acesso às instâncias da classe;
//  eles são chamados diretamente na classe em si, e não em instâncias da classe. Isso significa que métodos estáticos não podem acessar as propriedades de instância
//  ou chamar outros métodos de instância.


class MathOperations {
  // Método estático para calcular a soma de dois números
    static add(x, y) {
        return x + y;
    }

  // Método de instância para calcular o quadrado de um número
    square(z) {
        return z * z;
    }
}

// Uso de método estático
const result = MathOperations.add(3, 4);
console.log(result); // Saída: 7

// Tentativa de chamar o método de instância diretamente na classe (gerará um erro)
// const squareResult = MathOperations.square(5); // Erro: square não é uma função

// Criando uma instância da classe para chamar o método de instância
const mathInstance = new MathOperations();
const squareResult = mathInstance.square(5);
console.log(squareResult); // Saída: 25
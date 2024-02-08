class Exemplo {
    constructor() {
        this._atributoPrivado = 42;
    }

    get getatributoPrivado() {
        return this._atributoPrivado;
    }

    set setatributoPrivado(novoValor) {
        this._atributoPrivado = novoValor;
    }
}


// Criando uma instância da classe Exemplo
const meuExemplo = new Exemplo();

// Acessando o valor atual do atributo privado
console.log(meuExemplo._atributoPrivado); // Saída: 42

// Usando o método 'set' para alterar o valor do atributo privado
meuExemplo.setatributoPrivado = 55;

// Verificando a alteração
console.log(meuExemplo._atributoPrivado); // Saída: 55
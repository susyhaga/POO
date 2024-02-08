// Objeto que servirá como protótipo para a encapsulação
var animal = {
    som: function() {
        console.log('Som genérico');
    }
};

// Função de fábrica para criar objetos encapsulados
function criarObjetoEncapsulado() {
    var objeto = Object.create(animal);

    // Atributos privados
    var _propriedadePrivada = 'Valor privado';

    // Método público que acessa a propriedade privada
    objeto.getPropriedadePrivada = function() {
        return _propriedadePrivada;
    };

    // Método público que modifica a propriedade privada
    objeto.setPropriedadePrivada = function(novoValor) {
        _propriedadePrivada = novoValor;
    };

    return objeto;
}

// Criando um objeto encapsulado
var meuObjetoEncapsulado = criarObjetoEncapsulado();

// Acessando a propriedade privada usando métodos públicos
console.log(meuObjetoEncapsulado.getPropriedadePrivada()); // Saída: Valor privado

// Modificando a propriedade privada usando métodos públicos
meuObjetoEncapsulado.setPropriedadePrivada('Novo valor privado');

// Verificando a modificação
console.log(meuObjetoEncapsulado.getPropriedadePrivada()); // Saída: Novo valor privado
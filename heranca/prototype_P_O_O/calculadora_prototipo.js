function Calculadora() {
    this.valor = 0;
}

Calculadora.prototype.adicionar = function(valor) {
    this.valor += valor;
};

Calculadora.prototype.subtrair = function(valor) {
    this.valor -= valor;
};

Calculadora.prototype.obterResultado = function() {
    return this.valor;
};

const minhaCalculadora = new Calculadora();
minhaCalculadora.adicionar(5);
minhaCalculadora.subtrair(2);
console.log(minhaCalculadora.obterResultado()); // 3


//Neste exemplo, utilizamos o protótipo Calculadora.prototype para definir os métodos adicionar, subtrair e obterResultado. 
//Esses métodos podem ser utilizados por qualquer objeto criado a partir do construtor Calculadora.
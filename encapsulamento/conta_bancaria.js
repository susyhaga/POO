// Exemplo em JavaScript (não é encapsulado)
function ContaBancaria(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
}

// Não há encapsulamento, pois os dados podem ser acessados diretamente
var minhaConta = new ContaBancaria('João', 1000);
minhaConta.saldo = 2000; // Acesso direto ao saldo (reatribuindo valor de saldo)

console.log(minhaConta.saldo) //2000
// Exemplo encapsulado
function ContaBancariaEncapsulada(titular, saldo) {
    var _titular = titular;
    var _saldo = saldo;

    this.getTitular = function() {
        return _titular;
    };

    this.getSaldo = function() {
        return _saldo;
    };

    this.depositar = function(valor) {
        _saldo += valor;
    };
}

// Uso de métodos para acessar e modificar os dados
var minhaContaEncapsulada = new ContaBancariaEncapsulada('João', 1000);
minhaContaEncapsulada.depositar(500);
console.log(minhaContaEncapsulada.getSaldo()); // Acesso controlado ao saldo
// Exemplo com encapsulamento em uma classe Carro

class Carro {
    constructor(marca, modelo, ano) {
        // Atributos privados
        this._marca = marca;
        this._modelo = modelo;
        this._ano = ano;
        this._ligado = false;
        this._quilometragem = 0;
    }

    // Métodos públicos para acessar informações privadas
    get marca() {
        return this._marca;
    }

    get modelo() {
        return this._modelo;
    }

    get ano() {
        return this._ano;
    }

    get ligado() {
        return this._ligado;
    }

    get quilometragem() {
        return this._quilometragem;
    }

    // Métodos públicos para ações controladas
    ligar() {
        if (!this._ligado) {
            this._ligado = true;
            console.log("O carro está ligado.");
        } else {
            console.log("O carro já está ligado.");
        }
    }

    desligar() {
        if (this._ligado) {
            this._ligado = false;
            console.log("O carro está desligado.");
        } else {
            console.log("O carro já está desligado.");
        }
    }

    dirigir(distancia) {
        if (this._ligado) {
            this._quilometragem += distancia;
            console.log(`O carro percorreu ${distancia} km.`);
        } else {
            console.log("O carro precisa estar ligado para dirigir.");
        }
    }
}

// Uso da classe Carro com encapsulamento
const meuCarro = new Carro('Toyota', 'Corolla', 2022);
console.log(meuCarro.marca); // Acesso controlado à marca
console.log(meuCarro.modelo); // Acesso controlado ao modelo
console.log(meuCarro.ano); // Acesso controlado ao ano

meuCarro.ligar(); // O carro esta ligado
meuCarro.dirigir(50); //O carro percorreu 50km (quilometragem aumenta)
meuCarro.desligar(); //O carro esta desligado
console.log(meuCarro.quilometragem); // 50 ( Acesso controlado à quilometragem)
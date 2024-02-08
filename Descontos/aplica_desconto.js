class Produto{
    constructor (nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcular_total(){
       const total = this.preco * this.quantidade
        return total;
    }
    aplicar_desconto(desconto){
        const novo_preco = this.preco * desconto

        return novo_preco;
    }
}

class Feminino extends Produto{
    constructor(nome, preco, quantidade, cor){ 
    super( nome, preco, quantidade) //pega o construtor de Produto
    this.cor = cor
    }
}

const produto_feminino = new Feminino("camiseta", 50, 10, "azul")
console.log(produto_feminino)
console.log(produto_feminino.nome)
console.log(produto_feminino.cor)

//acessando os metodos

console.log(produto_feminino.calcular_total())
console.log(produto_feminino.aplicar_desconto(0.5))
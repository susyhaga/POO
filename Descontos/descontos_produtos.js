//produto feminino com 18 reais de desconto
function Produto(produto, preco, tamanho, desconto){
    this. produto = produto;
    this.preco = preco;
    this.tamanho = tamanho;
    this.desconto = desconto;


    this.calculaDesconto = function(){

        const novoPreco = this.preco * this.desconto

        return novoPreco;
    }
    console.log(this.calculaDesconto())
}

const produto_feminino = new Produto('kimono', 180, ["pp", "p", "m", "g", "gg"], 0.1);


console.log(Object.keys(produto_feminino));
console.log(Object.values(produto_feminino));

console.log(`O ${produto_feminino.produto} feminino está com R$: ${produto_feminino.calculaDesconto()} reais de desconto`); //15 reias de desconto

// //produto masculino com 20 reais de desconto usando  METODO CALL()
function Produto_masculino(produto, preco, tamanho, desconto, color){

    Produto.call(this, produto, preco, tamanho, desconto);
        this.color = color;
}

const produto2 = new Produto_masculino('camiseta',100,["pp", "p", "m", "g", "gg"], 0.2, 'verde');

console.log(Object.keys(produto2));
console.log(Object.values(produto2));

console.log(`A ${produto2.produto} masculina da cor ${produto2.color} está com R$: ${produto2.calculaDesconto()} reais de desconto`); //15 reias de desconto

//produto infantil com 100 reais de desconto com CALL() pra redefinir o valor do desconto

function Produto_infantil(produto, preco, tamanho){

    Produto.call(this, produto, preco, tamanho);

    this.desconto = 0.5;
}

const produto3 = new Produto_infantil('conjunto moleton',200,[4, 8, 12, 14, 16]);


console.log(Object.keys(produto3));
console.log(Object.values(produto3));

 console.log(`A ${produto3.produto} infantil está com R$: ${produto3.calculaDesconto()} reais de desconto`); //20 reias de desconto

///////////////////////////////////////////////////////

const produto4 = new Produto('vestido', 200,["pp","p", "m", "g", "gg"], 0.5);


console.log(Object.keys(produto4));
console.log(Object.values(produto4));

console.log(`O ${produto4.produto} pet está com R$: ${produto4.calculaDesconto()} reais de desconto`); //100 reias de desconto

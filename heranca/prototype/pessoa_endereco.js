var objBase = '';

    function ConstrutorJSON(){
    this.nome = "Fernando";
    this.idade = 25;
    this.profissao = "Analista de Sistemas";
    this.endereco = "Minha casa";
    this.numero = 199;
}

ConstrutorJSON.prototype.Pessoa = function(){
    return this.nome + " - " + this.profissao + "- Idade: " 
    + this.idade.toString();
}
ConstrutorJSON.prototype.EnderecoCompleto = function(){
    return this.endereco + ", " + this.numero;
}

function ExecucaoCriacaoObjeto(){
        objBase = new ConstrutorJSON();
}

//Dentro do corpo da função “DisparaPrimeiroTeste();” repare que executo uma chamada à próxima função denominada 
//“ExecucaoCriacaoObjeto();”.
//Esta função tem por objetivo criar a instância do objeto “objBase” 
//ao qual será nossa base para execução dos métodos definidos ao construtor dele (“ExecucaoCriacaoObjeto();”) anteriormente.
function ExecutaTesteObtencaoDados(){
    if(objBase == null){
            ExecucaoCriacaoObjeto();
    }
}
function DisparaPrimeiroTeste(){
    ExecucaoCriacaoObjeto(); //soh quando eu disparar essa funcao, o objeto objtBase eh criado
                            //sem essa funcao ativada, nao ha como fazer o console log de objBase.Pessoa
    alert("Dados Criados: " + objBase.nome + "\r\n" 
    + objBase.idade + "\r\n" + objBase.profissao + "\r\n" 
    + objBase.endereco + "\r\n" + objBase.numero);

}

function DisparaSegundoTeste(){
    ExecucaoCriacaoObjeto();
alert("Dados obtidos das funções: \r\nPessoa: " 
+ objBase.Pessoa() + "\r\nEnderecoCompleto: " 
+ objBase.EnderecoCompleto());

}

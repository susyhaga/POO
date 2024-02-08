function Pessoa(nome){
    this.nome = nome;
    this.dizOI = function(){
        console.log(this.nome + " " + "diz ola")
    }
}
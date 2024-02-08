
//ENCAPSULAMENTO.

//problema: qualquer um pode alterar o valor do salario do funcionario1

//funcionario1.salario = 'mil'
//console.log(funcionario1);



function Pessoa(nome){
    this.nome = nome;
    this.dizOi = function(){

        console.log(this.nome + " diz ola");
    }
}


function Funcionario(nome, cargo, salario){
    this.cargo = cargo 

    //tornar um atributo PRIVADO
    let _salario = salario;

//acessando o atributo privado

//criando um metodo para retornar o valor = get 

//getter 
    this.getSalario = function(){
        return `O salario de ${this.nome} eh de ${_salario}`;
    }

    //ATRIBUINDO VALOR A UM ATRIBUTO PRIVADO = set

    //setter
    
    this.setSalario = function(valor){

        //fazendo validacoes com IF
        //se essa condicao for verdadeira...atribui valor a salario

        if(typeof valor === 'number'){
            _salario = valor
        }
    }
    




    this.dizCargo = function(){
        console.log(this.cargo);
    }
    Pessoa.call(this,nome);
}


const funcionario1 = new Funcionario('Maria', 'dev front-end', 5000)
funcionario1.dizOi();
funcionario1.dizCargo();

  //ATRIBUINDO VALOR A UM ATRIBUTO PRIVADO
funcionario1.setSalario('mil');

  //retornando o novo valor do atributo privado
console.log(funcionario1.getSalario());
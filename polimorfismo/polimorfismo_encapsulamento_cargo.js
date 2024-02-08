//Polimorfismo eh a capacidade de exercutarmos a mesma tarefa
//de formas diferentes

//para isso temos que criar um metodo (this.aumento = function())

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

//getter Objetivo: Define um método para obter o valor de uma propriedade.
    this.getSalario = function(){
        return _salario;
    }

    //ATRIBUINDO VALOR A UM ATRIBUTO PRIVADO = set

    //setter Objetivo: Define um método para definir o valor de uma propriedade.
    
    this.setSalario = function(valor){

        //fazendo validacoes com IF
        //se essa condicao for verdadeira...atribui valor a salario

        if(typeof valor === 'number'){
            _salario = valor
        }
    }
    
//polimorfismo

    this.aumento = function(){

        const novoSalario = _salario * 1.1;

        _salario = novoSalario;
    }

    this.dizCargo = function(){
        console.log(this.cargo);
    }
    Pessoa.call(this,nome);
}

//funcionario2 eh estagiario por isso recebe 7% de aumento

//HERDA ATRIBUTOS DA FUNCAO FUNCIONARIO //function Funcionario(nome, cargo, salario){

//_salario vai dar erro pq nao atribuimos o valor de _salario em Estagiario.Solucao eh usar GET E SET para atribuir o valor
//de _salario em Estagiario

function Estagiario(nome){

    Funcionario.call(this, nome,"Estagiario",2000);

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.07;

        this.setSalario(novoSalario);
    }
}


const funcionario1 = new Funcionario('Maria', 'dev front-end', 5000);
const funcionario2 = new Estagiario('Pedro');

funcionario1.aumento();
funcionario2.aumento();
console.log(funcionario1.getSalario());
console.log(funcionario2.getSalario());
console.log(funcionario1.aumento()) //undefined

//REDEFININDO VALOR COM Set

funcionario1.setSalario = 100;
console.log(funcionario1.getSalario());

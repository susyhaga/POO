
//Neste exemplo, utilizamos o protótipo Validator.prototype para validar um campo de formulário.
// O método setInput define o valor do campo e o método validate realiza a validação. 
//Podemos criar vários objetos Validator usando o mesmo protótipo para validar diferentes campos de formulário.



//Criando um plugin de formulário:
function Validator() {
    this.input = "";
}

Validator.prototype.setInput = function(input) {
    this.input = input;
};

Validator.prototype.validate = function() {
};

const nameValidator = new Validator();
nameValidator.setInput("name");
nameValidator.validate();


//   Neste exemplo, estendemos a funcionalidade dos objetos String e Array 
//   adicionando novos métodos. O método capitalize da String.prototype retorna a string com a primeira letra maiúscula.
//    O método filterNumbers da Array.prototype
//    filtra os números em um array. Esses métodos personalizados podem ser utilizados em qualquer string ou array em JavaScript.
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

Array.prototype.filterNumbers = function() {
    return this.filter(item => typeof item === "number");
};

const name = "john";
console.log(name.capitalize()); // "John"

  const numbers = [1, "two", 3, "four", 5];
  console.log(numbers.filterNumbers()); // [1, 3, 5]



  //É possível aplicar polimorfismo na programaçao funcional?


//   🤖 ChatGPT: - Na programação funcional, o conceito de polimorfismo é um pouco diferente do exemplo anterior,
//    pois não há classes ou herança como na programação orientada a objetos.

//No entanto, é possível obter um comportamento polimórfico usando funções de alta ordem (higher-order functions) 
//e passando funções como parâmetros.

// // Função polimórfica que recebe uma função como argumento
function makeAnimalSound(animalFn) {
    return animalFn;
}

  // Funções específicas para diferentes sons de animais
function dogSound() {
    console.log("O cachorro late.");
}

function catSound() {
    console.log("O gato mia.");
}

  // Utilizando a função polimórfica com diferentes funções
  makeAnimalSound(dogSound()); // Saída: "O cachorro late."
  makeAnimalSound(catSound()); // Saída: "O gato mia."

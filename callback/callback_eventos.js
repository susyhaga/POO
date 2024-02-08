// Função que será chamada quando o botão for clicado
function funcaoCallback() {
    console.log("Botão clicado!");
}

// Selecionando o botão no DOM
const botao = document.getElementById('meuBotao');

// Adicionando um evento de clique ao botão e passando a função de callback
botao.addEventListener('click', funcaoCallback);

// Criamos uma função chamada funcaoCallback que será executada quando o botão for clicado.

// Selecionamos o botão no DOM usando document.getElementById('meuBotao').

// Adicionamos um ouvinte de evento (click) ao botão usando addEventListener. Passamos a função de callback funcaoCallback como argumento para ser executada quando o evento ocorrer.

// Quando o usuário clicar no botão, a função de callback será chamada, exibindo "Botão clicado!" no console.

// O uso de callbacks em eventos é essencial para lidar com interações do usuário, permitindo que você responda dinamicamente a ações como cliques, teclas pressionadas, movimentos do mouse, entre outros. Isso proporciona uma maneira eficaz de tornar suas aplicações mais interativas e responsivas.


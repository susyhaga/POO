//parametro
//Um parâmetro é uma variável declarada na definição de uma função. Essa variável é usada para receber valores quando a função é chamada.
//Parâmetros são usados para fornecer dados específicos à função.

function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

saudacao('Maria'); // 'Maria' é o valor passado como argumento para o parâmetro 'nome'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//callback

//Um callback é uma função que é passada como argumento para outra função. A função que recebe o callback pode chamá-lo de volta (executar) em algum ponto.
//Callbacks são frequentemente usados em operações assíncronas ou eventos.

function operacaoAssincrona(callback) {
    setTimeout(function() {
        console.log('Operação concluída!');
        callback();
    }, 1000);
}

function mensagemFinal() {
    console.log('Tudo terminou.');
}

operacaoAssincrona(mensagemFinal); // 'mensagemFinal' é o callback passado para 'operacaoAssincrona'

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//callback exemplo 2

// Função simulando uma operação assíncrona, por exemplo, leitura de arquivo
function operacaoAssincrona(callback) {
    setTimeout(function() {
        console.log("Operação assíncrona concluída!");
        const resultado = 42;
        callback(resultado); // Chamando a função de callback e passando o resultado
    }, 2000);
}

// Função de callback que será chamada quando a operação assíncrona for concluída
function callbackConclusao(resultado) {
    console.log(`O resultado da operação é: ${resultado}`);
}

// Chamando a função assíncrona e passando a função de callback
operacaoAssincrona(callbackConclusao);

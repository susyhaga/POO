// Quando você define uma propriedade como não editável usando:

//Object.defineProperty() ou Object.freeze(),

//  a tentativa de modificar essa propriedade resultará em erros ou falhas silenciosas, 
//  dependendo do modo estrito e do método usado.

// Vamos considerar a utilização de Object.defineProperty() para tornar uma propriedade não editável:


const obj = {};

Object.defineProperty(obj, 'nonEditableProperty', {
    value: 42,
    writable: false, // Define a propriedade como não editável
});

// Tentativa de modificação resultará em erro no modo estrito
obj.nonEditableProperty = 100; // No modo estrito, isso lançará um erro
console.log(obj.nonEditableProperty); // Saída: 42 (a modificação não ocorre)

//Neste exemplo, a propriedade nonEditableProperty é definida como não editável ao configurar writable como false no Object.defineProperty(). Em modo estrito, a tentativa de modificar essa propriedade lançará um erro.

// Para verificar se uma propriedade é editável ou não, você pode usar a função Object.getOwnPropertyDescriptor()
//  para obter o descritor de propriedade e verificar a propriedade writable:

const descriptor = Object.getOwnPropertyDescriptor(obj, 'nonEditableProperty');

if (descriptor && !descriptor.writable) {
    console.log('A propriedade é não editável.');
} else {
    console.log('A propriedade é editável.');
}
/////////////////////////////////////////////////////////////

//Object.getOwnPropertyDescriptor(obj, 'nonEditableProperty'):

// Object.getOwnPropertyDescriptor é um método que retorna um objeto que descreve as propriedades de um objeto fornecido. 
// No caso, estamos usando isso para obter o descritor de propriedade da propriedade chamada 'nonEditableProperty' no objeto obj.
// if (descriptor && !descriptor.writable):

// O if verifica se o descriptor não é undefined (ou seja, se a propriedade existe) e se a propriedade não é editável
// (ou seja, se descriptor.writable é false).

// !descriptor.writable verifica se a propriedade não é editável, pois descriptor.writable será true se a propriedade for editável,
//  e false se não for.

// console.log('A propriedade é não editável.');:

// Se a condição do if for verdadeira (ou seja, se a propriedade não for editável), imprime no console a mensagem indicando que 
// a propriedade é não editável.
// else:

// Se a condição do if for falsa (ou seja, se a propriedade for editável), imprime no console a mensagem 
// indicando que a propriedade é editável.
// Em resumo, esse trecho de código verifica se a propriedade chamada 'nonEditableProperty' no objeto obj é editável ou não.
//  Se a propriedade não for editável, imprime uma mensagem indicando que ela é não editável; caso contrário, 
//  imprime uma mensagem indicando que é editável. 
// Essa verificação é feita com base nas informações fornecidas pelo descritor de propriedade (descriptor).
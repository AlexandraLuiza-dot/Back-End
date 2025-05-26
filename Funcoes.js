import rl from 'readline-sync'

let frase = rl.question("Informe o texto para ser convertido: ");

//decleração de função
function Maiusculas(texto) {
    return texto.toUpperCase();
}

console.log(Maiusculas(frase))

//Expressão de função
const cxAlta = function(texto){
    return texto.toUpperCase();
}

//arrow function
const tudoMaiusculas = (texto) => texto.toUpperCase();

console.log(cxAlta(frase));
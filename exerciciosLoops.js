//1
import rl from 'readline-sync';

//let num = rl.questionInt("Informe seu numero para a tabuada: ");
//let cont = 1;
//while (cont <= 10){
//    console.log(`${num} x ${cont} = ${num * cont}`);
//    cont++;
//}

//2
//let numAlunos = rl.questionInt("Informe o número de alunos da turma: ");

//let contAlunos = 1;
//let somaMedias = 0;

//while (contAlunos <= numAlunos) {
//    console.log(`Aluno ${contAlunos}`);

//    let contBimestres = 1;
//    let somaNotas = 0;

//    while (contBimestres <= 4) {
//        let nota = rl.questionInt(`Informe a nota do ${contBimestres}º bimestres do aluno ${contAlunos}: `);
//        somaNotas += nota;
//        contBimestres++;
//    }

//    let mediaAluno = somaNotas / 4;
//    somaMedias += mediaAluno;
//    console.log(`Média do aluno ${contAlunos}: ${mediaAluno.toFixed(2)}`);
//    contAlunos++;
//}
//let mediaGeralTurma = somaMedias / numAlunos;
//console.log(`Média geral da Turma: ${mediaGeralTurma.toFixed(2)}`);

//3

//const numeroAleatorio = Math.floor(Math.random()*100)+1;
//let palpite;

//do {
//    palpite = rl.questionInt("Adivinhe um número entre 1 e 100: ");
//    if (palpite === numeroAleatorio){
//        console.log("Parabéns! VC GANHOU NA TELE SENA!!!!!")
//    } else if (palpite < numeroAleatorio) {
//        console.log("Tente um número maior.")
//    }else{
//        console.log("Tente um número menor.")
//    }

//} while (palpite !== numeroAleatorio);

//4

let nome = rl.question(`Informe o nome da ${i}ª pessoa: `);
let salario = rl.questionFloat(`Informe o salário de ${nome}: `)
let impostoRenda = 0;

if (salario <= 2100){
    impostoRenda = 0;
}else if (salario <= 2800) {
    impostoRenda = salario * 0.075
} else if (salario <= 3750){
    impostoRenda = salario * 0.15;
}else if (salario <= 4660){
    impostoRenda = salario * 0.225;
} else{
    impostoRenda = salario * 0.275;
}

console.log(`\n---Imposto de renda a ser pago---`);
console.log(`Nome: ${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed(2)}\n`);

//atividade

let anterior = 0;
let atual = 1;

console.log("---Sequência de Fibonacci---")
console.log(anterior)
console.log(atual)

for (let i = 3; i <= 20; i++) {
    let proximo = anterior + atual;

    console.log(proximo);

    anterior = atual;
    atual = proximo;
}

//atividade

const pessoa = {
    nome: "Alexandra",
    idade: 16,
    sexo: 'F'
}

for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`)
}

let cores = ["Azul", "Roxo", "Rosa", "Verde", "Branco"];
for (const elemento of cores) {
    console.log("Cor: " + elemento);
}

//atividade
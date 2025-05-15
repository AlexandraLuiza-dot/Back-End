// 1
let apartamento ={
    quartos : 2,
    tipo : "Apartamento",
    endereço : "Avenida Principal, 456 - Centro",
    andar : 7
}
console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}º andar da ${apartamento.endereço}.`);

// 2
let produtoEmbalado ={
    nome : "Laptop HP",
    categoria : "Eletrônicos",
    peso : 1.5,
    preco : 3500.00
}
console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria},pesando ${produtoEmbalado.peso}kg, está a venda por R$ ${produtoEmbalado.preco.toLocaleString('pt-BR', {style: 'currency', currency:'BR'})}.`)

//3
class Imovel {
    constructor(quartos, tipo, endereço){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereço = endereço
    }
}
exibirInformações(){
    return `${this.tipo} com ${this.quartos} quartos, localizado(a) na ${this.endereço}`
}
let casa = new Imovel(4, 'Casa', 'Rua da Amizade, 789 - Bairro Alegre, nº1011');
console.log(casa.exibirInformações())

let ap = new Imovel(2, 'Apartamento', 'Rua da Amizade, 789 - Bairro Alegre, nº 1010');
console.log(ap.exibirInformações())

//casa.quartos = 4;
//casa.tipo = 'Casa';
//casa.endereço = 'Rua da Amizade, 789 - Bairro Alegre';
//console.log(casa)
//console.log(`Quartos: $(casa.quartos) \nTipo: $(casa.tipo) \nEndereço: $(casa.endereço)`)

//4
class Veiculo {
    constructor(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano
    }
}
exibirDetalhes(){
    return `${this.marca} com ${this.modelo} quartos, localizado(a) na ${this.ano}`
}
let carro = new Veiculo('Toyota', 'Corolla', 2022);
console.log(casa.exibirDetalhes())

let motocicleta = new Veiculo('Honda', 'CBR 600RR', 2021);
console.log(ap.exibirDetalhes())
// Objeto Literal

const carroDoFelipe = {
    modelo: 'Uno',
    fabricante: 'Fiat',
    anoDeFabricacao: 2015,
    acelerar:  () => {
        console.log('vrunn');
        
    } 
}

// função construtora

function Carro(modelo, fabricante, anoDeFabricacao){
    this.modelo = modelo; 
    this.fabricante = fabricante;
    this.anoDeFabricacao = anoDeFabricacao;
    this.acelerar = function(){
        console.log('acelerar');
        
    }
}
const carroDoRafael = new Carro('Ferrari', 'Ferrari', 2024);
const carroDoDaniel = new Carro('Porshe', 'Porshe', 2024);

console.log(carroDoRafael);
console.log(carroDoDaniel);
console.log(carroDoFelipe);

//criando um objeto a partir de dados advindos de variáveis.

const nome = 'Felipe';
const idade = 22;
const eDeMaior = true;
const conhecimentos = ["html", 'css', 'JavaScript']

const pessoa = {
    nome: nome,
    idade: idade,
    eDeMaior: eDeMaior,
    conhecimentos: conhecimentos
}



Object.freeze(pessoa) //usado para congelar o objeto, para que seus atributos nao sejam manipuláveis
console.log(Object.keys(pessoa).length); //usado para saber quais chaves temos em um objeto.
console.log(Object.keys(pessoa)); //usado para saber quantas chaves temos em um objeto.
console.log(Object.values(pessoa)); //usado para saber os valores que temos em um objeto.


pessoa.nome = 'rafael'

// verificando os tipos e instancias

console.log(typeof nome)
console.log(typeof pessoa);
console.log(carroDoRafael instanceof Carro);
console.log(conhecimentos instanceof Array);

//utilizando atibuto de forma dinamica

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}

exibeAtributo('nome')

if('sobrenome' in pessoa){
    console.log('Essa pessoa tem um sobrenome');
    
}else{
    console.log('Essa pessoa nao tem um sobrenome');
    
}

if (pessoa.nome) {
    console.log('Essa pessoa tem um nome');
    
}
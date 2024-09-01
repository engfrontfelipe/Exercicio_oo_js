//função que declara o nome do animal
function Animal(nome){
    this.nome = nome;
}

//função que declara a causa da morte do animal
function animalCausa(nome, causa){
    this.causa = causa;

    Animal.call(this, nome);

}

//função que faz a chamada final do animal
function chamadaDoAnimal(id, nome, causa){
    this.id = id;
    animalCausa.call(this, nome, causa)
}

//instanciando os animais.
const animal1 = new chamadaDoAnimal(10, 'Neguinho', 'Foi morto por uma gangue de chachorros famintos.')
const animal2 = new chamadaDoAnimal(20, 'Lua', 'Morreu brigando com um dinossauro.')
const animal3 = new chamadaDoAnimal(30, 'Fred', 'Foi comido por um Leão.')

//chamada das funções para o console
console.log(animal1);
console.log(animal2);
console.log(animal3);



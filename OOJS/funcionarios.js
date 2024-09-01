function Pessoa (nome) {
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome + " disse olá");  
    };
    
};

function Funcionario (nome, cargo, salario){
    this.cargo = cargo;
    let _salario = salario;
   
    this.getSalario = function () {
        return `O salário de ${this.nome} é de R$ ${_salario}`
    }
   
    this.setSalario = function(valor){
       if(typeof valor === 'number'){   
           _salario = valor;

       }else{
         console.log('O novo valor atibuido ao salário é inválido.');
         
       }    
    }

    this.aumento = () => {
        
        if( _salario === 2000){
            
            const novoSalario = _salario * 1.07;
            _salario = novoSalario
            
        }else{
           
            const novoSalario = _salario * 1.1;
            _salario = novoSalario

        }; 
    }

    Pessoa.call(this, nome);  
    this.dizCargo = function () {
        console.log(this.cargo);        
    }
};

const fun1 = new Funcionario('Felipe', 'Dev front-end', 5000);
const fun2 = new Funcionario('Pedro', 'Estagiário', 2000);
const fun3 = new Funcionario('Daniel', 'Estagiário', 2000);
const fun4 = new Funcionario('Mary', 'Gerente', 8000);

const funcionarios = [fun1, fun2, fun3, fun4]

funcionarios.forEach(element => {
    element.aumento();
    console.log(element.getSalario());
});    

//getters setters
// funcionario1.setSalario(9000);
// console.log(funcionario1.getSalario());

// fun1.aumento();
// console.log(fun1.getSalario());

// fun2.aumento();
// console.log(fun2.getSalario());

// fun3.aumento();
// console.log(fun3.getSalario());

// fun4.aumento();
// console.log(fun4.getSalario());


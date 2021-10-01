
//getters e setters
class Pessoa {
    constructor(
        public _nome: string,
        public _sexo: string,
        public _idade: number,
    ){}

    get nome() {
        return this._nome;
    }

    set nome(nome: string){
        if (!nome) {
            throw new Error('inválido')
        }
        this._nome = nome
    }

    get sexo() {
        return this._sexo.toUpperCase();
    }

    set sexo(sexo: string){
        this._sexo = sexo;
    }

    get idade() {
        return this._idade;
    }

    set idade(idade: number){
    if (idade > 18) {
        throw new Error('valor maior que 18 anos')
        }
        this._idade = idade;
    }

    imprNome():string {
        return `Humano ${this._nome} do sexo ${this._sexo}`
    }
    
    verificarIdade(){
        if (this._idade == 0) {
            console.log("inválido");
        } else
        if (this._idade >= 18) {
            console.log("maior de idade");
        } else {
            console.log("nemor de idade");
        }
    }
    
}



const pessoa1 = new Pessoa('', '', 18)
console.log(pessoa1.nome)


try {
    pessoa1._nome = 'Alek';
    pessoa1._sexo = 'Feminino';
    pessoa1._idade = 12;
    
    console.log(pessoa1)
    console.log(pessoa1.imprNome());
    console.log(pessoa1.verificarIdade());
} catch (err) {
    console.log(err.message)
    
}



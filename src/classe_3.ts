class ImpostoDeRenda {
    constructor (
        public nome: string,
        public rendaAnual: number,
    ) { }

    get nomes() {
        return this.nome
    }

    set nomes(nome: string) {
        if(!nome){
            throw new Error('inválido')
        }
        this.nome = nome
    }

    get RendaAnual() {
        return this.rendaAnual
    }

    set RendaAnual(rendaAnual: number) {
        if (rendaAnual < 0 ) {
            throw new Error('inválida')
        }
        this.rendaAnual = rendaAnual
    }
}
class PessoasFísicas extends ImpostoDeRenda {
    private saúde: number

    constructor(nome: string, rendaAnual: number, saude: number) {
        
        super(nome, rendaAnual)
        this.saúde = saude
    }

    get Saude(): number {

        return this.saúde
    }

    set Saude(saúde: number) {
        if (saúde < 0) 
        {
            throw new Error('negativo')
        }
        this.saúde = saúde
    }

    calculoImposto(){
        if (this.rendaAnual < 20000 && this.saúde) {
            return this.rendaAnual * 0.15
        }
}
}

const pessoafísica = new PessoasFísicas('alek', 50000, 2000)
console.log(`valor do imposto Humano: ${pessoafísica.calculoImposto()}`);

class PessoaJuridica extends ImpostoDeRenda {
    public funcionario: number

    constructor(nome: string, rendaAnual: number, funcionario: number) {
        super(nome, rendaAnual)
        this.funcionario = funcionario
    }

    get Funcionario(): number {
        return this.funcionario
    }

    set Funcionario(funcionario: number) {
        if (funcionario < 0) {
            throw new Error('quantidade inválida')
        }
        this.funcionario = funcionario
    }

    calculoImposto(): number {
        if(this.funcionario < 10) {
            return this.rendaAnual * 0.16
        } else {
            return this.rendaAnual * 0.14
        }
    }
}

const pessoajuridica = new PessoaJuridica('HUmano', 500000, 25)
console.log(pessoajuridica);

console.log('imposto  da pessoa jurídica: ' + pessoajuridica.calculoImposto());
try {
    pessoajuridica.nome = 'HUmano'
    pessoajuridica.funcionario = 100
    pessoajuridica.rendaAnual = 80000

} catch (err:any) {
    console.log(err.messege);
}
 console.log(pessoajuridica);
try {
     pessoafísica.nome = 'HUmano'
     
        pessoafísica.rendaAnual = 100000


} catch (err:any) {
     console.log(err.message);
}
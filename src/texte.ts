// // //exemplo 1
// function  soma(num1: number, num2: number) {
//     return num1 + num2
// }

// soma (30, 40)

// //2
// interface ISomaData{
//     num1: number;
//     num2: number;
// }

// function somar ({num1, num2}: ISomaData) {
//     return num1 + num2
// }

// somar({
//     num1: 10,
//     num2: 30,
// })



// 1) a)classe professor 
//b)método  dizer nota 

// class Professor  {
//     nome: string;
//     idade: number;
//     materia: string;

//     constructor(nome: string, idade: number, materia:string) {
//         this.nome = nome;
//         this.idade = idade;
//         this.materia = materia;
//     }

//     seApresentar(): string {
//         return `meu nome ${this.nome} e ${this.idade} e ${this.materia}`
//     }

//     Notas(...notas: number[]): number{
//         const notasTotal = notas.reduce((total, notaAtual) => total + notaAtual, 0)
//         return notasTotal / notas.length
//     }

// }

// const professor = new Professor('alo', 12 ,'alo')
// console.log(professor)
// console.log(professor.seApresentar())
// console.log(professor.Notas(4, 8))



//2)classe pai atributos e uma classe cliente 

// class Cadastro  {
//     nome: string;
//     nascimento: Date;
    

//     constructor(nome: string, nascimento: Date) {
//         this.nome = nome;
//         this.nascimento = nascimento;
//     }

// }

// class Cliente extends Cadastro {
//     email: string;
//     empresa: string;

//     constructor(nome: string, nascimento: Date, email: string, empresa: string){
//         super(nome, nascimento)
//         this.email = email;
//         this.empresa = empresa;
//     }

//     imprimeCliente(): string {
//         return `O Cliente ${this.nome} nasceu ${this.nascimento} e seu gmail ${this.email} empresa ${this.empresa}`
//     }
// }

// const cliente = new Cliente('alo', new Date('2000/08/13'), 'adak.com', 'abcd')
// console.log(cliente)
// console.log(cliente.imprimeCliente())

//public
// class Veiculo {
//     public cor: string;

//     constructor(cor: string){
//         this.cor = cor;
//     }

// }

// const veiculo = new Veiculo('verde');
// console.log(veiculo.cor)


//classe protected
// class Domicilio {
//     cor: string;
//     endereco: object;

//     constructor(cor: string, endereco: object){
//         this.cor = cor;
//         this.endereco = endereco
//     }

//     public tocarCoisa(): string{
//         return ' busina TOcar??'
//     }
// }

// class Casa extends Domicilio {
//     entrarNaCoisa() {
//         return this.atenderCoisa('oi quem é')
//     }
//     protected atenderCoisa(mesagem: string): string {
//         return mesagem
//     }
// }

// const casa = new Casa('azul', {rua: 'rua sem fim 100', bairro: 'centro'} )
// console.log(casa.entrarNaCoisa())
// console.log(casa.tocarCoisa())


//classe privada

// class Banco {
//     private cofreQtd: number = 10000;

//     private debitarCofre(valor: number): number | string {
//         if (this.cofreQtd >= valor){
//             this.cofreQtd -= valor;
//             return this.cofreQtd
//         } else {
//             return 'O cofre não possui o valor desejado'
//         }
//     }

//     protected sacarDoCaixa(quantidade: number){
//         return this.debitarCofre(quantidade)
//     }

//     sacarDoCaixaEletronico(quantidade: number){
//         return this.debitarCofre(quantidade)
//     }
// }

// class Banco24HOras extends Banco{
//     sacar(quantidade: number){
//         return this.sacarDoCaixa(quantidade)
//     }
// }


// const banco = new Banco();
// banco.sacarDoCaixaEletronico(100)

// const banco24HOras = new Banco24HOras();
// banco24HOras.sacar(50)


//aula dia 20 e 26
// class Funcionario {
//     private nome: string;
//     private salario: number;

//     constructor(nome: string, salario: number){
//         this.nome = nome;
//         this.salario = salario;
//     }

//     public getSalario(){
//         return this.salario
//     }
//     public setSalario(salario: number){
//         this.salario = salario;
//     }

//     public getNome() {
//         return this.nome 
//     }
//     public setNome(nome: string){
//         this.nome = nome;
//     }

//     public bonificacao(){
//         return this.salario * 5 / 100
//     }
    
// }

// class Gerente extends Funcionario {
//     private nomeUsuario: string;
//     private senha: string;

//     constructor(nome: string, salario: number, nomeUsuario: string, senha: string){
//         super(nome, salario);
//         this.nomeUsuario = nomeUsuario;
//         this.senha = senha;
//     }
//     getNomeUsuario() {
//         return this.nomeUsuario
//     }
//     setNomeUsuario(nomeUsuario: string) {
//         this.nomeUsuario = nomeUsuario; 
//     }
//     public bonificacao() {
//         return this.getSalario() * 10/100
//     }
// }

// const funcionario = new Funcionario('Joao', 1223)
// console.log(funcionario)
// funcionario.setNome('Paulo')
// console.log(funcionario.getNome())

// const gerente = new Gerente('Pedro', 2000, 'pedro santo', '1234')
// console.log(gerente.bonificacao())



// class Pessoa {
//     nome: string;
//     sexo: string;
//     idade: number;

//     constructor(nome: string, sexo: string, idade: number) {
//         this.nome = nome;
//         this.sexo = sexo;
//         this.idade = idade;
//     }

//     imprime(): string {
//         return `A pessoa conhecido como ${this.nome} de ${this.idade} anos possui o sexo ${this.sexo}`
//     }


// }

// class Humano extends Pessoa {
//     ola: string;

//     constructor(nome: string, sexo: string, idade: number, ola: string) {
//         super(nome, sexo, idade);
//         this.ola = ola;
//     }
// }

// const pessoa1 = new Pessoa ('Alek', 'M', 14)
// console.log(pessoa1)
// console.log(pessoa1.imprime())
// console.log(pessoa1.idade)
// const pe = new Humano ('Alek', 'M', 14, 'ola')
// console.log(pe)
// //herança aula 4

// dia 26
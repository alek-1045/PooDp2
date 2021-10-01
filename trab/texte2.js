"use strict";
// class Pedido {
//     constructor(
//         private produto: string,
//         protected valorTotal: number,
//         public previsaoEntrega: Date,
//     ) 
//     {}
// }
// const pedido = new Pedido('notebook dell', 4500, new Date('2021-09-10'));
// console.log(pedido)
//getters e setters
// class Permissao {
//     constructor(
//         private _nome: string,
//         private _nivel: number
//     ){}
//     get nome() {
//         return this._nome.toUpperCase();
//     }
//     // getNome() {
//     //     return this.nome.toUpperCase();
//     // }
//     // setNome(nome: string) {
//     //     this.nome = nome;
//     // }
//     set nome(nome: string){
//         if (nome.length < 5) {
//             throw new Error('o nome deve ter no minimo 5 caract')
//         }
//         this._nome = nome
//     }
// }
// const permissao = new Permissao('administrador', 1)
// console.log(permissao.nome)
// try {
//     permissao.nome = 'alexfortes'
//     console.log(permissao.nome)
// } catch (err) {
//     console.log(err.message)
// }
// interface IBancoDeDandos{
//     ip: string,
//     usuario:string,
//     senha: string,
//     tipoBanco: string,
// }
// class BancoDeDados {
//     static Local = '133.12.31'
//     constructor(
//         private ip: string,
//         private usuario:string,
//         private senha: string,
//         private tipoBanco: string,
//     ){}
//     static factory({ip, usuario, senha, tipoBanco}: IBancoDeDandos) {
//         return new BancoDeDados(ip, usuario, senha, tipoBanco);
//     }
// }
// const bancoDeDados = BancoDeDados.factory({
//     ip: BancoDeDados.Local,
//     usuario: 'root',
//     senha: 'root',
//     tipoBanco: 'my sql'
// })
// console.log(bancoDeDados)

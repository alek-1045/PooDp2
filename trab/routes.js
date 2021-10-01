"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorld = void 0;
var CreateUser_1 = require("./services/CreateUser");
function HelloWorld(request, response) {
    var user = (0, CreateUser_1.createUser)({
        name: 'alo',
        email: 'alo.com',
        idade: '111'
    });
    console.log(user.name, user.email, user.idade);
    return response.json({ message: 'hello world' });
}
exports.HelloWorld = HelloWorld;
// node trab/index.js
// yarn tsc  
// yarn tsc --watch

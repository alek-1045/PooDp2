"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
function createUser(_a) {
    var name = _a.name, email = _a.email, idade = _a.idade;
    var user = {
        name: name,
        email: email,
        idade: idade,
    };
    return user;
}
exports.createUser = createUser;

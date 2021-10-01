interface ICreateUserPessoa {
    name: string;
    email: string;
    idade: string;
}


export function createUser({ name, email, idade}: ICreateUserPessoa) {
    const user = {
        name,
        email,
        idade,
    }
    return user;
}
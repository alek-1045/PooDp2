import { Request, Response } from 'express'
import { createUser } from './services/CreateUser'

export function HelloWorld(request: Request, response: Response) {


    const user = createUser({
        name: 'alo',
        email: 'alo.com',
        idade: '111'
    })
    
    console.log(user.name, user.email, user.idade)

    return response.json({ message: 'hello world'})
}


// node trab/index.js
// yarn tsc  
// yarn tsc --watch
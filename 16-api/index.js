import express, { response } from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();
const PORT = process.env.PORT || 3000;
let users = [
    { id: 1, name:'Rafael', age: 31 },
    { id: 2, name: 'Gabriel', age: 27 },
];

app.use(express.json()); // define que as requests serão enviadas no formato json

app.listen(PORT, '127.0.0.1',() => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    return response.send('<h1>Trabalhando com servidor express</h1>')
});

app.get('/users', (request, response) => {
    return response.send(users);
});

app.get ('/users/:userId', (request, response) => {
    const userId = request.params.userId;
    const user = users.find(user => {
        return(user.id === Number(userId));
    })
    return response.send(user);
});

// criando novo usuário no objeto users

app.post('/users', (request, response) => {
    
    const newUser = request.body; // constante para guardar novo usuário

    users.push (newUser); // inserindo novo usuário na lista

    return response.status(StatusCodes.CREATED).send(newUser); // retorna novo usuário com status (201)
});

// atualizar dados de usuário com PUT

app.put('/users/:userId', (request, response) => {
    const userId = request.params.userId;
    const updatedUser = request.body;

    users = users.map( user => {
        if(userId === user.id) {
            return updatedUser;
        }
        return user;
    });
    return response.send(updatedUser);
});

// excluir usuário com DELETE

app.delete('/users/:userId', (request, response) => {
    const userId = request.params.userId;
    users.filter((user) => user.id !== Number(userId));

    return response.status(StatusCodes.NO_CONTENT).send();
});
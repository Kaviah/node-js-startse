import fs from 'fs'; // fs ´uma dependencia do node para importar arquivos
import { promisify } from "util"; // converte uma função de callback em promise

const readFilePromise = promisify(fs.readFile);

let alunos;

readFilePromise('./alunos.json').then((dados) => {
    alunos = JSON.parse(dados);
    console.log ('alunos:',alunos);
}).catch((error) => {
    console.error(error);
});
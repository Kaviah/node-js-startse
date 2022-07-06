import fs from 'fs'; // fs ´uma dependencia do node para importar arquivos

let alunos;

fs.readFile('./alunos.json',(erro,dados) => {
    if(erro) {
        console.log(erro);
        return;
    }
    alunos = JSON.parse(dados); // JSON.parse converte os dados em uma array??
    console.log('alunos:',alunos);
});
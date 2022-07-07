import fetch from "node-fetch";

const apiUrl = 'https://swapi.dev/api';
// constante para o link da API

async function getPeople(oage = 1) { // função assíncrona para pegar os personagens do filme 
    // StarWars da API (request)
    const response = await fetch(`${apiUrl}/people?page=${page}`);
    const people = await response.json();
    // transforma a resposta em um objeto json para que se possa manipular os resultados
    return people.results; //propriedades proprias da API em questão
}

export { getPeople };
// permite utilizar a função em outros arquivos da aplicação
// Chamado de SERVIÇO
// SERVIÇO é um arquivo que acessa uma API ou um banco de dados
// e retorna os resultados obtidos através de uma função a ser
// utilizada em outros arquivos da aplicação 
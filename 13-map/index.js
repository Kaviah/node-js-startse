import { getPeople } from "./StarWarsService.js";

// O map() executa uma função em todos os itens de um array
// e retorna um novo array após a manipulação

async function main () {
    const starWarsPeople = await getPeople(1);
    // const starWarsInfo = starWarsPeople.map((person) => {return person.name});
    // console.log(starWarsInfo);

    // forma mais limpa de construir o código e pegando mais atributos do obejto:
    const starWarsInfo = starWarsPeople
        .map((person) => {
            const { name, height, gender} = person;
            return { name, height, gender};
            // quando o nome da variável e do atributo forem iguais não é necessá-
            // rio utilizar { name: name, height: height, gender: gender }
        })
    console.log(starWarsInfo);
}
main();
import { getPeople } from "./StarWarsService.js";

async function main () {
    const starWarsPeople = await getPeople(1);
    //console.log(starWarsPeople);

    // for (let i=0; i < starWarsPeople.length; i++) {
    //     console.log(starWarsPeople[i].name);
    //     // retorna os valores atribuidos à propriedade "nome" no arquivo
    //     // de "starWarsPeople"
    // }

    // for(let propPerson in starWarsPeople[0]) {
    //     console.log(propPerson);
    //  // retorna as propriedades do objeto
    // console.log(starWarsPeople[0][propPerson]); // retorna os valores atribuídos às propriedades do objeto
    // }

    for (let person of starWarsPeople) {
        console.log(person.name);
        // retorna os valores atribuídos à propriedade "name" dos objetos
    }
}

main();
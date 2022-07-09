// uso do reduce() - reduz todos os valores de um array em um único resultado
// com base na funcão informada. Utilizado para realizar uma somatória ou
// mesclar vários arrays em um único.

import { getPeople } from './StarWarsService.js';
 
async function main() {
    const starWarsPeople = await getPeople(1);
    const totalHeight = starWarsPeople.reduce((total,person) => {
        total += Number(person.height);

        return total;
    }, 0);

    console.log('média de altura: ', totalHeight / starWarsPeople.length);
}

main();
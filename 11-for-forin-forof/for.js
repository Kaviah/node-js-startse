// laço FOR -> percorre elementos de um array [] 
// Exemplo:

const alunos = ['Rafael','Fernanda','Gabriel','Jorge'];
// declaramos uma constante 'alunos' que irá guardar o nome dos alunos dentro de um array

for (let i=0; i<alunos.length; i++) {
    console.log(alunos[i]);
}

// foi declarada uma variável para ser o contador (i=0). 
// em seguida foi colocada uma condição para a execução da função (i<alunos.length) 
// length indica o número de elementos contidos no array a partir de 0 [0,1,2,3,...]
// i++ indica que após percorrer o primeiro elemento, a variável i será incrementada em 1
// o laço for irá percorrer todos os elementos do array, caso o número de elementos do
// mesmo seja menor que i (0) (i<alunos.length)
// em seguida, o console imprime o aluno de cada posição do array => console.log(alunos[i]);
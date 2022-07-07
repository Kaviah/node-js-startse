// for in => percorre as propriedades de um objeto
// Exemplo:

const alunoRafael = {
    id: 1,
    name: 'Rafael Ribeiro',
    github: 'rprrafa',
};

// constante para guardar as propriedades do objeto em um array

for(let prop in alunoRafael) {
    console.log(prop);
}

// função que imprime as propriedades do objeto alunoRafael
const usuarios = [ 
{ nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
{ nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] }, 
{ nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] }, 
{ nome: "Diana", idade: 25, ativo: true, compras: [] }, 
{ nome: "Eduardo", idade: 15, ativo: false, compras: [10] } 
];

// Parte 1
usuarios.forEach(n => {
    let soma = 0;

    n.compras.forEach(valor => {
        soma += valor;
    });

    console.log(n.nome + ": " + soma);
});

// Parte 2
usuarios.forEach(n => {
    if (n.ativo) {
        console.log("O usuário: " + n.nome + " está ativo");
    }
});

// Parte 3
usuarios.forEach(n => {
    if (n.idade >= 18) {
        console.log(n.nome + " é maior de idade");
    }
});

// Parte 4
usuarios.forEach(n => {
    let maior = 0;

    n.compras.forEach(valor => {
        if (valor > maior) {
            maior = valor;
        }
    });

    console.log(n.nome + ": " + maior);
});

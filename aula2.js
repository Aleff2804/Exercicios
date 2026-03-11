const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];

//Parte 1
for (let n of usuarios) {
     console.log(n.compras[]);
    }
}

//Parte 2
for (let n of usuarios) {
    if(n.ativo === true){
        console.log(n.nome);
    }
}

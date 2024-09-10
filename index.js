//console.log("Hello World!");

// Arrays e Objetos
let livros = [
  "Pai rico Pai pobre",
  "Mais esperto que o diabo",
  "Quem pensa enriquece",
  "Mente Milionária",
  "Fluent Forever",
];

//console.log(livros[0]);

let checkOut = {
  livrosParaLer: 3,
  livrosLidos: 2,
};

//console.log(checkOut.livrosLidos);

// arrow function

const soma = (a, b) => {
  return a + b;
};

//console.log(soma(2, 2));

// named function
let meusLivros = []; // Declaração inicial do array fora da função

function addLivro(livro) {
  meusLivros.push(livro); // Adiciona o livro ao array existente
  return meusLivros;
}

addLivro("JavaScript");
addLivro("React");
addLivro("Node.js");

console.log(meusLivros); // Imprime: ["JavaScript", "React", "Node.js"]

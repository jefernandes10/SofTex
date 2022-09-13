const aluno = {
    nome: "Mario",
    matricula: "12345",
    media: 6.5,
  };
  
  const frutas = ["banana", "laranja", "maçã"];
  
  function listaPropriedades(objeto) {
    const propriedades = [];
    for (const propriedade in objeto) propriedades.push(propriedade);
    return propriedades;
  }
  
  const listaElementos = (array) => {
    const elementos = [];
    for (const elemento of array) elementos.push(elemento);
    return elementos;
  };
  
  console.log(listaPropriedades(aluno));
  console.log(listaElementos(frutas));
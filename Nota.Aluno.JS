function alunoNotas() {
    let nota1 = prompt("Digite a primeira nota?");
    let nota2 = prompt("Digite a segunda nota?");
    let nota3 = prompt("Digite a terceira nota?");
    let media = ((nota1) + (nota2) + (nota3))/3;
    return media >= 7 ? alert("Aluno aprovado!") : alert("Aluno REPROVADO!");
  }
  alunoNotas();
  
  function notaNecessaria() {
    let nota_1 = prompt("Digite a primeira nota?")
    let nota_2 = prompt("Digite a segunda nota?")
    let soma = parseFloat(nota_1) + parseFloat(nota_2)
    let notaMinima = 21 - soma.toFixed(2)
    return soma < 11 ? alert("NÃO É MAIS POSSÍVEL OBTER A APROVAÇÃO") : alert(`NOTA NECESSÁRIA: ${notaMinima.toFixed(2)}`)
  }
  
  notaNecessaria()
function calculadora(operation, a, b) {
  switch (operation) {
    case "soma":
      return a + b;
    case "subtracao":
      return a - b;
    case "multiplicacao":
      return a * b;
    case "divisao":
      if (b === 0) {
        return "Erro: Divisão por zero";
      }
      return a / b;
    default:
      return "Operação inválida";
  }
}

module.exports = calculadora;

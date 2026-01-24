const calculadora = require("./calculadora");

calculadora("soma", 5, 3); // 8
calculadora("subtracao", 10, 4); // 6
calculadora("multiplicacao", 7, 6); // 42
calculadora("divisao", 20, 5); // 4
calculadora("divisao", 10, 0); // 'Erro: Divisão por zero'
calculadora("modulo", 10, 3); // 'Operação inválida'

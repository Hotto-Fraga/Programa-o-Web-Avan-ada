console.log("=== PROGRAMA VAR, LET E CONST ===\n");

// ====================================
// 1. HOISTING COM VAR E LET
// ====================================
console.log("1. HOISTING COM VAR E LET");
console.log("----------------------------");

function testeHoisting() {
  console.log("Tentando acessar variavelVar antes da declaração:", variavelVar); // undefined (hoisting)

  try {
    console.log(
      "Tentando acessar variavelLet antes da declaração:",
      variavelLet,
    );
  } catch (error) {
    console.log("Erro ao acessar variavelLet:", error.message); // ReferenceError
  }

  var variavelVar = "Valor com VAR";
  let variavelLet = "Valor com LET";

  console.log("Após inicialização - variavelVar:", variavelVar);
  console.log("Após inicialização - variavelLet:", variavelLet);
}

testeHoisting();

// ====================================
// 2. IMUTABILIDADE DE CONST
// ====================================
console.log("\n2. IMUTABILIDADE DE CONST");
console.log("----------------------------");

// 2.1 - Tentando alterar valor numérico
const numeroConstante = 42;
console.log("Valor inicial da constante numérica:", numeroConstante);

try {
  numeroConstante = 100; // Isto causará erro
} catch (error) {
  console.log("Erro ao tentar alterar const numérica:", error.message);
}

// 2.2 - Constante com array (pode adicionar elementos)
const arrayConstante = [1, 2, 3];
console.log("\nArray constante inicial:", arrayConstante);

arrayConstante.push(4); // Isto funciona!
arrayConstante.push(5);
console.log("Array após push (adicionar elementos):", arrayConstante);

try {
  arrayConstante = [10, 20, 30]; // Isto causará erro
} catch (error) {
  console.log("Erro ao tentar substituir o array completo:", error.message);
}

console.log("Array final:", arrayConstante);

// ====================================
// 3. DIFERENÇA DE ÂMBITO ENTRE VAR E LET
// ====================================
console.log("\n3. DIFERENÇA DE ÂMBITO ENTRE VAR E LET");
console.log("----------------------------------------");

// 3.1 - Loop com VAR
console.log("Loop com VAR:");
for (var i = 0; i < 3; i++) {
  console.log("  Dentro do loop - i (var):", i);
}
console.log("Fora do loop - i (var) ainda acessível:", i); // i = 3

// 3.2 - Loop com LET
console.log("\nLoop com LET:");
for (let j = 0; j < 3; j++) {
  console.log("  Dentro do loop - j (let):", j);
}

try {
  console.log("Fora do loop - j (let):", j);
} catch (error) {
  console.log("Fora do loop - j (let) NÃO acessível:", error.message);
}

// ====================================
// RESUMO DAS DIFERENÇAS
// ====================================
console.log("\n=== RESUMO DAS DIFERENÇAS ===");
console.log("VAR:");
console.log("  - Tem hoisting (pode ser acessada antes, retorna undefined)");
console.log("  - Escopo de função");
console.log("  - Pode ser redeclarada");

console.log("\nLET:");
console.log("  - Não tem hoisting utilizável (Temporal Dead Zone)");
console.log("  - Escopo de bloco");
console.log("  - Não pode ser redeclarada no mesmo escopo");

console.log("\nCONST:");
console.log("  - Não tem hoisting utilizável (Temporal Dead Zone)");
console.log("  - Escopo de bloco");
console.log("  - Não pode ser reatribuída");
console.log("  - Objetos/Arrays podem ter propriedades/elementos modificados");

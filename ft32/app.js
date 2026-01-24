// ========================================
// 1. USO DO SPREAD EM ARRAYS
// ========================================

function unirListas(array1, array2) {
  return [...array1, ...array2];
}

// ========================================
// 2. USO DO SPREAD EM OBJETOS
// ========================================

function atualizarPessoa(pessoaOriginal, novasPropriedades) {
  return { ...pessoaOriginal, ...novasPropriedades };
}

// ========================================
// 3. REST PARAMETERS
// ========================================

function mediaNotas(...notas) {
  if (notas.length === 0) {
    return 0;
  }

  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  return soma / notas.length;
}

// ========================================
// 4. COMBINAÇÃO DOS CONCEITOS
// ========================================

function exibirResumo(titulo, ...informacoes) {
  console.log("=== " + titulo + " ===");
  for (let i = 0; i < informacoes.length; i++) {
    console.log("- " + informacoes[i]);
  }
  console.log("");
}

// ========================================
// DEMONSTRAÇÕES E TESTES
// ========================================

console.log("=== SPREAD OPERATOR E REST PARAMETERS ===\n");

// Teste 1: Unir Listas
console.log("1. SPREAD EM ARRAYS - unirListas()");
console.log("-".repeat(50));
const frutas = ["Maçã", "Banana", "Laranja"];
const vegetais = ["Cenoura", "Brócolis", "Alface"];
const alimentos = unirListas(frutas, vegetais);

console.log("Lista 1 (frutas):", frutas);
console.log("Lista 2 (vegetais):", vegetais);
console.log("Lista unida:", alimentos);
console.log("");

// Teste 2: Atualizar Pessoa
console.log("2. SPREAD EM OBJETOS - atualizarPessoa()");
console.log("-".repeat(50));
const pessoa = {
  nome: "João Silva",
  idade: 30,
  cidade: "Lisboa",
};

const atualizacoes = {
  idade: 31,
  profissao: "Desenvolvedor",
  email: "joao@email.com",
};

const pessoaAtualizada = atualizarPessoa(pessoa, atualizacoes);

console.log("Pessoa original:", pessoa);
console.log("Novas propriedades:", atualizacoes);
console.log("Pessoa atualizada:", pessoaAtualizada);
console.log("");

// Teste 3: Média de Notas (Rest Parameters)
console.log("3. REST PARAMETERS - mediaNotas()");
console.log("-".repeat(50));
const media1 = mediaNotas(8, 7, 9);
const media2 = mediaNotas(6, 7, 8, 9, 10);
const media3 = mediaNotas(5, 8, 7, 9, 6, 8, 7);

console.log("Média de (8, 7, 9):", media1.toFixed(2));
console.log("Média de (6, 7, 8, 9, 10):", media2.toFixed(2));
console.log("Média de (5, 8, 7, 9, 6, 8, 7):", media3.toFixed(2));
console.log("");

// Teste 4: Exibir Resumo (Combinação)
console.log("4. COMBINAÇÃO - exibirResumo()");
console.log("-".repeat(50));
exibirResumo(
  "Informações do Produto",
  "Nome: Laptop Dell",
  "Preço: €899",
  "Garantia: 2 anos",
  "Cor: Preto",
  "Em Stock: Sim",
);

exibirResumo(
  "Dados do Utilizador",
  "Nome: Maria Santos",
  "Email: maria@email.com",
  "Telefone: 912345678",
);

// ========================================
// EXEMPLOS ADICIONAIS
// ========================================

console.log("EXEMPLOS ADICIONAIS");
console.log("=".repeat(50));

// Spread para copiar arrays
const original = [1, 2, 3];
const copia = [...original];
console.log("Array original:", original);
console.log("Cópia com spread:", copia);
console.log("");

// Spread para adicionar elementos
const numeros = [1, 2, 3];
const maisNumeros = [0, ...numeros, 4, 5];
console.log("Array expandido:", maisNumeros);
console.log("");

// Spread para copiar objetos
const config = { tema: "escuro", idioma: "pt" };
const novaConfig = { ...config, notificacoes: true };
console.log("Configuração original:", config);
console.log("Nova configuração:", novaConfig);
console.log("");

// Rest parameters com outros parâmetros
function saudacao(prefixo, ...nomes) {
  console.log(prefixo);
  for (let i = 0; i < nomes.length; i++) {
    console.log("  - " + nomes[i]);
  }
}

console.log("Saudação com rest parameters:");
saudacao("Olá para:", "Ana", "Bruno", "Carlos", "Diana");

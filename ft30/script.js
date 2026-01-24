// 1. Adicionar Produto
function adicionarProduto(nome, preco, stock) {
  return {
    nome: nome,
    preco: preco,
    stock: stock,
  };
}

// 2. Calcular Stock Total
function calcularStockTotal(produtos) {
  let total = 0;
  for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].stock;
  }
  return total;
}

// 3. Procurar Produto por Nome
function procurarProdutoPorNome(produtos, nomeProcurado) {
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].nome === nomeProcurado) {
      return produtos[i];
    }
  }
  return null; // Retorna null se não encontrar
}

// 4. Calcular Desconto
function calcularDesconto(preco, percentualDesconto) {
  const desconto = preco * (percentualDesconto / 100);
  const novoPreco = preco - desconto;
  return novoPreco;
}

// ========================================
// DEMONSTRAÇÃO DAS FUNÇÕES
// ========================================

console.log("=== GESTOR DE PRODUTOS ===\n");

// Criar alguns produtos
const produto1 = adicionarProduto("Laptop", 1200, 15);
const produto2 = adicionarProduto("Mouse", 25, 50);
const produto3 = adicionarProduto("Teclado", 75, 30);
const produto4 = adicionarProduto("Monitor", 350, 20);

console.log("1. PRODUTOS ADICIONADOS:");
console.log(produto1);
console.log(produto2);
console.log(produto3);
console.log(produto4);

// Array com todos os produtos
const catalogoProdutos = [produto1, produto2, produto3, produto4];

// Calcular stock total
const stockTotal = calcularStockTotal(catalogoProdutos);
console.log("\n2. STOCK TOTAL DE TODOS OS PRODUTOS:", stockTotal);

// Procurar produto por nome
const produtoEncontrado = procurarProdutoPorNome(catalogoProdutos, "Teclado");
console.log("\n3. PRODUTO ENCONTRADO (Teclado):");
console.log(produtoEncontrado);

const produtoNaoEncontrado = procurarProdutoPorNome(catalogoProdutos, "Webcam");
console.log("\n3. PRODUTO NÃO ENCONTRADO (Webcam):");
console.log(produtoNaoEncontrado);

// Calcular desconto
const precoOriginal = produto1.preco;
const precoComDesconto10 = calcularDesconto(precoOriginal, 10);
const precoComDesconto25 = calcularDesconto(precoOriginal, 25);

console.log("\n4. CÁLCULO DE DESCONTOS (Laptop - €" + precoOriginal + "):");
console.log("Desconto de 10%: €" + precoComDesconto10.toFixed(2));
console.log("Desconto de 25%: €" + precoComDesconto25.toFixed(2));

// Exibir resumo completo
console.log("\n=== RESUMO DO CATÁLOGO ===");
for (let i = 0; i < catalogoProdutos.length; i++) {
  const p = catalogoProdutos[i];
  console.log(
    i +
      1 +
      ". " +
      p.nome +
      " - €" +
      p.preco +
      " - Stock: " +
      p.stock +
      " unidades",
  );
}

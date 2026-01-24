// 1. Calcular Total de Vendas de um Produto Específico
function calcularTotalProduto(nomeProduto, vendas) {
  let total = 0;
  for (let i = 0; i < vendas.length; i++) {
    if (vendas[i].produto === nomeProduto) {
      total += vendas[i].valor * vendas[i].quantidade;
    }
  }
  return total;
}

// 2. Calcular Média de Vendas de Todos os Produtos
function calcularMediaVendas(vendas) {
  let totalGeral = 0;
  for (let i = 0; i < vendas.length; i++) {
    totalGeral += vendas[i].valor * vendas[i].quantidade;
  }
  const media = totalGeral / vendas.length;
  return media;
}

// 3. Encontrar Produto com Maior Venda
function produtoMaiorVenda(vendas) {
  if (vendas.length === 0) {
    return null;
  }

  let maiorVenda = vendas[0].valor * vendas[0].quantidade;
  let produtoMaior = vendas[0].produto;

  for (let i = 1; i < vendas.length; i++) {
    const vendaAtual = vendas[i].valor * vendas[i].quantidade;
    if (vendaAtual > maiorVenda) {
      maiorVenda = vendaAtual;
      produtoMaior = vendas[i].produto;
    }
  }

  return produtoMaior;
}

// ========================================
// DADOS DE TESTE
// ========================================

const vendas = [
  { produto: "Laptop", valor: 1200.0, quantidade: 3 },
  { produto: "Mouse", valor: 25.0, quantidade: 10 },
  { produto: "Teclado", valor: 75.0, quantidade: 5 },
  { produto: "Monitor", valor: 350.0, quantidade: 4 },
  { produto: "Laptop", valor: 1200.0, quantidade: 2 },
  { produto: "Mouse", valor: 25.0, quantidade: 8 },
  { produto: "Webcam", valor: 80.0, quantidade: 6 },
  { produto: "Monitor", valor: 350.0, quantidade: 3 },
];

console.log("=== ANÁLISE DE VENDAS ===\n");

// Exibir todas as vendas
console.log("VENDAS REGISTRADAS:");
for (let i = 0; i < vendas.length; i++) {
  const v = vendas[i];
  const total = v.valor * v.quantidade;
  console.log(
    i +
      1 +
      ". " +
      v.produto +
      " - €" +
      v.valor +
      " x " +
      v.quantidade +
      " = €" +
      total.toFixed(2),
  );
}

console.log("\n" + "=".repeat(50) + "\n");

// 1. Total de vendas por produto
console.log("1. TOTAL DE VENDAS POR PRODUTO:");
const totalLaptop = calcularTotalProduto("Laptop", vendas);
const totalMouse = calcularTotalProduto("Mouse", vendas);
const totalTeclado = calcularTotalProduto("Teclado", vendas);
const totalMonitor = calcularTotalProduto("Monitor", vendas);
const totalWebcam = calcularTotalProduto("Webcam", vendas);

console.log("Laptop: €" + totalLaptop.toFixed(2));
console.log("Mouse: €" + totalMouse.toFixed(2));
console.log("Teclado: €" + totalTeclado.toFixed(2));
console.log("Monitor: €" + totalMonitor.toFixed(2));
console.log("Webcam: €" + totalWebcam.toFixed(2));

// 2. Média de vendas
console.log("\n2. MÉDIA DE VENDAS:");
const media = calcularMediaVendas(vendas);
console.log("Média de vendas: €" + media.toFixed(2));

// 3. Produto com maior venda
console.log("\n3. PRODUTO COM MAIOR VENDA:");
const produtoTop = produtoMaiorVenda(vendas);
console.log("Produto com maior venda individual: " + produtoTop);

console.log("\n" + "=".repeat(50));

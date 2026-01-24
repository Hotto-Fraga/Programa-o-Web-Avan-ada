// Carrinho inicial com dois produtos
let cart = [
  { nome: "Maçã", preco: 2.5, quantidade: 3 },
  { nome: "Banana", preco: 1.8, quantidade: 2 },
];

// Função para adicionar produto ao carrinho
function adicionarProduto(nome, preco, quantidade) {
  // Usar spread operator para criar novo array sem modificar o original
  const produtoExistente = cart.find((produto) => produto.nome === nome);

  if (produtoExistente) {
    // Se o produto já existe, atualizar a quantidade
    cart = cart.map((produto) =>
      produto.nome === nome
        ? { ...produto, quantidade: produto.quantidade + quantidade }
        : { ...produto },
    );
  } else {
    // Adicionar novo produto
    cart = [...cart, { nome, preco, quantidade }];
  }

  atualizarCarrinho();
}

// Função para atualizar a quantidade de um produto
function atualizarQuantidade(nome, novaQuantidade) {
  cart = cart.map((produto) =>
    produto.nome === nome
      ? { ...produto, quantidade: novaQuantidade }
      : { ...produto },
  );

  atualizarCarrinho();
}

// Função para remover produto do carrinho
function removerProduto(nome) {
  cart = cart.filter((produto) => produto.nome !== nome);
  atualizarCarrinho();
}

// Função para calcular o total do carrinho
function calcularTotal() {
  return cart.reduce(
    (total, produto) => total + produto.preco * produto.quantidade,
    0,
  );
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
  const cartTableBody = document.getElementById("cartTableBody");
  const totalPrice = document.getElementById("totalPrice");

  // Limpar tabela
  cartTableBody.innerHTML = "";

  // Adicionar cada produto à tabela
  cart.forEach((produto) => {
    const row = document.createElement("tr");

    const subtotal = (produto.preco * produto.quantidade).toFixed(2);

    row.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.preco.toFixed(2)}</td>
            <td>
                <input type="number" value="${produto.quantidade}" min="1" 
                       onchange="atualizarQuantidade('${produto.nome}', parseInt(this.value))">
            </td>
            <td>${subtotal}</td>
            <td>
                <button onclick="removerProduto('${produto.nome}')">Remover</button>
            </td>
        `;

    cartTableBody.appendChild(row);
  });

  // Atualizar total
  totalPrice.textContent = calcularTotal().toFixed(2) + " €";
}

// Event listener para o formulário de adicionar produto
document
  .getElementById("addProductForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("productName").value;
    const preco = parseFloat(document.getElementById("productPrice").value);
    const quantidade = parseInt(
      document.getElementById("productQuantity").value,
    );

    adicionarProduto(nome, preco, quantidade);

    // Limpar formulário
    this.reset();
  });

// Inicializar o carrinho ao carregar a página
atualizarCarrinho();

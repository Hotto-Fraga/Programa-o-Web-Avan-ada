// Importar função e constante do módulo mensagens.js
import { formatarMensagem, SAUDACAO } from "./mensagens.js";

// Exibir a constante
console.log("Constante SAUDACAO:", SAUDACAO);

// Utilizar a função para formatar e exibir mensagem
const mensagemFormatada = formatarMensagem(
  "João",
  "Esperamos que tenha um ótimo dia!",
);
console.log(mensagemFormatada);

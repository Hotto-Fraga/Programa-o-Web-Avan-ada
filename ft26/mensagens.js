// Constante com saudação
export const SAUDACAO = "Olá, bem-vindo!";

// Função para formatar mensagem
export function formatarMensagem(nome, mensagem) {
  return `${SAUDACAO} ${nome}! ${mensagem}`;
}

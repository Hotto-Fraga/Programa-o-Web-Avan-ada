// Função para verificar se um número é par ou ímpar
export function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return `${numero} é PAR`;
  } else {
    return `${numero} é ÍMPAR`;
  }
}

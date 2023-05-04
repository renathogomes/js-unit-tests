/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const verifyIsUnderfined = (parametro) => {
  if (parametro === undefined) {
    throw new Error('Adicione um Array');
  }
};

const verifyIsNumber = (parametro) => {
  for (let numero of parametro) {
    if (typeof numero !== 'number') {
      throw new Error('Os elemntos do Array precisam ser numéricos');
    }
  }
};

const verifyIsAlone = (parametro) => {
  if (parametro[0] === undefined) {
    throw new Error('O Array não pode ser vazio');
  }
};

const average = (parametro) => {
  try {
    verifyIsUnderfined(parametro);
    verifyIsNumber(parametro);
    verifyIsAlone(parametro);
    let soma = 0;
    let mediaArray = [];
    let media;
    for (let index = 0; index < parametro.length; index += 1) {
      soma += parametro[index];
      mediaArray.push(parametro[index]);
      media = soma / mediaArray.length;
    }
    return Math.round(media);
  } catch (erro) {
    return undefined;
  }
};

module.exports = average;

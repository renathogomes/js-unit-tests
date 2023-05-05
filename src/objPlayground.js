/*
  Implemente a função calculator que recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
    - sum;
    - mult;
    - div;
    - sub.
  Para cada chave atribua como valor a operação correspondente à sua chave:
    - sum: retorna o resultado da soma dos dois números;
    - mult: retorna o resultado da multiplicação dos dois números;
    - div: retorna o resultado da divisão dos dois números;
    - sub: retorna o resultado da subtração dos dois números.

  Os resultados das divisões devem sempre ser arredondados para baixo.

  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  calculator(1, 2); // { sum: 3, mult: 2, div: 0, sub: -1 }

  Depois de ter implementado a função calculator, desenvolva uma função que converta objetos em arrays, de chaves, valores ou ambos.
  A sua função deve receber dois parâmetros:

    * o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
    * o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

  Comportamento:
  arrayGenerator('keys', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ 3, 2, 0, -1 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 0 ], [ 'sub', -1 ] ]
*/

const calculator = (number1, number2) => ({
  sum: Math.round(number1 + number2),
  mult: Math.round(number1 * number2),
  div: Math.round(number1 / number2),
  sub: Math.round(number1 - number2),
});

const verificaTypeKeys = (type) => {
  const resultado = [];
  if (type === 'keys') {
    for (let obj of Object.keys(object)) {
      resultado.push(obj);
    }
    return resultado;
  }
}

const verificaTypeValues = (type) => {
  const resultado = [];
  if (type === 'values') {
    for (let obj of Object.values(object)) {
      resultado.push(obj);
    }
    return resultado;
  }
}

const verificaTypeEntries = () => {
  const resultado = [];
  if (type === 'entries') {
    for (let obj of Object.entries(object)) {
      resultado.push(obj);
    }
    return resultado;
  }
};

const arrayGenerator = (type, object) => {

};

console.log(arrayGenerator('keys', calculator(1, 2)));

module.exports = { calculator, arrayGenerator };

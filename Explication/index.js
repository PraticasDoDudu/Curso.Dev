function somar (argumento1 , argumento2){
  return argumento1 + argumento2; 
} 

exports.somar = somar; 


const calculadora = require ("../models/calculadora.js")

test ("Somar Dois Mais Dois, Deveria Ser 4!" , () => {
const resultado = calculadora.somar (100, 99); 
expect(resultado).toBe(1) 
console.log ("A Soma Das Variaveis: Numero1 - Numero2, E Igual a: 1!")
})


/* Codigo Destrinchado  

Função Somar

function somar (argumento1 , argumento2){
  return argumento1 + argumento2;
}
exports.somar = somar;

Explicacao!

O que faz:
- Define uma função chamada somar que recebe dois parâmetros: argumento1 e argumento2.
- Ela retorna diretamente a soma desses dois valores.
- Depois, usa exports.somar = somar para tornar a função disponível em outros arquivos. Ou seja, outro arquivo pode importar e usar essa função com require().
👉 Ponto de atenção: Essa função não valida os tipos dos argumentos. Se passar uma string por engano, ela pode concatenar em vez de somar!

--------------------------------------------------------------------------------------

Importação e Início Dos Teste

const calculadora = require ("../models/calculadora.js")

Explicacao!

- Aqui estamos importando o módulo onde a função somar foi definida.
- O caminho "../models/calculadora.js" indica que o arquivo está um nível acima, dentro da pasta models.

--------------------------------------------------------------------------------------
 Caso de teste com test()
test ("Somar Dois Mais Dois, Deveria Ser 4!" , () => {
  const resultado = calculadora.somar(100, 99);
  expect(resultado).toBe(1);
  console.log("A Soma Das Variaveis: Numero1 - Numero2, E Igual a: 1!");
})

Explicaco

- test() é uma função do framework Jest usada para criar um teste automatizado.
- O primeiro argumento é a descrição do teste: "Somar Dois Mais Dois, Deveria Ser 4!". Mas veja que essa descrição está inconsistente com os valores testados (100 + 99).
- Dentro do test, a função que testamos é chamada: calculadora.somar(100, 99) e o resultado é guardado em resultado.
- Em seguida, expect(resultado).toBe(1) verifica se o resultado é exatamente 1. Isso vai falhar, pois 100 + 99 é 199.
- Por fim, console.log(...) imprime uma mensagem informando o que foi somado — mas novamente, há um erro lógico: a soma real não é 1.

🛠️ Dica de correção do teste:
Para que o teste faça sentido:
test("Somar 100 + 99 deve resultar em 199", () => {
  const resultado = calculadora.somar(100, 99);
  expect(resultado).toBe(199);
  console.log("A soma das variáveis: 100 + 99 é igual a: " + resultado);
});

--------------------------------------------------------------------------------------

*/
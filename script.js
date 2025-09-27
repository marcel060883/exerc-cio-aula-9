// 1 Verificar maioridade:
// 1. Peça ao usuário uma idade.
// 2. Use um `if-else` para verificar se ele é maior ou menor de idade.

// const idade = Number(prompt("Por favor, insira sua idade:"));

// if (idade >= 18) {
//     console.log("Você é maior de idade.");
//     alert
// } else {
//     console.log("Você é menor de idade.");
//     alert("Você é menor de idade.");
// }   

// 2. **Verificar se um número é positi vo ou negativo:**
//     - Peça ao usuário para inserir um número.
//     - Use um `if-else` para verificar se o número é positivo, negativo.
//     - OBS: *Por hora* considere o 0 como sendo um número negativo.

// const numero = prompt("Por favor, insira um número:");

// if (numero > 0) {
//     console.log("O número é positivo.");
//     alert("O número é positivo.");
// }
// else {
//     console.log("O número é negativo.");
//     alert("O número é negativo.");
// }

// 3. **Aprovação em uma prova:**
//     - O usuário insere a nota de um aluno (0 a 100).
//     - Se a nota for maior ou igual a 60, exibir "Aprovado", senão "Reprovado".

// const nota = Number(prompt("Por favor, insira a nota do aluno (0 a 100):"));

// if (nota >= 60) {
//     console.log("Aprovado");
//     alert("Aprovado");
// }
// else {
//     console.log("Reprovado");
//     alert("Reprovado");
// }

// 4. **Verificar se um número é positivo, negativo ou zero:**
//     - Peça ao usuário para inserir um número.
//     - Use um `if-else` para verificar se o número é positivo, negativo ou zero.

// const numero = number(prompt("Por favor, insira um número:"));

// if (numero > 0) {
//     console.log("O número é positivo.");
//     alert("O número é positivo.");
// }
// else if (numero < 0) {
//     console.log("O número é negativo.");
//     alert("O número é negativo.");
// }
// else {
//     console.log("O número é zero.");
//     alert("O número é zero.");
// }

// 5. **Classificação de idade:**
//     - Peça ao usuário para inserir sua idade.
//     - Exiba se ele é "Criança" (0-12), "Adolescente" (13-17) ou "Adulto" (18+).

// const idade = number(prompt("Por favor, insira sua idade:"));

// if (idade >= 0 && idade <= 12) {    
//     console.log("Criança");
//     alert("Criança");
// }
// else if (idade >= 13 && idade <= 17) {
//     console.log("Adolescente");
//     alert("Adolescente");
// }
// else if (idade >= 18) {
//     console.log("Adulto");
//     alert("Adulto");
// }

// 6. **Verificar se um número é par ou ímpar:**
//     - Peça ao usuário para inserir um número.
//     - Use o operador `%` para verificar se o número é divisível por 2.

// const numero = Number(prompt("Por favor, insira um número:"));

// if (numero % 2 === 0) {
//     console.log("O número é par.");
//     alert("O número é par.");
// }
// else {
//     console.log("O número é ímpar.");
//     alert("O número é ímpar.");
// }

// ### **Nível Intermediário**

// 1. **Calculadora simples:**
//     - Peça dois números e uma operação (`+`, `-`, `*`, `/`).
//     - Use um `if-else` para calcular o resultado e exibi-lo.

// const num1 = Number(prompt("Por favor, insira o primeiro número:"));
// const num2 = Number(prompt("Por favor, insira o segundo número:"));
// const operacao = prompt("Por favor, insira a operação (+, -, *, /):");  
// let resultado;

// if (Number.isNaN(num1) || Number.isNaN(num2)) {
//     alert("Entrada inválida. Por favor, insira números válidos.");
//     console.log("Entrada inválida. Por favor, insira números válidos.");    
// }
// else {
//     if (operacao === "+") {
//         resultado = num1 + num2;
//         console.log(`O resultado de ${num1} + ${num2} é ${resultado}.`);
//         alert(`O resultado de ${num1} + ${num2} é ${resultado}.`);
//     }
//     else if (operacao === "-") {
//         resultado = num1 - num2;
//         console.log(`O resultado de ${num1} - ${num2} é ${resultado}.`);
//         alert(`O resultado de ${num1} - ${num2} é ${resultado}.`);
//     }   
//     else if (operacao === "*") {
//         resultado = num1 * num2;
//         console.log(`O resultado de ${num1} * ${num2} é ${resultado}.`);
//         alert(`O resultado de ${num1} * ${num2} é ${resultado}.`);
//     }
//     else if (operacao === "/") {            
//         if (num2 === 0) {
//             console.log("Erro: Divisão por zero não é permitida.");
//             alert("Erro: Divisão por zero não é permitida.");
//         }
//         else {
//             resultado = num1 / num2;
//             console.log(`O resultado de ${num1} / ${num2} é ${resultado}.`);
//             alert(`O resultado de ${num1} / ${num2} é ${resultado}.`);
//         }   
//     }
//     else {
//         console.log("Operação inválida. Por favor, insira uma operação válida (+, -, *, /).");
//         alert("Operação inválida. Por favor, insira uma operação válida (+, -, *, /).");
//     }   
// }

// 2. **Maior entre três números:**
//     - O usuário insere três números.
//     - Use `if-else` para determinar e exibir o maior.

// const num1 = Number(prompt("Por favor, insira o primeiro número:"));
// const num2 = Number(prompt("Por favor, insira o segundo número:"));
// const num3 = Number(prompt("Por favor, insira o terceiro número:"));
// let maior;  
// if (Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3)) {
//     alert("Entrada inválida. Por favor, insira números válidos.");
//     console.log("Entrada inválida. Por favor, insira números válidos.");    
// }
// else {
//     if (num1 >= num2 && num1 >= num3) {
//         maior = num1;   
//         console.log(`O maior número é ${maior}.`);
//         alert(`O maior número é ${maior}.`);
//     }
//     else if (num2 >= num1 && num2 >= num3) {
//         maior = num2;   
//         console.log(`O maior número é ${maior}.`);
//         alert(`O maior número é ${maior}.`);
//     }
//     else {
//         maior = num3;   
//         console.log(`O maior número é ${maior}.`);
//         alert(`O maior número é ${maior}.`);
//     }
// }

// 3. **Desconto em compras:**
//     - Se o valor da compra for maior que R$ 100, aplique 10% de desconto.
//     - Caso contrário, exiba o valor normal.

// const valorCompra = Number(prompt("Por favor, insira o valor da compra: R$"));
// let valorFinal;
// if (Number.isNaN(valorCompra)) {
//     alert("Entrada inválida. Por favor, insira um valor válido.");
//     console.log("Entrada inválida. Por favor, insira um valor válido.");    
// }
// else {
//     if (valorCompra > 100) {
//         valorFinal = valorCompra * 0.9;   
//         console.log(`O valor final com desconto é R$ ${valorFinal.toFixed(2)}.`);
//         alert(`O valor final com desconto é R$ ${valorFinal.toFixed(2)}.`);
//     }
//     else {
//         valorFinal = valorCompra;   
//         console.log(`O valor final é R$ ${valorFinal.toFixed(2)}.`);
//         alert(`O valor final é R$ ${valorFinal.toFixed(2)}.`);
//     }
// }

// 4. **Sistema de login simples:**
//     - O usuário insere um nome de usuário e senha.
//     - Se `usuario == "admin"` e `senha == "1234"`, exibir "Login bem-sucedido", caso contrário "Acesso negado".

// const usuario = prompt("Por favor, insira o nome de usuário:");
// const senha = prompt("Por favor, insira a senha:");
// if (usuario === "admin" && senha === "1234") {
//     console.log("Login bem-sucedido.");
//     alert("Login bem-sucedido.");
// }
// else {
//     console.log("Acesso negado.");
//     alert("Acesso negado.");
// }   

// ### **Nível Avançado**

// 1. **Classificação de triângulos:**
//     - O usuário insere três lados.
//     - Verifique se forma um triângulo e classifique como equilátero, isósceles ou escaleno.

// const lado1 = Number(prompt("Por favor, insira o valor do primeiro lado do triângulo:"));
// const lado2 = Number(prompt("Por favor, insira o valor do segundo lado do triângulo:"));
// const lado3 = Number(prompt("Por favor, insira o valor do terceiro lado do triângulo:"));
// let tipoTriangulo;  
// if (Number.isNaN(lado1) || Number.isNaN(lado2) || Number.isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
//     alert("Entrada inválida. Por favor, insira valores válidos para os lados do triângulo.");
//     console.log("Entrada inválida. Por favor, insira valores válidos para os lados do triângulo.");    
// }
// else {
//     if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) { // Verifica se forma um triângulo
//         if (lado1 === lado2 && lado2 === lado3) {
//             tipoTriangulo = "Equilátero";   
//             console.log(`O triângulo é ${tipoTriangulo}.`);
//             alert(`O triângulo é ${tipoTriangulo}.`);
//         }
//         else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
//             tipoTriangulo = "Isósceles";   
//             console.log(`O triângulo é ${tipoTriangulo}.`);
//             alert(`O triângulo é ${tipoTriangulo}.`);
//         }   
//         else {
//             tipoTriangulo = "Escaleno";   
//             console.log(`O triângulo é ${tipoTriangulo}.`);
//             alert(`O triângulo é ${tipoTriangulo}.`);
//         }
//     }
//     else {
//         console.log("Os valores inseridos não formam um triângulo.");
//         alert("Os valores inseridos não formam um triângulo.");
//     }   
// }

// 2. **Conversão de notas para conceitos:**
//     - O usuário insere uma nota (0-100).
//     - Converta para conceitos:
//     - `A` (90-100), `B` (80-89), `C` (70-79), `D` (60-69), `F` (<60).

// const nota = Number(prompt("Por favor, insira a nota (0-100):"));
// let conceito;   
// if (Number.isNaN(nota) || nota < 0 || nota > 100) {
//     alert("Entrada inválida. Por favor, insira uma nota válida entre 0 e 100.");
//     console.log("Entrada inválida. Por favor, insira uma nota válida entre 0 e 100.");    
// }
// else {
//     if (nota >= 90) {
//         conceito = "A";
//         console.log(`O conceito é ${conceito}.`);
//         alert(`O conceito é ${conceito}.`);
//     }
//     else if (nota >= 80) {
//         conceito = "B";
//         console.log(`O conceito é ${conceito}.`);
//         alert(`O conceito é ${conceito}.`);
//     }
//     else if (nota >= 70) {
//         conceito = "C";
//         console.log(`O conceito é ${conceito}.`);
//         alert(`O conceito é ${conceito}.`);
//     }
//     else if (nota >= 60) {
//         conceito = "D";
//         console.log(`O conceito é ${conceito}.`);
//         alert(`O conceito é ${conceito}.`);
//     }
//     else {
//         conceito = "F";
//         console.log(`O conceito é ${conceito}.`);
//         alert(`O conceito é ${conceito}.`);
//     }
// }

// 3. **Cálculo de IMC:**
//     - Peça peso e altura.
//     - Calcule o IMC e classifique como abaixo do peso, normal, sobrepeso ou obesidade.

// const peso = Number(prompt("Por favor, insira seu peso em kg:").replace(",", "."));
// const altura = Number(prompt("Por favor, insira sua altura em metros:").replace(",", "."));
// let imc;
// let classificacao;
// if (Number.isNaN(peso) || Number.isNaN(altura) || peso <= 0 || altura <= 0) {
//     alert("Entrada inválida. Por favor, insira valores válidos para peso e altura.");
//     console.log("Entrada inválida. Por favor, insira valores válidos para peso e altura.");    
// }
// else {
//     imc = peso / (altura * altura);
//     if (imc < 18.5) {
//         classificacao = "Abaixo do peso";
//     }
//     else if (imc < 24.9) {
//         classificacao = "Normal";
//     }
//     else if (imc < 29.9) {
//         classificacao = "Sobrepeso";
//     }
//     else {
//         classificacao = "Obesidade";
//     }
//     console.log(`Seu IMC é ${imc.toFixed(2)} e sua classificação é: ${classificacao}.`);
//     alert(`Seu IMC é ${imc.toFixed(2)} e sua classificação é: ${classificacao}.`);
// }

// 4. **Validação de ano bissexto:**
//     - Peça um ano e verifique se é bissexto.
//     - Um ano é bissexto se for divisível por 4, mas não por 100, exceto se for divisível por 400.

// const ano = Number(prompt("Por favor, insira um ano:"));

// if (Number.isNaN(ano) || !Number.isInteger(ano) || ano <= 0) {
//     alert("Entrada inválida. Por favor, insira um ano válido (número inteiro positivo).");
//     console.log("Entrada inválida. Por favor, insira um ano válido (número inteiro positivo).");    
// }
// else {
//     if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
//         console.log(`${ano} é um ano bissexto.`);
//         alert(`${ano} é um ano bissexto.`);
//     }
//     else {
//         console.log(`${ano} não é um ano bissexto.`);
//         alert(`${ano} não é um ano bissexto.`);
//     }
// }

//lrt nomes até digitar "sair"
//Crie um programa que peça nomes ao usuário repetidamente
//O programa deve para quando o usuário digitarl "sair"

// let nome;
// do {
//     nome = prompt("Por favor, insira um nome (ou digite 'sair' para encerrar):"); 
//     if (nome.toLowerCase() !== "sair") {
//         console.log(`Nome inserido: ${nome}`);
//         alert(`Nome inserido: ${nome}`);
//     }
// } while (nome.toLowerCase() !== "sair");

// console.log("Programa encerrado.");
// alert("Programa encerrado.");

//Estruturas de Repetição
// while

// Inicializamos a variável contador
// let i = 1;

// while (i <= 5) {
//     console.log("Número:", i);
//    i++;
// }

//do...while
// let senha;
// do {
//     senha = prompt("Digite a senha:");
// } while (senha!== "1234");
// console.log("Acesso Liberado!")

//for
// estrutura: (início; condição; incremento)
// for (let i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`);
// }

//for..of
// const frutas = ["Maçã", "Banana", "Laranja"];
// for (const fruta of frutas) {
//     console.log("Fruta:", fruta)
// }

//for...in
// const pessoa = {nome: "Lucas", idade: 35, cidade: "Santo André"};
// for (const chave in pessoa){
//     console.log(`${chave}: ${pessoa[chave]}`)
// }

// //forEach
// const numeros = [1,2,3,4,5,6,7,8,9,10];

// numeros.forEach(function(n) {
//     console.log(`7 x ${n} = ${7 * n}`)
// });

// numeros.forEach(n => console.log(`7 x ${n} = ${7 * n}`));

// //1 Mostrar os números de 1 a 10 com while.

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++
// }

// //2 Mostrar a tabuada do 5 com for.
// for (let i = 1; i <=10; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }

//3 Somar os números de 1 a 100 com for.
// let soma = 0;
// for (let i = 1; i <= 100; i++) {
//     soma += i;  
// }
// console.log(`A soma de 1 a 100: ${soma}`);

//Média de 5 números
//Faça um programa que peça 5 números ao usuário, calcule e mostre a média deles.
// let soma = 0

// for (let i = 1; i <= 5; i++) {
//     const num = Number(prompt(`Digite o ${i} número:`));
//     soma += num
// }

// const media = soma / 5;
// console.log(`A média é ${media}`)

//Ler nomes até digitar "sair"
//Crie um programa que peça nomes ao usuário repetidamente.
//O programa só deve parar quando o usuário digitar `"sair"`.

// let nome;
// do {
//     nome = prompt("Digite um nome (ou 'sair' para encerrar:");
//     if (nome !== "sair") {
//         console.log(`Você digitou: ${nome}`);
//     }

// # Exercícios de Laço de Repetição

// ### **Nível Básico**

// 1. **Contagem de 1 a 10:**
//     - Use um `for` para exibir os números de 1 a 10 no console.
//     - Fluxograma
        
// const num = 0;
// for (let i = 1; i <= 10; i++) {
//     console.log('contagem', (i));
// }
        
// 2. **Tabuada de um número:**
//     - Peça um número ao usuário.
//     - Exiba a tabuada desse número de 1 a 10 usando um `for`.
//     - Fluxograma
        
// const numero = Number(prompt("Por favor, insira um número para ver a tabuada:"));
// if (Number.isNaN(numero)) {
//     alert("Entrada inválida. Por favor, insira um número válido.");
//     console.log("Entrada inválida. Por favor, insira um número válido.");    
// } for (let i = 1; i <= 10; i++) {
//     const resultado = numero * i;
//     console.log(`${numero} x ${i} = ${resultado}`);
// }
        
// 3. **Soma dos primeiros N números naturais:**
//     - Peça um número `N` ao usuário.
//     - Use um `while` ou `for` para somar os números de `1` até `N`.
//     - Exemplo:
//         - Se um usuário inserir o número 4, o código deverá fazer a soma do 1, 2, 3 e 4 totalizando **10**.
            
//             ```
//             1 + 2 + 3 + 4 = 10
//             ```
            
//         - Se um usuário inserir o número 6, o código deverá fazer a soma do 1, 2, 3, 4 , 5 e 6 totalizando **21**.
            
//             ```
//             1 + 2 + 3 + 4 + 5 + 6 = 21
//             ```

// const N = Number(prompt("Por favor, insira um número inteiro positivo N para somar os primeiros N números naturais:"));
// let soma = 0;
// if (Number.isNaN(N) || !Number.isInteger(N) || N <= 0) {
//     alert("Entrada inválida. Por favor, insira um número inteiro positivo válido.");
//     console.log("Entrada inválida. Por favor, insira um número inteiro positivo válido.");    
// }
// else {
//     for (let i = 1; i <= N; i++) {
//         soma += i
//     }
//     console.log(`A soma dos primeiros ${N} números naturais é ${soma}.`);
// }



// ---

// ### **Nível Intermediário**

// 1. **Exibir os números pares de 1 a 50:**
//     - Use um `for` ou `while` para exibir apenas os números pares de `1` a `50`.

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 2. **Jogo de adivinhação:**
//     - Gere um número aleatório de 1 a 100.
//     - Peça ao usuário para adivinhar e use um `while` para continuar até ele acertar.
//     - Informe se o número inserido é maior ou menor que o correto.

// const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// let palpite;    
// do {
//     palpite = Number(prompt("Tente adivinhar o número (entre 1 e 100):"));
//     if (Number.isNaN(palpite) || !Number.isInteger(palpite) || palpite < 1 || palpite > 100) {
//         alert("Entrada inválida. Por favor, insira um número inteiro entre 1 e 100.");
//         console.log("Entrada inválida. Por favor, insira um número inteiro entre 1 e 100.");    
//     }
//     else if (palpite < numeroAleatorio) {
//         console.log("Tente um número maior.");
//         alert("Tente um número maior.");
//     }
//     else if (palpite > numeroAleatorio) {
//         console.log("Tente um número menor.");
//         alert("Tente um número menor.");
//     }
//     else {
//         console.log("Parabéns! Você acertou o número.");
//         alert("Parabéns! Você acertou o número.");
//     }
// } while (palpite !== numeroAleatorio);


// 3. **Contagem regressiva:**
//     - Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um `while`.

// const N = Number(prompt("Por favor, insira um número inteiro positivo para mostrar a contagem regressiva:"));
// if (Number.isNaN(N) || !Number.isInteger(N) || N < 0) {
//     alert("Entrada inválida. Por favor, insira um número inteiro positivo.");
//     console.log("Entrada inválida. Por favor, insira um número inteiro positivo.");
// } else {
//     let regressiva = N;
//     while (regressiva >= 0) {
//         console.log(regressiva);
//         regressiva--;
//     }
// }


// ### **Nível Avançado**

// 1. **Soma dos dígitos de um número:**
//     - Peça ao usuário um número inteiro positivo.
//     - Use um `while` para somar seus dígitos.

const numero = Number(prompt("Digite um número inteiro positivo para somar seus dígitos"));

if (Number.isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
  alert("Entrada inválida. Por favor, insira um número inteiro positivo.");
} else {
  let soma = 0;
  let n = numero;

  while (n > 0) {
    soma += n % 10;     // pega o último dígito
    n = Math.floor(n / 10); // remove o último dígito
  }

  alert(`A soma dos dígitos de ${numero} é ${soma}`);
  console.log(`A soma dos dígitos de ${numero} é ${soma}`);
}





// 2. **Fatorial de um número:**
//     - Peça um número ao usuário.
//     - Use um `for` ou `while` para calcular o fatorial desse número.
//Exemplo de fatorial 5! = 5x4x3x2x1=120

// const N = Number(prompt("Digite um número natural para descobri seu fatorial:"));

// if (Number.isNaN(N) || !Number.isInteger(N) || N <= 0) {
//      alert("Entrada inválida. Por favor, insira um número inteiro positivo válido.");
//     console.log("Entrada inválida. Por favor, insira um número inteiro positivo válido.");    
// }
// else {
//     let fat = 1;
//      let fatorial = 1;
//   for (let i = 2; i <= N; i++) {
//     fatorial *= i;
//   }
//      console.log(`${N}! = ${fatorial}`);
//  }



// 3. **Inverter um número:**
//     - Peça um número ao usuário.
//     - Use um `while` para inverter seus dígitos (exemplo: `123` → `321`).



// 4. **Números perfeitos de 1 a 1000:**
//     - Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.
//     - Exemplo: `6` → `1 + 2 + 3 = 6`.
//     - Use um `for` aninhado para encontrar e exibir esses números até `1000`.

// const n = Number(prompt("Por favor, insira um número inteiro positivo (máximo 1000) para mostrar os números perfeitos que existem em seu intervalo"));

// function isPerfectNumber(num) {
//   if (num <= 1) return false;

//   let sum = 0;
//   const half = num / 2;
//   for (let i = 1; i <= half; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   return sum === num;
// }

// // Exibe todos os números perfeitos de 1 até n
// if (Number.isNaN(n) || !Number.isInteger(n) || n < 1 || n > 1000 ) {
//   alert("Entrada inválida. Por favor, insira um número inteiro positivo.");
//   console.log("Entrada inválida. Por favor, insira um número inteiro positivo.");
// } else {
//   // Loop para encontrar números perfeitos
//   for (let i = 1; i <= n; i++) {
//     if (isPerfectNumber(i)) {
//       console.log(`Número perfeito encontrado: ${i}`);
//     }
//   }
// }


//Math

//console.log(Math.PI)

//console.log(Math.floor(4.9)) arredonda para baixo
//console.log(Math.ceil(4.1)) arredonda para cima
//console.log(Math.round(4.5)) arredonda para metade

//console.log(Math.pow(2, 3)) elevada potencia
//console.log(2 ** 3)
//console.log(Math.sqrt(16))) raiz quadrada

//console.log(Math.min(4, 7, 2, 3)) busca o menor número
//console.log(Math.max(4, 7, 2, 3)) busca o maior número

//Descobrir o maior número entre três valores digitados pelo usuário
//console.log("Maior número", Math.max(n1, n2,n3))
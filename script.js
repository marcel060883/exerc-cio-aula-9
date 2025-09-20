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

// 2. **Verificar se um número é positivo ou negativo:**
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




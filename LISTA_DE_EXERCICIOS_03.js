//1. Fazer um programa que imprima a média aritmética dos números 8, 9 e 7. A média dos números 4, 5 e 6. A soma das duas médias. A média das médias.

let num01 = 7;
let num02 = 8;
let num3 = 9;
let media1 = (num01 + num02 + num3)/3;
document.write(`A média de 7, 8 e 9 é: ${media1} <br>`);
let num4 = 4;
let num5 = 5;
let num6 = 6;
let media2 = (num4 + num5 + num6)/3;
document.write(`A Média de 4, 5 e 6 é: ${media2} <br>`);
let mediaFinal = (media1 + media2);
document.write(`A Média final é de: ${mediaFinal} <br>`);

//2. Crie um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule a quantidade de salários mínimos esse usuário ganha e imprima o resultado.

let v1 = Number(prompt("Digite o valor do primeiro produto:"));
let q1 = Number(prompt("Digite a quantidade do primeiro produto:"));
let v2 = Number(prompt("Digite o valor do segundo produto:"));
let q2 = Number(prompt("Digite a quantidade do segundo produto:"));
let ipi = Number(prompt("Digite o ipi:")); 
let p = Number((v1*q1+v2*q2)*(ipi/100+1));
document.write(`O valor final será de R$${p.toFixed(2)}`);

let salarioMinimo = 1200;
let salarioUsuario = Number(prompt("Digite o seu salário"));
let quantSalario = Math.round(salarioUsuario/salarioMinimo);
document.write(`A quantidade de salário mínimos de: ${salarioUsuario} é de: ${quantSalario} salários mínimos `);

//4. Desenvolva um algoritmo que leia um número inteiro e imprima o seu antecessor e seu sucessor.

let numero = Number(prompt("Digite um numero inteiro"));
let antecessor = numero - 1;
let sucessor = numero + 1;
document.write (`O antecessor do número ${numero} é = ${antecessor} <br>`);
document.write (`O sucessor do número ${numero} é = ${sucessor} <br>`);

//5. Escrever uma programa em que leia dois valores para as variáveis A e B, e efetuar as trocas dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados.

let valorA = Number(prompt("Digite uma variável A"));
let valorB = Number(prompt("Digite uma variável B"));
document.write(`A variável A vale: ${valorA} O valor da variável B vale: ${valorB} <br>`);
let aux = valorA;
valorB = aux;
document.write(`A variável A vale: ${aux} O valor da variável B vale: ${valorB} <br>`);

//6. A Loja Mamão com Açúcar está vendendo seus produtos em 5 (cinco) prestações sem juros. Faça um programa que receba um valor de uma compra e mostre o valor das prestações.

let compra = Number(prompt("Digite o valor da compra:"));
let prestacao = compra/5;
document.write(`O cliente deverá pagar 5 prestações de R$ ${prestacao}`);

//7. Faça um programa que receba o preço de custo de um produto e mostre o valor de venda. Sabe-se que o preço de custo receberá um acréscimo de acordo com um percentual informado pelo usuário.

let custo = Number(prompt("Digite o custo do produto"));
let percentual = Number(prompt("Digite o percentrual para venda:"));
let prercent = (percentual/100);
let venda = custo + prercent;
document.write(`O valor de venda é: ${venda}`);

//8. Escrever um programa que receba dois números e ao final mostre a soma, subtração, multiplicação e a divisão dos números lidos.

let num1=Number(prompt("Digite o primeiro número"));
let num2=Number(prompt("Digite o segundo número"));
let soma=num1+num2;
let subtracao=num1-num2;
let multiplicacao=num1*num2;
let divisao=num1/num2;
document.write(`A soma de ${num1} + ${num1} = ${soma} <br>`);
document.write(`A subtração de ${num1} - ${num1} = ${subtracao} <br>`);
document.write(`A multiplicação de ${num1} x ${num1} = ${multiplicacao} <br>`);
document.write(`A divisão de ${num1} / ${num1} = ${divisao} <br>`);
/*
2. Faça um programa onde eu possa lançar movimentações de estoque dos produtos que estão no json abaixo, dando entrada ou saída da mercadoria no meu depósito, onde cada 
   movimentação deve ter:
    • Um número identificador único.
    • Uma descrição para identificar o tipo da movimentação realizada
E que ao final da movimentação me retorne a qtde final do estoque do produto movimentado.
*/

import { movimentarEstoque } from "./service/movimentarEstoqueService";
import { movimentacoes } from "./service/movimentarEstoqueService";

//Realiza uma movimentação de entrada e saída
const resultado = movimentarEstoque(
    101,
    "saida",
    50,
)

//Exibe no console os dados do produto após a movimentação
console.log(resultado);

//Exibe o histórico das movimentações realizadas
console.log(movimentacoes);
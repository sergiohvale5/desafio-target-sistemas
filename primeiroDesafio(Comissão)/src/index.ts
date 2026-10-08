/*
1. Considerando que o json abaixo tem registros de vendas de um time comercial, faça um programa que leia os dados e calcule a comissão de cada vendedor, seguindo a seguinte regra para 
    cada venda:

    • Vendas abaixo de R$100,00 não gera comissão
    • Vendas abaixo de R$500,00 gera 1% de comissão
    • A partir de R$500,00 gera 5% de comissão
*/

import { vendas } from "./data/vendas";

//Filtra vendas abaixo de R$ 100, que não geram comissão
import { naoGeraComissao } from "./service/naoGeraComissaoService";

console.log(naoGeraComissao(vendas));

//Calcula 1% de comissão para vendas abaixo de R$ 500,00
import { comissaoUmPorcento } from "./service/comissaoUmPorcentoService";

console.log(comissaoUmPorcento(vendas));

//Calcula 5% de comissão para vendas a partir de R$ 500,00
import { comissaoCincoPorcento } from "./service/comissaoCincoPorcentoService";

console.log(comissaoCincoPorcento(vendas));
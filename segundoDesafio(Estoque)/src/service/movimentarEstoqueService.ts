import type { Movimentacoes } from "../types/typeMovimentacoes";
import type { Estoque } from "../types/typesEstoque";
import { estoque } from "../data/estoque";

//Aarmazenar as movimentações
export const movimentacoes: Movimentacoes[] = [];

//Realiza uma movimentação de entrada ou saída de um produto no estoque
export const movimentarEstoque = (codigoProduto: number, tipoMovimentacao: string, quantidade: number): Estoque => {
    const produto = estoque.find((p) => {
        return codigoProduto === p.codigoProduto
    });

    if(!produto){
        throw new Error("Produto não contrado");
    }

    if(quantidade === 0){
        throw new Error("A quantidade deve ser maior que zero");
    }

    if(tipoMovimentacao !== "entrada" && tipoMovimentacao !== "saida"){
        throw new Error("Tipo de movimentação inválido");
    }

    if(tipoMovimentacao === "entrada"){
        produto.estoque += quantidade;
    }

    if(tipoMovimentacao === "saida"){
        if(quantidade > produto.estoque){
            throw new Error("Estoque insuficiente");
        }

        produto.estoque -= quantidade;
    }

    const novaMovimentacao = {
        id: movimentacoes.length + 1,
        tipoMovimentacao
    }

    movimentacoes.push(novaMovimentacao);

    return {
        codigoProduto: produto.codigoProduto,
        descricaoProduto: produto.descricaoProduto,
        estoque: produto.estoque
    }
}   
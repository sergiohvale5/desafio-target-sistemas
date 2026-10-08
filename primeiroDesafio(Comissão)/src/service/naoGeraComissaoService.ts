import { Vendas } from "../types/typesVendas"

export const naoGeraComissao = (vendas: Vendas[]): string => { 
    const vendasAbaixoSem = vendas.filter((venda) => { 
        return venda.valor < 100; 
    }); 
    
    const vendedores = vendasAbaixoSem.map((venda) => { 
        return `
            Vendedor: ${venda.vendedor} 
            Venda: R$ ${venda.valor}
        `; 
    }); 
    
    return ` 
        Vendedores que não receberão comissão por terem vendas abaixo de R$ 100,00: 
        ${vendedores.join("\n")}
    `; 
};
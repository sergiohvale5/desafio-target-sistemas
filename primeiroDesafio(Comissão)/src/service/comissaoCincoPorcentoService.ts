import { Vendas } from "../types/typesVendas";

export const comissaoCincoPorcento = (vendas: Vendas[]): string => {
    const vendasApartirQuinhentos = vendas.filter((vendas) => {
        return vendas.valor >= 500;
    });

    const vendedoresComissionados = vendas.map((vendedores) => {
        return `
            Vendedores: ${vendedores.vendedor}
            Valor: ${vendedores.valor}
            Comissão: ${((vendedores.valor * 5) / 100).toFixed(2)}
        `
    });

    return `
        Vendedores que receberão cinco porcento comissão por terem vendas a partir de R$ 500,00:

        ${vendedoresComissionados.join("")}
    `
}
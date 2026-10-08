import { Vendas } from "../types/typesVendas"

export const comissaoUmPorcento = (vendas: Vendas[]): string => {
    const vendasAbaixoQuinhentos = vendas.filter((vendas) => {
        return vendas.valor < 500;
    });

    const vendedoresComissionados = vendasAbaixoQuinhentos.map((vendedores) => {
        return `
            Vendedores: ${vendedores.vendedor}
            Valor: ${vendedores.valor}
            Comissão: ${((vendedores.valor * 1) / 100).toFixed(2)}
        `
    })

    return `
        Vendedores que receberão um porcento de comissão por terem vendas abaixo de R$ 500,00:
        ${vendedoresComissionados.join("")}
    `
}
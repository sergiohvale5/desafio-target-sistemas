import { Dividas } from "../types/typesDividas";

//Calcula juros das dívidas
export const calculoJuros = (dividas: Dividas[]) => {
    const resultado = dividas.map((divida) => {
        const hoje = new Date();
        const vencimento = new Date(divida.vencimento);

        const diferenca =
            hoje.getTime() - vencimento.getTime();

            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24)
        );

        const taxaJuros = 25 / 100;

        const juros = divida.valor * taxaJuros * dias;

        const valorTotal = divida.valor + juros;

        return {
            nome: divida.nome,
            valorOriginal: divida.valor,
            diasAtraso: dias,
            juros: juros,
            valorTotal: valorTotal
        };
    });

    return resultado;
};
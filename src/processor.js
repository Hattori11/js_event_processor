import {
    normalizaSucesso,
    normalizaTimestamp,
    registraUsuario,
    atualizaEventos
} from './utils.js';

function normalizaDados(dados) {
    const dadosNormalizados = []

    for (let i = 0; i < dados.length; i++) {
        dadosNormalizados[i] = {
            tipo: dados[i].tipo,
            usuario: dados[i].usuario,
            sucesso: normalizaSucesso(dados[i].sucesso),
            timestamp: normalizaTimestamp(dados[i].timestamp)
        }
    }

    return dadosNormalizados;
}

function geraRelatorio(dadosNormalizados) {
    const relatorio = {
        totalEventos: 0,
        eventosValidos: 0,
        eventosInvalidos: 0,
        porUsuario: {}
    }
    const eventos = {
        true: 0,
        undefined: 0
    }
    const map = new Map;

    relatorio.totalEventos = dadosNormalizados.length;
    for (let i = 0; i < dadosNormalizados.length; i++) {
        if (dadosNormalizados[i].sucesso === true) {
            relatorio.eventosValidos++;
        } else {
            relatorio.eventosInvalidos++;
        }

        atualizaEventos(dadosNormalizados[i].sucesso, eventos);

        if (dadosNormalizados[i].sucesso) {
            console.log("Oi");
            registraUsuario(map, dadosNormalizados[i].usuario);
        }
    }
    relatorio.porUsuario = Object.fromEntries(map);

    return relatorio;
}

export {
    normalizaDados,
    geraRelatorio
}
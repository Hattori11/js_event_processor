function normalizaSucesso(entrada) {
    if (entrada === "true" || entrada === 1) {
        return true;
    }

    return undefined;
}

// Só timestamps que não são "invalido" ou null
function normalizaTimestamp(entrada) {
    return BigInt(entrada);
}

// Essa função deve se chamada apenas para usuários com sucesso como true
function registraUsuario(map ,usuario) {
    if (map.has(usuario)) {
        map.set(usuario, map.get(usuario) + 1);
    } else {
        map.set(usuario, 1);
    }
}

// Essa função vai precisar de um objeto com a seguinte assinatura:
// const eventos = {
//      true: 0,
//      undefined: 0
//}
function atualizaEventos(sucesso, eventos) {
    if (sucesso === true) {
        eventos.true++;
    } else if (sucesso === undefined) {
        eventos.undefined++;
    }
}

export {
    normalizaSucesso,
    normalizaTimestamp,
    registraUsuario,
    atualizaEventos
}
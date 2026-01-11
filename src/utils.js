function normalizaSucesso(entrada) {
    if (entrada === "true" || entrada === 1 || entrada) {
        return true;
    }

    return undefined;
}

function normalizaTimestamp(entrada) {
    if (entrada === "invalido") return "invalido";
    if (entrada === null) return null;

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
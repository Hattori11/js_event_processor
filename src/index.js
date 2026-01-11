import { normalizaDados, geraRelatorio } from "./processor.js";

const eventos = [
  { tipo: "login", usuario: "ana", sucesso: "true", timestamp: "1700000000000" },
  { tipo: "logout", usuario: "ana", sucesso: true, timestamp: 1700000500000 },
  { tipo: "login", usuario: "joao", sucesso: 1, timestamp: null },
  { tipo: "login", usuario: "ana", sucesso: undefined, timestamp: "invalido" }
];

const dadosNormalizados = normalizaDados(eventos);
const relatorio = geraRelatorio(dadosNormalizados);

console.log(relatorio);
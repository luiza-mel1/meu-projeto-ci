const saudacao = require('./hello');

// Teste com erro intencional
const resultado = saudacao("Mundo");
const esperado = "Hello, Mundo!"; // ERRO

if (resultado !== esperado) {
  console.error(`FALHA: esperado "${esperado}", mas recebeu "${resultado}"`);
  process.exit(1);
}

console.log("Todos os testes passaram!");

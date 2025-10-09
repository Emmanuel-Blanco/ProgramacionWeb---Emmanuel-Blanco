// Importa cowsay usando CommonJS
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "¡Hola desde cowsay y CommonJS!",
    e: "oo",
    T: "U "
  })
);
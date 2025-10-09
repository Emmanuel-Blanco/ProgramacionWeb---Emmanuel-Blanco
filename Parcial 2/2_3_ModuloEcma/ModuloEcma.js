// Importa el módulo cowsay usando sintaxis ES Modules
import cowsay from "cowsay";

console.log(
  cowsay.say({
    text: "¡Hola desde cowsay y CommonJS!",
    e: "^^",
    T: "U "
  })
);
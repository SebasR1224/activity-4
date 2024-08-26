function esBisiesto(ano) {
  return ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0);
}

function celsiusAFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

function mayorDeDos(n1, n2) {
  return n1 > n2 ? n1 : n2;
}

function convertirMinutos(minutos) {
  let horas = Math.floor(minutos / 60);
  let minutosRestantes = minutos % 60;

  return `${horas} horas y ${minutosRestantes} minutos`;
}

function estaEnRango(num, inicio, fin) {
  return num >= inicio && num <= fin;
}

function calcularPrecioFinal(precioInicial, descuento) {
  let descuentoAplicado = precioInicial * (descuento / 100);
  let precioFinal = precioInicial - descuentoAplicado;
  return precioFinal;
}

function puedeVotar(edad) {
  return edad >= 18;
}

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.info("________1. Función si un año es bisiesto________");
console.log("2024 es bisiesto: ", esBisiesto(2024)); // debería devolver: true
console.log("2023 es bisiesto: ", esBisiesto(2023)); // debería devolver: false
console.log("2022 es bisiesto: ", esBisiesto(2022)); // debería devolver: false

console.info("________2. Función pasar de grados celsius a fahrenheit________");
console.log("0.0 grados celsius a  fahrenheit: ", celsiusAFahrenheit(0)); // debería devolver: 32.0
console.log("37.0 grados celsius a  fahrenheit: ", celsiusAFahrenheit(37.0)); // debería devolver: 98.6
console.log("37.5 grados celsius a  fahrenheit: ", celsiusAFahrenheit(37.5)); // debería devolver: 99,5
console.log("38.0 grados celsius a  fahrenheit: ", celsiusAFahrenheit(38.0)); // debería devolver: 100.4

console.info(
  "________3. Función para devolver del mayor de dos números________"
);
console.log("El número mayor entre 4 y 10 es: ", mayorDeDos(4, 10)); // debería devolver: 10
console.log("El número mayor entre 10 y 15 es: ", mayorDeDos(10, 15)); // debería devolver: 15
console.log("El número mayor entre 15 y 20 es: ", mayorDeDos(15, 20)); // debería devolver: 20

console.info("________4. Función para obtener las horas y minutos________");
console.log(convertirMinutos(10)); // debería devolver: 0 horas y 10 minutos
console.log(convertirMinutos(60)); // debería devolver: 1 horas y 0 minutos
console.log(convertirMinutos(90)); // debería devolver: 1 horas y 30 minutos

console.info(
  "________5. Función para verificar si un número está en el rango________"
);
console.log("1 está en el rango de 1 a 10:", estaEnRango(1, 1, 10)); // debería devolver: true
console.log("1 está en el rango de 10 a 20:", estaEnRango(1, 10, 20)); // debería devolver: false
console.log("20 está en el rango de 10 a 20:", estaEnRango(20, 10, 20)); // debería devolver: true

console.info("________6. Función para calcular el precio final________");
console.log(
  "El precio final de 125000 menos un 20% es: ",
  calcularPrecioFinal(125000, 20) // debería devolver: 100000
);

console.log(
  "El precio final de 200 menos un 5% es: ",
  calcularPrecioFinal(200, 5) // debería devolver: 190
);

console.log(
  "El precio final de 8000 menos un 28% es: ",
  calcularPrecioFinal(8000, 28) // debería devolver: 5760
);

console.info("________7. Función para verificar si se puede votar________");
console.log("18 años de edad, puede votar: ", puedeVotar(18)); // debería devolver: true
console.log("15 años de edad, puede votar: ", puedeVotar(15)); // debería devolver: false
console.log("19 años de edad, puede votar: ", puedeVotar(19)); // debería devolver: true

console.info("________8. Función para obtener el area de un triangulo________");
console.log(
  "El area de un triangulo con base de 20 y altura de 10 es de:",
  calcularAreaTriangulo(20, 10)
); // debería devolver: 100
console.log(
  "El area de un triangulo con base de 15 y altura de 5 es de:",
  calcularAreaTriangulo(15, 5)
); // debería devolver: 37.5
console.log(
  "El area de un triangulo con base de 60 y altura de 30 es de:",
  calcularAreaTriangulo(60, 30)
); // debería devolver: 900

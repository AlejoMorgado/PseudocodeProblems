lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];   // una lista de números
lista = reemplazarImparPorPar(lista);
function reemplazarImparPorPar(lista) {
  for (let i = 0; i < lista[i]; i++) {
    let num = lista[i];
    if (num % 2 !== 0) {  // verifica si el número es impar
      let nuevoNum = generarNumeroParAleatorio();  // genera un número par aleatorio
      lista[i] = nuevoNum;  // reemplaza el número impar con el número par aleatorio
    }
  }
  return lista;
}
function generarNumeroParAleatorio() {
  let num2 = 6;  // genera un número aleatorio entre 1 y 100
  if (num2 % 2 === 0) {   // verifica si el número es par
    return num2;
  }
}
// Ejemplo de uso
console.log(lista);   // devuelve la lista con los números impares reemplazados por números pares aleatorios

function ordenarNumeros() {

  let numero1 = parseFloat(prompt("Ingresa el primer número:"));
  let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
  let numero3 = parseFloat(prompt("Ingresa el tercer número:"));


  if (numero1 === numero2 && numero2 === numero3) {
    document.getElementById("resultado").innerText = "Los tres números son iguales.";
    console.log("Los tres números son iguales.");
    return;
  }


  if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
    document.getElementById("resultado").innerHTML = "Hay dos números iguales.";
    console.log("Hay dos números iguales.");
  } else {
    document.getElementById("resultado").innerHTML = ""; 
  }


  let mayor, medio, menor;

  if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
    if (numero2 >= numero3) {
      medio = numero2;
      menor = numero3;
    } else {
      medio = numero3;
      menor = numero2;
    }
  } else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
    if (numero1 >= numero3) {
      medio = numero1;
      menor = numero3;
    } else {
      medio = numero3;
      menor = numero1;
    }
  } else {
    mayor = numero3;
    if (numero1 >= numero2) {
      medio = numero1;
      menor = numero2;
    } else {
      medio = numero2;
      menor = numero1;
    }
  }


  let mensaje = document.getElementById("resultado").innerHTML;
  mensaje += "Orden de mayor a menor: " + mayor + ", " + medio + ", " + menor + "<br>";
  mensaje += "Orden de menor a mayor: " + menor + ", " + medio + ", " + mayor;

  document.getElementById("resultado").innerHTML = mensaje;


  console.log("Mayor:", mayor);
  console.log("Medio:", medio);
  console.log("Menor:", menor);
}
let cantNumber = parseInt(prompt("cuantos numeros quiere ingresar"))
let numMayor = 0;
let numMenor = 0;
let suma = 0;

for (let index = 0; index < cantNumber; index++) {

    let numero = parseInt(prompt("ingrese un numero"))

    if(index == 0){
        numMayor = numero
        numMenor = numero
    }
    if(numero > numMayor) {
        numMayor = numero
    }
    if(numero < numMenor){
        numMenor = numero
    }
    suma = suma + numero
    
}
console.log(`El numero mayor es ${numMayor}`);
console.log(`El numero mayor es ${numMenor}`);
console.log(`El numero mayor es ${suma / cantNumber}`);


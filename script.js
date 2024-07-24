//solicitar numero
const solicitarNumero = () => {
    let numero = parseInt(prompt("Ingresa un número entre 1 y 20:"));
    if (numero < 1 || numero > 20 || isNaN(numero)) {
        console.log("Número fuera del rango");
        document.write("<span style='color: #f2d307; padding: 1rem;'>Número fuera del rango</span>");
        return;
    }
    mostrarResultados(numero);
}

//Operaciones
const mostrarResultados = (numero) => {

    //mult 

    document.write("<h3 style='color: #c21066; padding: 1rem;'>Tabla de multiplicar</h3>");
    for (let i = 1; i <= numero; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`);
        document.write(`<span style='color: #c21066; font-weight: 400; padding: 0.5rem 1rem;'>${i} x <span style='color: #ea9a27; font-weight: bold'>${numero}</span> = ${i * numero}</span><br>`);
    }

    //factorial
    document.write("<h3 style='color: #4a0325; padding: 1rem;'>Factoriales</h3>");
    for (let i = 1; i <= numero; i++) {
        console.log(`Factorial de ${i} es: ${calcularFactorial(i)}`);
        document.write(`<span style='color: #4a0325; padding: 0.2rem 1rem; font-weight: 400'>Factorial de <span style='color: #ea9a27; font-weight: bold'>${i}</span> es: ${calcularFactorial(i)}</span><br>`);
    }
}

const calcularFactorial = (n) => {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= i; j++) {
            factorial *= j;
        }
    }
    return factorial;
}


solicitarNumero();
function ejercicioNumero2 (a, b, c) {
    let r = (a + b + c)/3
    let t = (a + b + c)%2
    alert("Nos dieron los numeros " + a + ", " + b + ", " + c + "\n" + "Promedio: " + r + "\n" + "Residuo: " + t
    )
    return 
}

e = ejercicioNumero2(1, 2, 3)

// "\n" es un salto de linea, es decir, que lo que este despues de eso se mostrara en la siguiente linea
// % es el operador de residuo, es decir, que nos dara el residuo de la division de los numeros que le pasemos
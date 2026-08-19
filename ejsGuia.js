/*/ Ej. 1 - Torres de Hanoi
function hanoi(n, origen, auxiliar, destino) {
    if (origen > 3 || origen <= 0) {
        console.log('Origen entre torre 1 y 3')
    }
    if (auxiliar > 3 || auxiliar <= 0) {
        console.log('Auxiliar entre torre 1 y 3')
    }
    if (destino > 3 || destino <= 0) {
        console.log('Destino entre torre 1 y 3')
    }
    if (n==1) {
    console.log('Mover disco de ${torre} origen a ${destino}')
    }
}
*/
function hanoiSegunda(n, origen, auxiliar, destino) {
    if (n==1) {
        console.log(`Disco se mueve de ${origen} a ${destino}`)
    }
    if (n>1) {
        hanoiSegunda(n-1, origen, destino, auxiliar)
        console.log(`Disco ${n} se mueve de ${origen} a ${destino}`)
        hanoiSegunda(n-1, auxiliar, origen, destino)
    }
}

a=hanoiSegunda(3, 1, 2, 3)
console.log(a)
alert(a)

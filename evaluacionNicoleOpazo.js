/*
Funciones solicitadas:
obs: los días se deben ingresar como tipo String y los valores de los productos a
comprar se deben trabajar con arreglos, por ejemplo = [1000,500,650,8000]

● Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.

● Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento.

● Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba.

● Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
producto
    ○ Crea una función que retorne el valor del producto más costoso.
    ○ Crea una función que retorne el valor del producto menos costoso.
*/







/*
● Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.
*/

//arrayValoresProductos por ej: [1000,500,650,8000]
function total (productos) {
    //variable suma total que parte en 0
    var sumaTotalProductos = 0;
    //recorrer array productos
    for (i=0;productos.length>i; i++){
        //ir actualizando la variable suma total
        sumaTotalProductos = productos[i] + sumaTotalProductos;
    }
    return sumaTotalProductos;
}
total([1000,500,650,8000]);

//arrayDias
//funcion para los días
//recorrer el arrayDias
//y cada dia lo va haciendo con el mismo formato de mayus
//if dia == martes || jueves llamar función total y hacer 20% desc



function diasDescuento (dia) {
    dia = dia.toLowerCase();

}
diasDescuento("HOLA");

    
if (dia == "martes" || dia == "jueves") {
    //calcular el 20% de la suma de los productos
    //guardarla en una variable (descuento)

}
else {
    //variable de la suma inicial de los productos (sin descuento)
    //dar mensaje correspondiente
}
return //variable



console.log("El total de sus productos es de $" + );
console.log("Su descuento es de $" +);
console.log("Por lo tanto, su total es de $" + );















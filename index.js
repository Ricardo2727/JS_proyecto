


const historial = [];
class Pedido {
    constructor(nombreUsuario, nombrePromo, cantidad, total) {
        this.nombreUsuario = nombreUsuario;
        this.nombrePromo = nombrePromo;
        this.cantidad = cantidad;
        this.total = total;
    }
}


// funcion calcular promocion
function calcPromoA() {
    const nombre = ("Promo A (1 Cortado + 2 Medias Lunas) ");
    const cant = parseInt(prompt("Ingrese la cantidad_A:"));
    const valor = 2000;
    const total = (cant * valor);
    alert("Tu pedido " + nombreUsuario + " es:\n" + cant + " " + nombre + " = Total $" + total + "\nCon el comprobante pasá por Caja.\nGracias por preferir Caffe KOP!")

    const pedido = new Pedido(nombreUsuario, nombre, cant, total)
    historial.push(pedido)
}

function calcPromoB() {
    const nombre = ("Promo B (1 Espresso + 1 Tostado J&Q) ");
    const cant = parseInt(prompt("Ingrese la cantidad:_B"));
    const valor = 3000;
    const total = (cant * valor);
    alert("Tu pedido " + nombreUsuario + " es:\n" + cant + " " + nombre + " = Total $" + total + "\nCon el comprobante pasá por Caja.\nGracias por preferir Caffe KOP!")

    const pedido = new Pedido(nombreUsuario, nombre, cant, total)
    historial.push(pedido)
}

function calcPromoC() {
    const nombre = ("Promo C (1 Capucchino + 2 Chipas) ");
    const cant = parseInt(prompt("Ingrese la cantidad:_C"));
    const valor = 2500;
    const total = (cant * valor);
    alert("Tu pedido " + nombreUsuario + " es:\n" + cant + " " + nombre + " = Total $" + total + "\nCon el comprobante pasá por Caja.\nGracias por preferir Caffe KOP!")

    const pedido = new Pedido(nombreUsuario, nombre, cant, total)
    historial.push(pedido)
}

//funcion nombre usuario
function pedirNombreUsuario () {
    let userName = prompt("Ingresa tu nombre:");
    while (userName === "") {
        alert("El nombre no es válido, el campo está vacío.");
        userName = prompt("Por favor, ingresa tu nombre:");
    }
    return userName;
};


function verHistorial() {
    const usuariofiltrado = prompt("Escribe tu nombre: ");
    const filtrado = historial.filter((pedido) => {
        return pedido.nombreUsuario === usuariofiltrado
    })

    let mensaje = '';
    filtrado.forEach((pedido) => {
        mensaje = mensaje + pedido.nombreUsuario + " :" + pedido.cantidad + " " + pedido.nombrePromo + " = Total $" + pedido.total + '\n'
    })
    alert(mensaje);
    
}


alert("¡Bienvenido a Caffe KOP! \nYo soy Koffi, te ayudaré el día de hoy!");
const nombreUsuario = pedirNombreUsuario();


//do{
let menu = parseInt(prompt(nombreUsuario + ", elegí la opcion que quieres realizar :\n 1. Hacer un pedido.\n 2. Revisar un pedido.\n 3. Salir."))
console.log(menu);
while (menu !== 3) {
    switch (menu) {
        case 1:
            console.log("Menu Promociones");
            let promo = parseInt(prompt("'Menu Promociones'\n Introduce el número de la opción que más te guste:\n 1. Promo A: 1 Cortado + 2 Medias Lunas $2000.\n 2. Promo B: 1 Espresso + 1 Tostado J&Q 3000.\n 3. Promo C: 1 Capucchino + 2 Chipas $2500. \n 4. Salir."))
            console.log(promo);
            while (promo !== 4) {
                switch (promo) {
                    case 1:
                        calcPromoA()
                        break;

                    case 2:
                        calcPromoB()
                        break;

                    case 3:
                        calcPromoC()
                        break;

                    default:
                        alert("Ninguna promoción seleccionada.\n")
                        break;
                }

                promo = parseInt(prompt("'Menu Promociones'\n Introduce el número de la opción que más te guste:\n 1. Promo A: 1 Cortado + 2 Medias Lunas $2000.\n 2. Promo B: 1 Espresso + 1 Tostado J&Q 3000.\n 3. Promo C: 1 Capucchino + 2 Chipas $2500. \n 4. Salir."))

            }
            break;

        case 2:
            console.log("historial");
            verHistorial();
            break;

        default:
            alert("Ninguna opcion seleccionada.\n")
            break;
    }
    menu = parseInt(prompt("Elegí la opcion que quieres realizar :\n 1. Hacer un pedido.\n 2. Revisar un pedido.\n 3. Salir."))
}


alert("Programa finalizado, enter para cerrar")



//}while (confirm("Aceptar, para continuar con un nuevo usuario!"));
console.log(historial);
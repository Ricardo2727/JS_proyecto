
alert("¡Bienvenido a Caffe KOP! \nYo soy Koffi, te ayudaré a armar tu pedido.");

const userName = prompt("Ingresa tu nombre:") 
const Saludo = "¡Hola, "
const hi = Saludo + userName + "! , A continuación crearemos tu pedido. \nLas promociones de hoy son:"


if (userName != "") {
    alert(hi)
    
} else {
    while (userName == "") {
        alert ("Tu nombre no es valido, el campo esta vacio.");
        console.log(userName);
        inName = prompt("Porfavor, Ingresa tu nombre:")
        console.log(inName);
    
            if (inName != "") {
                const hi = Saludo + inName + "! , A continuación crearemos tu pedido. \nLas promociones de hoy son: "
                alert(hi)
                const userName= inName
                break
            } 
    }
}

console.log(userName);

console.log("Menu Promociones"); 
let continuar = true;
while (continuar) {
    let promo = parseInt (prompt ("Introduce el número de la opción que más te guste:\n 1. Promo A: 1 Cortado + 2 Medias Lunas-->$2000.\n 2. Promo B: 1 Espresso + 1 Tostado J&Q--->3000.\n 3. Promo C: 1 Capucchino + 2 Chipas--->$2500. \n 4. Salir." ))
        switch (promo) {
            case 1:
            console.log("Promo A");
            const boolPA = true
            const nombrePA = ("Promo A (1 Cortado + 2 Medias Lunas) ");
            const cantPA = parseInt (prompt("Ingrese la cantidad:"))
            const valorPA = 2000
            function calcPromoA() {
                const totalPA =(cantPA*valorPA)
                console.log(totalPA);
                alert ("Tu pedido "+ userName + " es:\n" + cantPA +" "+ nombrePA + " = Total $" + totalPA + "\nCon el comprobante pasá por Caja.\nGracias por preferir Caffe KOP!" )
            }
            calcPromoA()
            
                break;
            case 2:
                console.log("Promo B");
                const boolPB = true
                const nombrePB = (" Promo B (1 Espresso + 1 Tostado J&Q) ");
                const cantPB = parseInt (prompt("Ingrese la cantidad:"))
                const valorPB = 3000
                function calcPromoB() {
                    const totalPB =(cantPB*valorPB)
                    console.log(totalPB);
                    alert ("Tu pedido "+ userName + " es:\n" + cantPB +" "+ nombrePB + " = Total $" + totalPB + "\nCon el comprobante pasá por Caja.\nGracias por preferir Caffe KOP!" )
                }
                calcPromoB()
                break;            
            case 3:
                console.log("Promo C");
                const boolPC = true
                const nombrePC = ("Promo C (1 Capucchino + 2 Chipas) ");
                const cantPC = parseInt (prompt("Ingrese la cantidad:"))
                const valorPC = 2500
                function calcPromoC() {
                    const totalPC =(cantPC*valorPC)
                    console.log(totalPC);
                    alert ("Tu pedido "+ userName + " es:\n" + cantPC +" "+ nombrePC + " = Total $" + totalPC + "\nCon el comprobante pasá por Caja.\nGracias por preferir Caffe KOP!" )
                }
                calcPromoC()
                break;

                default:
                    alert ("Ninguna promo seleccionada.\n")
                    console.log("Carrito cerrado");    
                break;
        }
        let confirmacion=prompt(userName + ", ¿Desea crear un nuevo pedido?, Si/No", "Si/No").toLowerCase()
        if(confirmacion=="no"){
            continuar=false
            alert ("Adios "+ userName + " !!\n Gracias por preferir Caffe KOP!" )
            console.log("Carrito Cerrado")
            
            break;
        }
}

        



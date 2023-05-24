
/* ----- Precio del Ticket ------*/
function valorTicket () {
    var precioEntrada = 200;
    if (document.getElementById('cantidad').value > 0 ) {
                        var tipo=document.getElementById("cat").value;
        
                switch (tipo) {
                    case "Estudiante":
                        precioEntrada=precioEntrada*0.2;
                    break;
                    case "Trainee":
                        precioEntrada=precioEntrada*0.5;
                    break;
                    case "Junior":
                        precioEntrada=precioEntrada*0.85;
                    break;
                }
                
                var precioFinal = document.getElementById('cantidad').value * precioEntrada;
                document.getElementById("totalApagar").value= "Total a Pagar: $ " +  precioFinal;
            }
                else {
                alert ("La cantidad de Tickets " + document.getElementById('cantidad').value +" solicitado es incorrecta") ;}
                
    
}

document.getElementById('btnResumen').addEventListener('click',valorTicket);



var nome = prompt("come ti chiami?");

if (isNaN(nome)) {

    document.getElementById("text").innerHTML =
    "<h1>Inserito con successo<h1>";
      
    /* document.write("inserito con successo"); */
    
    

} else {

        document.getElementById("text").innerHTML =
        "<h1>Inserire delle lettere in numeri non sono ammessi!<h1>";
        

    /* document.write("Inserire delle lettere i numeri
    non sono ammessi!") */
}
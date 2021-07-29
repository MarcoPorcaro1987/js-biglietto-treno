// 1) Chiedi il numero di km da percorrere
var distanza = prompt("Quanti km devi percorre?");

// 2) Chiedi l'età
var età = prompt("Quanti anni hai?");

// 3) Calcolo prezzo del biglietto (km da percorrere * 0.21 €)
var prezzo = distanza * 0.21;

// 4) Calcolo sconto (se età <18 -20%, se età >= 65 -40% altrimenti 0 )
var sconto;
if (età < 18) {
    //sconto -20%
    sconto = ((prezzo * 20) / 100);
}  if (età >= 65) {
    //sconto -40%
    sconto = ((prezzo * 40) / 100);
} if (età > 18 && età < 66) {
    sconto = 0;
}

// 5) Prezzo finale in due decimali
var costofinale = prezzo - sconto;
costofinale = costofinale.toFixed(2);
document.getElementById("costofinale").innerHTML += costofinale;
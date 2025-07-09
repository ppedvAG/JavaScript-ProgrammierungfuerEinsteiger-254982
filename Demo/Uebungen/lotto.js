document.getElementById("start").addEventListener("click", function() {
    let zahlen = new Array();
    
    let zahl = parseInt(document.getElementById("ZahlenInput").value);
    if (isNaN(zahl) || zahl < 0 || zahl > 49) {
        alert("Bitte geben Sie eine gültige Zahl zwischen 0 und 49 ein.");
        return;
    }
    
    // 6 zufallszahlen zwischen 0 und 49 generieren
    for (let j = 0; j < 6; j++) {
    let zufallsZahl = Math.floor(Math.random() * 50);
        zahlen.push(zufallsZahl);
    }

    if(zahlen.includes(zahl)) {
        document.getElementById("ZahlenListe").innerHTML = "Die Zahl " + zahl + " ist in der Liste: " + zahlen.join(", ");
    } else {
        document.getElementById("ZahlenListe").innerHTML = "Die Zahl " + zahl + " ist nicht in der Liste: " + zahlen.join(", ");
    }
   
    
 });
let zahl1 = 6;
let zahl2 = 3;
let ergebnis = zahl1 + zahl2;
document.write("Die Summe von " + zahl1 + " und " + zahl2 + " ist: " + ergebnis + "<br>");

if(zahl1 > zahl2) {
    document.write(zahl1 + " ist größer als " + zahl2 + "<br>");
} else if (zahl1 < zahl2) {
    document.write(zahl1 + " ist kleiner als " + zahl2 + "<br>");
} else {
    document.write("Die Zahlen sind gleichgestellt<br>");
}

let Stadt = "Berlin";
switch(Stadt) {
    case "Berlin":
        document.write("Die Stadt ist Berlin<br>");
        break;  
    case "Bremen":
        document.write("Die Stadt ist Bremen<br>");
        break;
    case "München":
        document.write("Die Stadt ist München<br>");
        break;
    default:
        document.write("Die Stadt ist unbekannt<br>");
        break;
}
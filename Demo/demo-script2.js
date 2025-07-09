with(document) {
    function bruttoRechner(preis_netto, mwst) {
        // Berechnung des Brutto-Preises
        var preis_brutto = preis_netto * (1 + mwst / 100);
        write("Der Brutto-Preis beträgt: " + preis_brutto.toFixed(2) + " Euro.<br>");
    }
    

    // Beispielaufruf der Funktion
    var preis_netto = 100; // Beispielwert für den Nettopreis
    var mwst = 19; // Beispielwert für die Mehrwertsteuer
    bruttoRechner(preis_netto, mwst);
}
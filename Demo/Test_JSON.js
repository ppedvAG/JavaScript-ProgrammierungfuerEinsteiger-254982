import { Selector } from 'testcafe';

// Festlegen welches HTML-Dokument getestet werden soll
fixture `JSON Konverter Test`
    .page `C:\Users\de2\OneDrive - ppedv AG\Anlagen\Schulungsunterlagen\JavaScript-Einsteiger\JavaScript-ProgrammierungfuerEinsteiger-254982\Demo\JSON.html`

// Neuer Test
test('JSON Konverter Test', async t => {
    // Variablen für die Eingaben und Ausgaben im HTML-Dokument
    const jsonInput = Selector('#jsonInput');
    const convertButton = Selector('#convertButton');
    const output = Selector('#output');

    // Gültiger JSON-String wir eingegeben und überprüft
    await t 
        .selectText(jsonInput)
        .pressKey('delete')
        .typeText(jsonInput, '{"name": "Max", "age": 30, "city": "Berlin"}')
        .click(convertButton)
        .expect(output.innerText).eql('{\n  "name": "Max",\n  "age": 30,\n  "city": "Berlin"\n}');

    await t 
        .selectText(jsonInput)
        .pressKey('delete')
        .typeText(jsonInput, '{"name": "Max", "age": 30, "city": "Berlin"')
        .click(convertButton)
        .expect(output.innerText).eql('Ungültiger JSON-String');
});
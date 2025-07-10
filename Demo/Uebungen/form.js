function validateForm() {
    let myForm = document.forms['registrationForm'];
    let pw = myForm['password'].value;
    let passwordRepeat = myForm['passwordRepeat'].value;
    if(pw.length < 1) {
        alert("Das Passwort darf nicht leer sein.");
        return false;
    }
    if(pw !== passwordRepeat) {
        alert("Die Passwörter stimmen nicht überein.");
        return false;
    }

    // // Formulardaten sammeln
    // const data = {
    //     username: myForm['username'].value,
    //     password: myForm['password'].value,
    //     email: myForm['email'].value,
    //     ageGroup: myForm['ageGroup'].value,
    //     interests: Array.from(myForm['interests']).filter(cb => cb.checked).map(cb => cb.value),
    //     gender: myForm['gender'].value,
    //     comments: myForm['comments'].value
    // };

    // // Daten ans Backend senden
    // fetch('https://dein-backend/api/registrierung', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(response => {
    //     if (response.ok) {
    //         alert("Erfolgreich abgesendet!");
    //     } else {
    //         alert("Fehler beim Absenden!");
    //     }
    // })
    // .catch(error => {
    //     alert("Netzwerkfehler: " + error);
    // });

    // return false; // verhindert das normale Absenden (damit die Seite nicht neu geladen wird)
}

function confirmReset() {
    return confirm("Möchten Sie das Formular wirklich zurücksetzen?");
}
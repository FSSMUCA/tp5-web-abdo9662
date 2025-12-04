let nombre = prompt("Entrez un nombre :");
nombre = Number(nombre);

let classification = "";

if (nombre < 0) {
    classification = "Nombre négatif";
} else {
    if (nombre <= 10) {
        classification = "Petit";
    } else {
        if (nombre <= 50) {
            classification = "Moyen";
        } else {
            if (nombre <= 100) {
                classification = "Grand";
            } else {
                classification = "Très grand";
            }
        }
    }
}

let resultat = `Vous avez entré : ${nombre}<br>Classification : ${classification}`;
console.log(resultat);
document.getElementById('result').innerHTML = `<p>${resultat}</p>`;
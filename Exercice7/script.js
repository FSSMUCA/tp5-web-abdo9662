function verifierMotDePasse(mdp) {
    return mdp.length >= 8 && mdp.includes("@");
}

let mot = prompt("Entrez votre mot de passe : ");

if (verifierMotDePasse(mot)) {
    document.write("Mot de passe valide");
} else {
    document.write("Mot de passe non valide");
}

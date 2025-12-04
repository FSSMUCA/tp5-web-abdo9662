function factorielle(n) {
    if (n === 0) return 1;
    return n * factorielle(n - 1);
}

let n = Number(prompt("Entrez un nombre : "));
let resultat = factorielle(n);


document.write(`La factorielle de ${n} est : ${resultat.toLocaleString('fullwide', {useGrouping: false})}`);

function factorielleBigInt(n) {
    n = BigInt(n);
    if (n === 0n) return 1n;
    return n * factorielleBigInt(n - 1n);
}

let resultatBigInt = factorielleBigInt(n);
document.write(`<br>Version BigInt : ${resultatBigInt.toString()}`);
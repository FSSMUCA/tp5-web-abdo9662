let n = Number(prompt("Entrez un nombre : "));

document.write(`<h2>Table de ${n}</h2>`);

for (let i = 1; i <= 10; i++) {
    document.write(`${n} x ${i} = ${n * i} <br>`);
}

let min = Number(prompt("Entrez le nombre minimal : "));
let max = Number(prompt("Entrez le nombre maximal : "));

let output = "";

for (let i = min; i <= max; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        output += i + " : Five&Three<br>";
    }
    else if (i % 3 === 0) {
        output += i + " : Three<br>";
    }
    else if (i % 5 === 0) {
        output += i + " : Five<br>";
    }
    else {
        output += i + "<br>";
    }
}

document.getElementById("result").innerHTML = output;

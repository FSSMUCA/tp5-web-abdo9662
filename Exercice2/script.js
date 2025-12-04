let prenom = "Sara";
let age = 22;

let phrase = "Je m'appelle " + prenom + " et j'ai " + age + " ans";

console.log("Phrase initiale: " + phrase);
document.getElementById('result').innerHTML = `
    <p><strong>Phrase initiale:</strong> ${phrase}</p>
`;

let ancienAge = age;
age = 23;

let nouvellePhrase = "Je m'appelle " + prenom + " et j'ai " + age + " ans";

console.log("Ancien âge: " + ancienAge);
console.log("Nouvel âge: " + age);
console.log("Nouvelle phrase: " + nouvellePhrase);

document.getElementById('result').innerHTML += `
    <p><strong>Ancien âge:</strong> ${ancienAge}</p>
    <p><strong>Nouvel âge:</strong> ${age}</p>
    <p><strong>Nouvelle phrase:</strong> ${nouvellePhrase}</p>
`;

let phraseTemplate = `Je m'appelle ${prenom} et j'ai ${age} ans`;
console.log("Avec template literal: " + phraseTemplate);
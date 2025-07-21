// Tableaux
// => Exercice 1 

var taille = prompt("De quelle taille sera votre tableau ?");
taille = Number(taille)

var tableau = [];

for (var i = 0; i < taille; i++) {
    var element = prompt("Rentrez les éléments de votre tableau " + (i + 1) + " :");
    tableau.push(element);
}

alert("Voici le contenu de votre tableau : " +tableau.join(", "));
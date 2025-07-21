// Boucles 
// => Exercice 1

var i = 0;
var liste = "";
var prenom;

do {
  prenom = prompt("Saisissez le prénom de tous les témoins de la scène ( Laisser un vide et cliquer sur OK pour terminer ) :");
  if (prenom !== "") {
    i++;
    liste = liste + "- " + prenom + "\n";
  }
} while (prenom !== "");

console.log("Vous avez saisi " + i + " prénom(s) :\n" + liste);

// => Exercice 2

var N = prompt("Entrez un nombre N :");
N = Number(N);

var i = 0;
var resultat = "";

while (i < N) {
  resultat = resultat + i + " ";
  i++;
}

console.log("Les nombres inférieurs à " + N + " sont :\n" + resultat);

// => Exercice 3

var somme = 0;
var compteur = 0;
var nombre;

do {
  nombre = Number(prompt("Saisissez un nombre entier ( Saisir 0 pour arrêter ) :"));

  if (nombre !== 0) {
    somme = somme + nombre;
    compteur++;
  }
} while (nombre !== 0);

if (compteur === 0) {
console.log("Aucun nombre saisi.");
} 

if (compteur !==0) {
    var moyenne = somme / compteur;
    console.log("Somme = " + somme + "\nMoyenne = " + moyenne.toFixed(2));
}

// => Exercice 4

var X = Number(prompt("Saisissez un entier X (le nombre dont on veut les multiples) :"));
var N = Number(prompt("Saisissez un entier N (le nombre de multiples à afficher) :"));
var resultat = "";

for (var i = 1; i <= N; i++) {
  var multiple = X * i;
  resultat = resultat + multiple + " ";
}

console.log("Les " + N + " premiers multiples de " + X + " sont :\n" + resultat);

// => Exercice 5

var mot = prompt("Entrez un mot :");
var voyelles = "aeiouyAEIOUY";
var compteur = 0;

for (var i = 0; i < mot.length; i++) {
  var lettre = mot.substring(i, i + 1);
  if (voyelles.indexOf(lettre) !== -1) {
    compteur = compteur + 1;
  }
}

console.log("Le mot \"" + mot + "\" contient " + compteur + " voyelle(s).");

// Version moderne : 

var mot = prompt("Entrez un mot :");
var voyelles = "aeiouyAEIOUY";
var compteur = 0;

for (var i = 0; i < mot.length; i++) {
  var lettre = mot[i];
  if (voyelles.indexOf(lettre) !== -1) {
    compteur = compteur + 1;
  }
}

console.log("Le mot \"" + mot + "\" contient " + compteur + " voyelle(s).");
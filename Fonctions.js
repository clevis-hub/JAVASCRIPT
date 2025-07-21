// Fonctions
// => Exercice 1 ( version html )

function produit(x, y) {
    return x * y;
}
function cube(x) {
    return x * x * x;
}
function afficheImg(image) {
    document.write('<img src="' + image + '" alt="Image"><br>');
}
var nb1 = prompt("Entrez un premier nombre :");
var nb2 = prompt("Entrez un deuxième nombre :");

nb1 = Number(nb1);
nb2 = Number(nb2);

var resultatcube = cube(nb1)
var resultatproduit = produit(nb1, nb2);

afficheImg("papillon.jpg")
document.write("Le cube de " + nb1 + " est : " + resultatcube + "<br>");
document.write("Le produit de " + nb1 + " et " + nb2 + " est : " + resultatproduit);

// version test console 

function produit(x, y) {
    return x * y;
}

function cube(x) {
    return x * x * x;
}

var nb1 = prompt("Entrez un premier nombre :");
var nb2 = prompt("Entrez un deuxième nombre :");

nb1 = Number(nb1);
nb2 = Number(nb2);

var resultatCube = cube(nb1);
var resultatProduit = produit(nb1, nb2);

alert("Le cube de " + nb1 + " est : " + resultatCube);
alert("Le produit de " + nb1 + " et " + nb2 + " est : " + resultatProduit);

console.log("Le cube de " + nb1 + " est : " + resultatCube);
console.log("Le produit de " + nb1 + " et " + nb2 + " est : " + resultatProduit);

// => Exercice 2

function strtok(str1, str2, n) {

    var tablemots = str1.split(str2);
    return tablemots[n - 1];
}

    var chaine = "Jean,Louis,Paris,75016,18,homme,brun";
    var separateur = ",";
    var position = 5;
    var resultat = strtok(chaine, separateur, position);

    alert("Le mot à la " + position + "ème position est :" + resultat);

// 1
// let nbre1 = 1;
// let nbre = "1";
// console.log(nbre1 = nbre);
//2
// console.log(nbre1 == nbre);

//3
// let prenom = prompt("quel est ton prénom");

// if (prenom.length < 5) {
//     alert("ton nom est trop court");
// } 


// 4

// let addition = prompt("petit calcul: 6 + 4 = ?");

// if (addition == 10) {
//     alert("bravo, c'est une bonne réponse");

// } else {
//     alert("mauvaise réponse");
// }

//5

// let multiplication = prompt("petite multiplication : 5 x 3 = ?");
// let reponse = 15;

// if (multiplication == reponse) {
//     alert(`Bien joué ! La bonne réponse était bien ${reponse}`);
// } else {
//     alert(`Dommage, tu n'étais qu'a ${Math.abs(multiplication - reponse)} unité de la bonne reponse`);
// }


//6

// let tableau = [];
// let ajout = prompt("ajout un élément au tableau");


// if (tableau.length < 3) {
//     tableau.push(ajout);
//     ajout = prompt("ajout un 2e élément ");
//     tableau.push(ajout);
//     ajout = prompt("ajout un 3e element");
//     tableau.push(ajout);
// }

// if (tableau.length == 3) {
//     alert(`Voici vos 3 ingrédients : ${tableau}`);
// }

//7

// let grandNombres = [];
// let petitNombres = [];

// let nbre1 = prompt("choisis un numero");
// let nbre2 = prompt("choisis un numero");
// let nbre3 = prompt("choisis un numero");

// if (nbre1 <= 12) {
//     petitNombres.push(nbre1);
// } else {
//     grandNombres.push(nbre1)
// }

// if (nbre2 <= 12) {
//     petitNombres.push(nbre2);
// } else {
//     grandNombres.push(nbre2)
// }

// if (nbre3 <= 12) {
//     petitNombres.push(nbre3);
// } else {
//     grandNombres.push(nbre3)
// }



// console.log(`Voici la liste des grands nombres : ${grandNombres} et la liste des petits nombres : ${petitNombres}`);

// 8
let jour = prompt("quel jour on est ?");

if (jour == "lundi" || jour == "mardi" || jour == "mercredi") {
    console.log(`c'est ${jour} ! Aujourd'hui on est en e-learning`);   
} else {
    console.log(`Le ${jour} le cours se fait en presentiel`);
}

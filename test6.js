// Demander à l'utilisateur de saisir un nombre (n)
let n = Number(prompt("Veuillez saisir un chiffre (n) :"));

// Vérifier si la saisie est valide
if (isNaN(n) || n <= 0) {
    alert("Veuillez saisir un nombre valide supérieur à 0.");
} else {
    // Calculer la somme de 1 à n
    let somme = (n * (n + 1)) / 2;

    // Calculer le résultat (somme * n)
    let resultat = somme * n;

    // Afficher le résultat dans une alerte
    alert("Le résultat du calcul est : " + resultat);
}
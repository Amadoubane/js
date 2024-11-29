// Étape 1 : Demander à l'utilisateur de saisir un nombre (n)
let n = prompt("Veuillez saisir un chiffre (n) :");
n = Number(n);  // Convertir la saisie en nombre

// Vérifier si la saisie est un nombre valide
if (isNaN(n) || n <= 0) {
    alert("Veuillez saisir un nombre valide supérieur à 0.");
} else {
    // Étape 2 : Calculer la somme des nombres de 1 à n
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;  // Ajouter i à la somme
    }

    // Multiplier la somme par n
    let resultat = somme * n;

    // Étape 3 : Afficher le résultat dans une alerte
    alert("Le résultat du calcul est : " + resultat);
}

function envoyerUntruc(){
    let valeurDeMonChamp = document.getElementById("LeNom")
    alert("Voilà");
}


var monButton = document.getElementById("Lebutton");
monButton.addEventListener("Click", envoyerUntruc);


var MadivMagique = document.getElementById("idListMedecin");

fetch("http://192.168.64.175:8080/AddMedecin/", {
    headers:{
        Accept: 'application/json'
    }
    // ...
})

.then(response => {
    if (response.ok) {
        return response.json()
    } else {
        throw new Error("Erreur serveur", {cause: response})
    }
})
.then(result => {
    console.log('la liste des articles : ', result)
})
.catch(error => {
    console.error('Une erreur est survenue', error)
})
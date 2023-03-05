//Récupértion de la liste des dés
var deSelect = document.querySelectorAll('.dice');

//Nombre de dés ajouter dans le jeu
let compteDice = 0;

//Score du joueur
let score = 0

//Fonction servant à ouvrir le pop-pup des règles
function openForm() {
    document.getElementById("popupForm").style.display = "flex";
}

//Fonction servant à quitter le pop-pup
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

// quitter le pop-pup lors d'un click hors du pop-pup
window.onclick = function (event) {
    if (event.target.className === "form-popup") {
        event.target.style.display = "none";
    }
};

//Affichage du pop-pup pour décrire les règles et rémise à zéro
window.addEventListener("load", (event) => {
    
    openForm();
    reset();
  });



// fonction permettant d'ajouter un dé au tableau
function addDice(){
    if (compteDice<5) {
        compteDice = compteDice+1;  
        console.log(compteDice);
        document.getElementById(`${compteDice}`).style.display = "block"
        document.getElementById("empty").style.display = "none"
    }else{
        alert("Nombre de Dés max!!")
    }
}

// Remise à zéro du jeu
function reset(){
    for (let i = 1; i < 6; i++) {
        document.getElementById(`${i}`).style.display = "none";
        compteDice = 0;
        document.getElementById(`${i}`).innerText = 6
    }
}

//Fonction permettant de générer une nombre aléatoire entre 1 et 6
function getNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

//Ce code génere et affiche un nombre aléatoire dans notre dé lorsqu'un est touché
deSelect.forEach(element => {
    element.addEventListener('click', () => {
        for (let i = 1; i < compteDice+1; i++) {
            let nbre = getNumber(1, 6)
            // Affiche le nombre générer dans le décorespondant
            document.getElementById(`${i}`).innerText = nbre
            score = score + nbre
        }
    })
});
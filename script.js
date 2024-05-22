let avertissement = document.getElementById("avertissement");
let nombreJoueurs = document.getElementById("nombreJoueurs");
const buttonNbJoueur = document.getElementById("buttonNbJoueur");
let nomJoueurs = document.getElementById("nomJoueurs");
const buttonEquipeAleatoire = document.getElementById("buttonEquipeAleatoire");
let equipe = document.getElementById("equipe");

function genererChampsNomJoueurs(nombreJoueurs) {
  avertissement.innerHTML = "";
  let nbJoueurs = parseInt(nombreJoueurs.value);
  nomJoueurs.innerHTML = "";

  //boucle qui génère le nombre de champs input en rapport avec le nb de joueurs
  for (let i = 1; i <= nbJoueurs; i++) {
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Nom du joueur " + i;
    input.id = "joueur" + i;
    input.setAttribute("required", "");
    nomJoueurs.appendChild(input);
  }
  buttonEquipeAleatoire.style.display = "block";
}

buttonNbJoueur.onclick = function () {
  if (nombreJoueurs.value % 2 == 0) {
    genererChampsNomJoueurs(nombreJoueurs);
  } else {
    avertissement.innerHTML = "⚠️ Le nombre de joueurs doit être pair";
  }
};

let arrayNomJoueur = [];

function recupererNomJoueur() {
  let inputs = nomJoueurs.querySelectorAll("input");
  for (let input of inputs) {
    if (input.value === "") {
      return false;
    }
  }
  for (let i = 1; i < 20; i++) {
    let joueurNom = document.getElementById("joueur" + i);
    if (joueurNom) {
      arrayNomJoueur.push(joueurNom.value);
    } else {
      break;
    }
  }
  return arrayNomJoueur;
}

let tab = `<table id="tableau1" style="display:none;">
<thead>
    <tr>
        <th id="equipe" colspan="8"></th>
    </tr>
    <tr>
        <th id="player1" colspan="4"></th>
        <th id="player2" colspan="4"></th>
    </tr>
</thead>
<tbody>
    <tr>
        <td colspan="2"><img class="attaquant" src="img/attaquant1.png" alt="attaquant">  Attaquants</td>    
        <td colspan="2"><img class="defenseur" src="img/defenseur1.png" alt="defenseur" >  Défenseur</td>     
        <td colspan="2"><img class="attaquant" src="img/attaquant1.png" alt="attaquant">  Attaquants</td> 
        <td colspan="2"><img class="defenseur" src="img/defenseur1.png" alt="defenseur" >  Défenseur</td>          
    </tr>
    <tr>
        <td>
          <p  id="attaquant1"></p>
          <img id="imgAttaquant1" src="" alt="Image de l'attaquant 1">
        </td>
        <td>
          <p  id="attaquant2"></p>
          <img id="imgAttaquant2" src="" alt="Image de l'attaquant 2">
        </td>
        <td>
          <p  id="defenseur1"></p>
          <img id="imgDefenseur1" src="" alt="Image du defenseur 1">
        </td>
        <td>
          <p  id="defenseur2"></p>
          <img id="imgDefenseur2" src="" alt="Image du defenseur 2">
        </td>
        <td>
          <p  id="attaquant3"></p>
          <img id="imgAttaquant3" src="" alt="Image de l'attaquant 3">
        </td>
        <td>
          <p  id="attaquant4"></p>
          <img id="imgAttaquant4" src="" alt="Image de l'attaquant 4">
        </td>
        <td>
          <p  id="defenseur3"></p>
          <img id="imgDefenseur3" src="" alt="Image du defenseur 3">
        </td>
        <td>
          <p  id="defenseur4"></p>
          <img id="imgDefenseur4" src="" alt="Image du defenseur 4">
        </td>
       
    </tr>
</tbody>
</table>`;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    //générer un nb aléatoire
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  console.log(array);
}

//fonction pour créer les div en fonction du nombre d'équipe
function creationBoxEquipe(array) {
  // Boucle pour générer les divs
  let nombreEquipe = array.length / 2;
  for (let i = 0; i < nombreEquipe; i++) {
    let nomEquipe = document.createElement("div");
    nomEquipe.innerHTML += tab;
    nomEquipe.id = "equipe" + i;
    // Ajout de la div générée au div parent
    equipe.appendChild(nomEquipe);
    equipe.style.display = "block";
  }
}

function equipeAleatoire(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let equipe = document.querySelector("#equipe" + i);
    equipe.innerHTML += tab;
    console.log(equipe);
    equipe.querySelector("#tableau1").style.display = "block";
    equipe.querySelector("#equipe").innerHTML = "Equipe " + (i + 1);
    equipe.querySelector("#player1").innerHTML = array[i * 2];
    equipe.querySelector("#player2").innerHTML = array[i * 2 + 1];
  }
}
function attribuerAttaquantJoueur(array) {
  let arrayAttaquant = [
    "Flores",
    "Sledge",
    "Thatcher",
    "Ash",
    "Thermite",
    "Blitz",
    "IQ",
    "Glaz",
    "Fuze",
    "Twitch",
    "Montagne",
    "Zero",
  ];

  for (let i = 0; i < array.length / 2; i++) {
    let equipe = document.querySelector("#equipe" + i);
    if (i % 2 == 0) {
      shuffleArray(arrayAttaquant);
    }
    equipe.querySelector("#attaquant1").innerHTML =
      arrayAttaquant[0 + (i % 2 != 0 ? 4 : 0)];
    equipe.querySelector("#attaquant2").innerHTML =
      arrayAttaquant[1 + (i % 2 != 0 ? 4 : 0)];
    equipe.querySelector("#attaquant3").innerHTML =
      arrayAttaquant[2 + (i % 2 != 0 ? 4 : 0)];
    equipe.querySelector("#attaquant4").innerHTML =
      arrayAttaquant[3 + (i % 2 != 0 ? 4 : 0)];

    // Mise à jour des images des attaquants
    equipe
      .querySelector("#imgAttaquant1")
      .setAttribute(
        "src",
        `img/attaquant/${arrayAttaquant[0 + (i % 2 != 0 ? 4 : 0)]}.png`
      );

    equipe
      .querySelector("#imgAttaquant2")
      .setAttribute(
        "src",
        `img/attaquant/${arrayAttaquant[1 + (i % 2 != 0 ? 4 : 0)]}.png`
      );

    equipe
      .querySelector("#imgAttaquant3")
      .setAttribute(
        "src",
        `img/attaquant/${arrayAttaquant[2 + (i % 2 != 0 ? 4 : 0)]}.png`
      );

    equipe
      .querySelector("#imgAttaquant4")
      .setAttribute(
        "src",
        `img/attaquant/${arrayAttaquant[3 + (i % 2 != 0 ? 4 : 0)]}.png`
      );
  }
}

function attribuerDefenseurJoueur(array) {
  let arrayDefenseur = [
    "Thunderbird",
    "Smoke",
    "Mute",
    "Castle",
    "Pulse",
    "Jäger",
    "Bandit",
    "Kapkan",
    "Tachanka",
    "Doc",
    "Rook",
    "Skin",
  ];

  for (let i = 0; i < array.length / 2; i++) {
    let equipe = document.querySelector("#equipe" + i);

    if (i % 2 == 0) {
      shuffleArray(arrayDefenseur);
    }

    equipe.querySelector("#defenseur1").innerHTML =
      arrayDefenseur[0 + (i % 2 != 0 ? 4 : 0)];
    equipe.querySelector("#defenseur2").innerHTML =
      arrayDefenseur[1 + (i % 2 != 0 ? 4 : 0)];
    equipe.querySelector("#defenseur3").innerHTML =
      arrayDefenseur[2 + (i % 2 != 0 ? 4 : 0)];
    equipe.querySelector("#defenseur4").innerHTML =
      arrayDefenseur[3 + (i % 2 != 0 ? 4 : 0)];

    // Mise à jour des images des defenseurs
    equipe
      .querySelector("#imgDefenseur1")
      .setAttribute(
        "src",
        `img/defenseur/${arrayDefenseur[0 + (i % 2 != 0 ? 4 : 0)]}.png`
      );

    equipe
      .querySelector("#imgDefenseur2")
      .setAttribute(
        "src",
        `img/defenseur/${arrayDefenseur[1 + (i % 2 != 0 ? 4 : 0)]}.png`
      );

    equipe
      .querySelector("#imgDefenseur3")
      .setAttribute(
        "src",
        `img/defenseur/${arrayDefenseur[2 + (i % 2 != 0 ? 4 : 0)]}.png`
      );

    equipe
      .querySelector("#imgDefenseur4")
      .setAttribute(
        "src",
        `img/defenseur/${arrayDefenseur[3 + (i % 2 != 0 ? 4 : 0)]}.png`
      );
  }
}

function genererEquipeAleatoire() {
  // Vérifier si tous les champs sont remplis
  if (!recupererNomJoueur()) {
    avertissement.innerHTML = "⚠️ Veuillez saisir les noms de tous les joueurs";
    return;
  } else {
    avertissement.innerHTML = ""; // Effacer le message d'avertissement
    // Si tous les champs sont remplis, continuer avec la génération des équipes
    shuffleArray(arrayNomJoueur);
    creationBoxEquipe(arrayNomJoueur);
    equipeAleatoire(arrayNomJoueur);
    attribuerAttaquantJoueur(arrayNomJoueur);
    attribuerDefenseurJoueur(arrayNomJoueur);
    arrayNomJoueur = [];
  }
}

buttonEquipeAleatoire.addEventListener("click", genererEquipeAleatoire);

nombreJoueurs.addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    buttonNbJoueur.click();
  }
});

let myList = document.getElementById("list")
let createLi = document.createElement("li")
let title = document.getElementById("title")

let voiture = {
    "Nom" : "Eggo",
    "imgUrl" : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    "nombresRoues" : 4,
    "Couleur" : "Marron",
    "Contructeur" : "Citroen",
    "Carburant" : "Solaire",
    "nombrePortes" : 3,
    "Autonomie" : "450km",
    "vitesseMaxi" : "120km/h"
};


let createImg = document.createElement("img")
let imgBox = document.getElementById("imgbox")

createImg.title = "Image de la voiture"
createImg.src = voiture.imgUrl;
imgBox.appendChild(createImg);


title.innerHTML = voiture.Nom;
myList.appendChild(createLi).innerHTML = "Nombre de roues : " + voiture.nombresRoues + "<br>";
myList.appendChild(createLi).innerHTML = "Nombre de porte : " + voiture.nombrePortes + "<br>";
myList.appendChild(createLi).innerHTML += "Couleur du véhicule : " + voiture.Couleur + "<br>";
myList.appendChild(createLi).innerHTML += "Contructeur du véhicule : " + voiture.Contructeur + "<br>";
myList.appendChild(createLi).innerHTML += "Carburant du véhicule : " + voiture.Carburant + "<br>";
myList.appendChild(createLi).innerHTML += "Autonomie du véhicule : " + voiture.Autonomie + "<br>";
myList.appendChild(createLi).innerHTML += "vitesseMaxi du véhicule : " + voiture.vitesseMaxi + "<br>";

console.log(voiture);






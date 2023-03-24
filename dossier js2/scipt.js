//fonction anonyme
//function name(Long,larg){
//console.log(Long*larg );
//}
// Une fonction flêché
//const getSurface(Long,larg) =>{
//const getSurface(Long*larg);

// getSurface(15,3)
// getSurface(5,3)
//getSurface(10,3)
//getSurface(15,4)

/*let apprenant= {
    nom: "Doe",
    prenom: "john"
    age: 30,
    clog: function(){
console.log(this.nom)
    }
};*/
console.log(["age de l\'apprenant:"])
// creation de mon constructeur
function jeux(titre,console,annee){
    this.titre=titre;
    this.console=console;
    this.annee=annee;
}

let superMarioBros = new Jeux("Super Mario Bros", "Nintendo", 1985);
let marioBros = new Jeux("Mario Bros", "Nintendo", 1983);
let superMarioBros3 = new Jeux("Super Mario Bros .3", "Nintendo", 1988);
let newSuperU = new Jeux("New Super Mario Bros. U", "Wii", 2012);
let superMario64 = new Jeux("Super Mario 64", "Nintedo 64", 1996);
let superMarioWorld = new Jeux("Super Mario World", "Super Nintendo", 1990);
let superMarioBrosTheLost = new Jeux("Super Mario Bros.: The Lost Levels", "Nintendo", 1986);
let newSuperMarioBrosu = new Jeux("New Super Mario Bros. U Deluxe", "Switch", 2019);
let newsuperMarioBros = new Jeux("New Super Mario Bros", "Wii", 2009);
let superMarioBros2 = new Jeux("Super Mario Bros. 2", "Nintendo", 1988);

console.log(superMarioBros);
console.log(`${superMarioBros.titre} est sorti sur ${superMarioBros.console} en ${superMarioBros.annee}`);
console.log(superMarioBros.titre + " " + "est sorti sur" + " " + superMarioBros.console + " " + superMarioBros.annee)


/*création d'objets dans un objet*/
let maCollection = {...{superMarioBros}, ...{marioBros}, ...{superMarioBros3}, ...{newSuperU}};
/*spread operator*/
console.log(maCollection);

for (const key in maCollection){
    console.log(maCollection[key]);
}
/*key = attribut // maCollection[key]->dynamique on évite maCollection.propriété*/

//méthode map sur objet : pour chaque objet de l' objet maCollection, créer une div qui aura comme h2: nom du jeu, h3: nom de la console, et h3: année de sortie. Div qui doit appraître sur HTML.


/*méthode document.createElement() = créer un nouvel élément
let exo = document.createElement("h2");
précise nom balise en paramètre, élément créé
exo.innerText = "hello";
ajout de texte, inner text car texte et non balises, innerHTML plutôt quand la div va contenir d'autres balises
exo.style.color = "red";
exo.classList.add("maClasse");
modification style, ajout classe
document.querySelector("div").appendChild(exo);
permet d'ajouter la création dans le DOM, méthode qui permet d'ajouter un élément enfant dans un élémnet sélectionné
le nouvel élément est ajouté à la fin
let exo = document.createElement("h2");
exo.innerHTML = "hello";
document.querySelector("div").appendChild(exo);
*/

// let maCollection1 = maCollection.map("titre");
// console.log(maCollection1);
// let affichage = document.createElement("h2");
// affichage.innerHTML = maCollection1;
// document.querySelector("div").appendChild(affichage);
  



let affichage = new Map();
affichage.set(maCollection);
console.log(affichage);
let affichage1 = document.createElement("h2");
affichage1.innerHTML = affichage;
document.querySelector("div").appendChild(affichage1);

/*exercice map*/
const results = querySelector('results')

let jeux1= new jeux("worl of tank","Playstation5","Xbox",2010);
let jeux2= new jeux("Splinter Cell","Playstation5",2022);
let jeux3= new jeux("fynall fantasy VIII",Playstation,1998);
let jeux4= new jeux("Mario kart","Super Nintendo 64",1996);
let jeux5= new jeux("Super Mario 64","Super Nintendo",1996);
let jeux6= new jeux("Super Mario World"," Super Nintendo",1987);
let jeux7= new jeux("Call of dutty",2003);
let jeux8= new jeux("Street Fighter",1987);
let jeux9= new jeux("Sonic Frontiers","PS4","PS5","Xbox",2022);
let jeux10= new jeux("resident evil4",2023);


/* correction exercice 1 du formateur
const results = document.querySelector('.results');

function Jeux(name, console, year) {
    this.name = name;
    this.console = console;
    this.year = year;
}

let jeu1 = new Jeux('Super Mario Bros.', 'NES', 1985);
let jeu2 = new Jeux('Super Mario Bros: The Lost Levels', 'NES', 1986);
let jeu3 = new Jeux('Super Mario Bros. 2', 'NES', 1987);
let jeu4 = new Jeux('Super Mario Bros. 3', 'NES', 1988);
let jeu5 = new Jeux('Super Mario World .', 'Super Nintendo', 1990);
let jeu6 = new Jeux('Super Mario All-Stars.', 'Super Nintendo', 1993);
let jeu7 = new Jeux('Super Mario World 2: Yoshi\'s Island.', 'Super Nintendo', 1995);
let jeu8 = new Jeux('Super Mario 64.', 'Nintendo 64', 1996);
let jeu9 = new Jeux('Super Mario Sunshine.', 'GameCube', 2002);
let jeu10 = new Jeux('Super Mario Bros. Deluxe.', 'Game Boy Color', 1999);

let myCollection = new Object();
myCollection = {...{jeu1}, ...{jeu2}, ...{jeu3}, ...{jeu4}, ...{jeu5}, ...{jeu6}, ...{jeu7}, ...{jeu8}, ...{jeu9}, ...{jeu10}};  

results.innerHTML = Object.values(myCollection).map( jeu =>`
    <div class="card">
        <h2>Titre : ${jeu.name}</h2>
        <h3>Console : ${jeu.console}</h3>
        <h4>Année : ${jeu.year}</h4>
    </div>
`).join(""); */

/* correction exercice 2 du formateur 
var courses = {
 "fruits": [
   { "kiwis": 3,
     "mangues": 4,
     "pommes": null
   },
   { "panier": true },
 ],
 "legumes":
   { "patates": "amandine",
     "figues": "de barbarie",
     "poireaux": false
   }
};*/
// suite de l'exercice
const affichage1 =[jeux1,jeux2,jeux3,jeux4,jeux5,jeux6,jeux7,jeux8,jeux9,jeux10 ];



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

méthode map sur objet : pour chaque objet de l' objet maCollection, créer une div qui aura comme h2: nom du jeu, h3: nom de la console, et h3: année de sortie. Div qui doit appraître sur HTML.
*/

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


// HTML EN ATTENTE DE POUVOIR LE VALIDER
/*<!-- création de la popup1-->
    <div class="box1">
        <a href="#popup" class="button"></a>
    </div>
    <div id="popup1" class="overlay">
        <div class="popup">
            <h2>worl of tank</h2>
            <a href="#" class="cross">&times;</a>
            <p>La plupart des chars du jeu sont tirés de modèles réels ou de prototype (dessins) de la première moitié du XXe siècle, visibles dans les musées du monde entier, mais aussi de projets qui n'ont jamais dépassé le stade du papier. Actuellement, le jeu rassemble des chars soviétiques, allemands, américains, français, anglais, japonais, chinois, tchécoslovaques, suédois, polonais et italiens en ajoutant une "nation hybride" de chars imaginaires.

            Le jeu rencontrant un franc succès, Wargaming.net décide de créer une adaptation pour mobile, nommée World of Tanks Blitz en 2014. La même année, le jeu est porté sur Xbox 360, puis sur Xbox One et sur PlayStation 4, respectivement en 2015 et 2016. </p>
        </div>
    </div>
        <!-- création de la popup2-->
        <div class="box2">
            <a href="popup" class="button"></a>
        </div>
        <div id="popup2" class="overlay">
            <div class="popup">
                <h2>Splinter Cell</h2>
                <a href="#" class="cross">&times;</a>
                <p>Tom Clancy's Splinter Cell est un jeu vidéo d'infiltration développé par Ubisoft Montréal au Québec. La participation de l'écrivain Tom Clancy dans la rédaction du scénario a permis de renforcer l'aspect réaliste de l'histoire, notamment grâce à l'utilisation de thèmes d'actualité.

                    Le héros, Sam Fisher, est un ancien commando de marine de l'US Navy SEALS devenu agent d'élite d'Echelon 3, une entité secrète de la NSA (National Security Agency). Hyper-entraîné dans l'art du déplacement furtif, de l'infiltration et de l'utilisation des technologies de la guerre de l'information, il sait se glisser d'une zone d'ombre à l'autre afin de réaliser les objectifs qui lui ont été assignés (collecte de renseignements, sabotage, etc.), tout en se méfiant des gardes, qui n'hésiteront pas à l'abattre s'il n'est pas assez discret, pour se faufiler derrière eux sans être vu.
                    
                    Le succès du jeu a permis de donner naissance à la série de jeux Splinter Cell écoulés à 32 millions d'exemplaires dans le monde. Un remake utilisant le moteur de jeu Snowdrop est en développement par Ubisoft Toronto. 
                </p>
            </div>
        </div>
        <!-- création de la popup3-->
        <div class="box3">
            <a href="popup" class="button"></a>
        </div>
        <div id="popup3" class="overlay">
            <div class="popup">
                <h2>fynall fantasy VIII</h2>
                <a href="#" class="cross">&times;</a>
                <p>Final Fantasy VIII ファイナルファンタジーVIII (Fainaru Fantajī Eito?) est un jeu vidéo de rôle développé par Square (devenu depuis Square Enix) sous la direction de Yoshinori Kitase et constituant le huitième opus de la série Final Fantasy. Le jeu sort sur PlayStation en 1999 et sur Windows en 2000. Il est également disponible sur le PlayStation Network depuis le 4 février 2010 et par l'entremise de la plate-forme Steam depuis le 5 décembre 2013.

                    Comme son prédécesseur, Final Fantasy VIII s'éloigne des mondes fantastiques traditionnels pour présenter un univers inspiré du monde contemporain. L'histoire met en scène un groupe de jeunes mercenaires, entraînés dans un conflit international, qui cherchent à sauver le monde d'une sorcière manipulant la guerre pour arriver à ses fins. En parallèle, le scénario développe une relation amoureuse entre les deux personnages principaux (représentés sur le logo).
                    
                    Avec plus de 7,8 millions d'unités vendues, Final Fantasy VIII remporte un grand succès commercial, et ce malgré plusieurs critiques vives à l'encontre du système de capacité, jugé trop compliqué. Le titre se différencie de nombreux standards de la série. C'est le premier jeu à utiliser des personnages normalement proportionnés (par opposition au style dit Super Deformed), le premier à utiliser un thème chanté (en écartant One-Winged Angel de Final Fantasy VII) et un des seuls épisodes à dévier du mode traditionnel d'évolution des personnages.
                    
                    En juin 2019, Square Enix annonce le développement de Final Fantasy VIII Remastered sur Nintendo Switch, PlayStation 4, Xbox One et Steam2. Disponible depuis le 3 septembre 2019, cette version propose une refonte graphique de l'ensemble des modèles de personnages et quelques fonctionnalités supplémentaires. En mars 2021, Square Enix lance la version mobile de Final Fantasy VIII Remastered sur iOS et Android3.  
                </p>
            </div>
        </div>
        <!-- création de la popup4-->
        <div class="box4">
            <a href="popup" class="button"></a>
        </div>
        <div id="popup4" class="overlay">
            <div class="popup">
                <h2>Mario kart</h2>
                <a href="#" class="cross">&times;</a>
                <P>Mario Kart est une série de jeux vidéo de course et de combat motorisé produite par Nintendo, adaptée de la série de jeux de plates-formes Super Mario. Débutée en 1992 par Super Mario Kart sur Super Nintendo, la série continue plus de vingt-cinq ans après avec Mario Kart 8 Deluxe sorti le 28 avril 2017 sur Nintendo Switch. Elle compte ainsi un total de huit opus sortis sur les principales consoles Nintendo, et trois titres « hors-série » développés sur borne d'arcade.
                    L'objectif principal de Mario Kart est simple : le joueur doit parcourir le plus rapidement possible des circuits, un certain nombre de fois, dans l'optique de franchir la ligne d'arrivée en premier. Les adversaires sont contrôlés soit par l'ordinateur, soit par d'autres joueurs. Pour se faciliter la tâche, le joueur a la possibilité d'utiliser de nombreux objets. Ceux-ci s'obtiennent en atteignant avec son véhicule des cubes dotés d'un « ? » nommés Boîtes à Objets. Les objets peuvent être offensifs, défensifs ou encore stratégiques, permettant au joueur de bénéficier d'une accélération supplémentaire, ou encore d'enjamber un obstacle pour gagner du temps au tour.
                    De plus, de nombreux modes de jeu supplémentaires ont été créés tout au long de la série, tels que la course en multijoueur et le mode Bataille dans lequel l'objectif est de crever les ballons accrochés au véhicule du joueur adverse, en l'atteignant à l'aide d'objets offensifs. Ce mode de jeu oppose les personnages dans des arènes qui ont la particularité de ne pas avoir de direction fixe, contrairement aux circuits. À l'intérieur, les joueurs y circulent donc librement.
                    Cette série a reçu des critiques globalement très positives de la part de la presse spécialisée. Les sites de compilateurs de notes Metacritic et GameRankings accordent pour chaque épisode des moyennes situées entre 80 et 95 %. L'épisode ayant connu le plus grand succès commercial est Mario Kart 8/Deluxe avec plus de 50 millions de jeux vendus, version originale Wii U et portage Switch inclus. Il est suivi de Mario Kart Wii avec 37,38 millions de copies vendues à travers le monde, et Mario Kart DS avec 23,6 millions de jeux vendus. 
                </P>
            </div>
        </div>
        <!-- création de la popup3-->
        <div class="box4">
            <a href="popup" class="button"></a>
        </div>
        <div id="popup4" class="overlay">
            <div class="popup">
                <h2>Mario kart</h2>
                <a href="#" class="cross">&times;</a>
                <P>Mario Kart est une série de jeux vidéo de course et de combat motorisé produite par Nintendo, adaptée de la série de jeux de plates-formes Super Mario. Débutée en 1992 par Super Mario Kart sur Super Nintendo, la série continue plus de vingt-cinq ans après avec Mario Kart 8 Deluxe sorti le 28 avril 2017 sur Nintendo Switch. Elle compte ainsi un total de huit opus sortis sur les principales consoles Nintendo, et trois titres « hors-série » développés sur borne d'arcade.

                    L'objectif principal de Mario Kart est simple : le joueur doit parcourir le plus rapidement possible des circuits, un certain nombre de fois, dans l'optique de franchir la ligne d'arrivée en premier. Les adversaires sont contrôlés soit par l'ordinateur, soit par d'autres joueurs. Pour se faciliter la tâche, le joueur a la possibilité d'utiliser de nombreux objets. Ceux-ci s'obtiennent en atteignant avec son véhicule des cubes dotés d'un « ? » nommés Boîtes à Objets. Les objets peuvent être offensifs, défensifs ou encore stratégiques, permettant au joueur de bénéficier d'une accélération supplémentaire, ou encore d'enjamber un obstacle pour gagner du temps au tour.
                    
                    De plus, de nombreux modes de jeu supplémentaires ont été créés tout au long de la série, tels que la course en multijoueur et le mode Bataille dans lequel l'objectif est de crever les ballons accrochés au véhicule du joueur adverse, en l'atteignant à l'aide d'objets offensifs. Ce mode de jeu oppose les personnages dans des arènes qui ont la particularité de ne pas avoir de direction fixe, contrairement aux circuits. À l'intérieur, les joueurs y circulent donc librement.
                    
                    Cette série a reçu des critiques globalement très positives de la part de la presse spécialisée. Les sites de compilateurs de notes Metacritic et GameRankings accordent pour chaque épisode des moyennes situées entre 80 et 95 %. L'épisode ayant connu le plus grand succès commercial est Mario Kart 8/Deluxe avec plus de 50 millions de jeux vendus, version originale Wii U et portage Switch inclus. Il est suivi de Mario Kart Wii avec 37,38 millions de copies vendues à travers le monde, et Mario Kart DS avec 23,6 millions de jeux vendus. </P>
            </div>
        </div>
        <!-- création de la popup4-->
        <div class="box4">
            <a href="popup" class="button"></a>
        </div>
        <div id="popup4" class="overlay">
            <div class="popup">
                <h2>Mario kart</h2>
                <a href="#" class="cross">&times;</a>
                <P>Mario Kart est une série de jeux vidéo de course et de combat motorisé produite par Nintendo, adaptée de la série de jeux de plates-formes Super Mario. Débutée en 1992 par Super Mario Kart sur Super Nintendo, la série continue plus de vingt-cinq ans après avec Mario Kart 8 Deluxe sorti le 28 avril 2017 sur Nintendo Switch. Elle compte ainsi un total de huit opus sortis sur les principales consoles Nintendo, et trois titres « hors-série » développés sur borne d'arcade.

                    L'objectif principal de Mario Kart est simple : le joueur doit parcourir le plus rapidement possible des circuits, un certain nombre de fois, dans l'optique de franchir la ligne d'arrivée en premier. Les adversaires sont contrôlés soit par l'ordinateur, soit par d'autres joueurs. Pour se faciliter la tâche, le joueur a la possibilité d'utiliser de nombreux objets. Ceux-ci s'obtiennent en atteignant avec son véhicule des cubes dotés d'un « ? » nommés Boîtes à Objets. Les objets peuvent être offensifs, défensifs ou encore stratégiques, permettant au joueur de bénéficier d'une accélération supplémentaire, ou encore d'enjamber un obstacle pour gagner du temps au tour.
                    
                    De plus, de nombreux modes de jeu supplémentaires ont été créés tout au long de la série, tels que la course en multijoueur et le mode Bataille dans lequel l'objectif est de crever les ballons accrochés au véhicule du joueur adverse, en l'atteignant à l'aide d'objets offensifs. Ce mode de jeu oppose les personnages dans des arènes qui ont la particularité de ne pas avoir de direction fixe, contrairement aux circuits. À l'intérieur, les joueurs y circulent donc librement.
                    
                    Cette série a reçu des critiques globalement très positives de la part de la presse spécialisée. Les sites de compilateurs de notes Metacritic et GameRankings accordent pour chaque épisode des moyennes situées entre 80 et 95 %. L'épisode ayant connu le plus grand succès commercial est Mario Kart 8/Deluxe avec plus de 50 millions de jeux vendus, version originale Wii U et portage Switch inclus. Il est suivi de Mario Kart Wii avec 37,38 millions de copies vendues à travers le monde, et Mario Kart DS avec 23,6 millions de jeux vendus. </P>
            </div>
        </div>
        <!-- création de la popup5-->
        <div class="box5">
            <a href="popup" class="button"></a>
        </div>
        <div id="popup5" class="overlay">
            <div class="popup">
                <h2>Super Mario 64</h2>
                <a href="#" class="cross">&times;</a>
                <P>Super Mario 64 (スーパーマリオ64, Sūpā Mario Rokujūyon?) est un jeu de plates-formes développé par le studio japonais Nintendo Entertainment Analysis and Development sous la direction de Shigeru Miyamoto et publié par Nintendo pour la Nintendo 64. Il sort au Japon et aux États-Unis en 1996 puis en Europe et en Australie en 1997. Épisode de la série Super Mario, il est un des jeux disponibles au lancement de la console5.
                   Il est le premier jeu de la série entièrement en 3D temps réel et propose à ce titre une liberté totale de mouvement, de larges niveaux ouverts, et une 3D polygonale en contraste avec les sprites en 2D des Mario précédents. Il conserve également de nombreux éléments du gameplay et de l'univers des précédents volets.   
                   Le remake amélioré Super Mario 64 DS sort en 2005 sur la console portable Nintendo DS. Le 18 septembre 2020, Super Mario 64 ressort sur Nintendo Switch dans une compilation de trois jeux en 3D de la série Super Mario, Super Mario 3D All-Stars. 
                </P>
            </div>
        </div>
        <!-- création de la popup6-->
        <div class="box6">
            <a href="popup" class="button"></a>
        </div>
        <div id="popup6" class="overlay">
            <div class="popup">
                <h2>Super Mario World</h2>
                <a href="#" class="cross">&times;</a>
                <P>Super Mario World (スーパーマリオワールド, Sūpā Mario Wārudo?), sous-titré Super Mario Bros. 4 au Japon4, est un jeu vidéo de plates-formes développé et édité par Nintendo sur Super Nintendo. Le développement a été assuré par la division Nintendo EAD, dirigée par Shigeru Miyamoto ; ce dernier a réalisé le jeu aux côtés de Takashi Tezuka.
                    L'intrigue du jeu se focalise sur les aventures de Mario et Luigi visant à sauver Dinosaur Land de Bowser, l'antagoniste de la série. Les deux frères doivent parcourir sept mondes différents afin de rétablir l'ordre à Dinosaur Land. Le gameplay du titre est le même que celui des jeux Mario précédents mais introduit de nouveaux objets et des conventions qui se retrouveront dans les jeux suivants.  
                    Super Mario World a eu droit à un succès critique aussi bien que commercial, avec plus de 20 millions d'exemplaires vendus à l'international. Il a été réédité quatre fois : d'abord sur Game Boy Advance sous titré Super Mario Advance 2, puis sur la Console virtuelle, plate-forme de téléchargement de la Wii, sur la Console virtuelle de la Wii U, sur la Console virtuelle de la New Nintendo 3DS, sur la console dédiée SNES mini et sur le catalogue Online de la Nintendo Switch. 
                </P>
            </div>
        </div>
        <!-- création de la popup7-->
        <div class="box7">
            <a href="popup" class="button"></a>
        </div>
        <div id="popup7" class="overlay">
            <div class="popup">
                <h2>Call of dutty</h2>
                <a href="#" class="cross">&times;</a>
                <P>Call of Duty ou COD (en français l'« Appel du devoir ») est une série de jeux vidéo de tir à la première personne sur la guerre. La série est créée en 2003 par le studio Infinity Ward et éditée par Activision. Les épisodes prennent place lors de la Seconde Guerre mondiale ou lors de conflits modernes fictifs. Le dernier épisode de la saga, Call of Duty: Modern Warfare II, est sorti en 2022.
                    Avec plus de 300 millions d'exemplaires écoulés dans le monde en 2019, tous épisodes confondus, elle fait partie des séries de jeux vidéo les plus vendues de l'histoire1.  
                    La série a aussi développé une scène e-sport importante sur les versions consoles, dont le point culminant est le Call of Duty Championship. 
                </P>
            </div>
        </div>
        <!-- création de la popup8-->
        <div class="box8">
            <a href="popup" class="button"></a>
        </div>
        <div id="popup8" class="overlay">
            <div class="popup">
                <h2>Street Fighter</h2>
                <a href="#" class="cross">&times;</a>
                <P>Street Fighter (ストリートファイター, Sutorīto Faitā?) est une série de jeux vidéo de combat en un contre un développée par Capcom, dont le premier épisode est publié en 1987.
                   Street Fighter est l'une des plus populaires séries de jeux vidéo de combat de l'histoire. Elle revendique une large communauté de joueurs et plus de soixante millions d’exemplaires de leurs jeux vendus1, notamment grâce à l'opus phare de la série, Street Fighter II, vendu à plusieurs millions d'exemplaires à lui seul, ayant vendu à lui seul des dizaines de milliers de consoles de jeu[réf. nécessaire], et sorti sur un nombre impressionnant de plates-formes. 
                </P>
            </div>
        </div>
        <!-- création de la popup9-->
        <div class="box9">
            <a href="popup" class="button"></a>
        </div>
        <div id="popup9" class="overlay">
            <div class="popup">
                <h2>Sonic Frontiers</h2>
                <a href="#" class="cross">&times;</a>
                <p>Sonic Frontiers est un jeu vidéo d'aventure et de plateforme développé par Sonic Team et édité par Sega, sorti le 8 novembre 2022 sur Microsoft Windows, PlayStation 4, PlayStation 5, Nintendo Switch, Xbox One et Xbox Series. Il s'agit du premier jeu de la franchise Sonic se déroulant en « zones ouvertes »1,2,3. Ce jeu est sorti l'année du trentième anniversaire de Sonic the Hedgehog 2, jeu où la transformation Super Sonic a vu le jour et qui est fréquemment utilisée dans la partie.
                   Le jeu est distribué à 2,9 millions d'exemplaires depuis son lancement. 
                </p>
            </div>
        </div>
        <!-- création de la popup10-->
        <div class="box10">
            <a href="popup" class="button"></a>
        </div>
        <div id="popup10" class="overlay">
            <div class="popup">
                <h2>resident evil4</h2>
                <a href="#" class="cross">&times;</a>
                <P>Resident Evil 4, sorti au Japon sous le nom Biohazard 4 (バイオハザード4, Baiohazādo Fō?), est un jeu vidéo de tir à la troisième personne de type survival horror, développé par Capcom Production Studio 4 et édité par l'entreprise japonaise Capcom.
                    L'histoire se déroule six ans après les événements de Resident Evil 2. Elle met en scène l'agent Leon S. Kennedy, envoyé en Espagne par le gouvernement américain pour sauver la fille du président des États-Unis, enlevée et retenue en otage par une mystérieuse secte.
                    Le jeu connaît une période de développement longue et mouvementée, durant laquelle plusieurs versions bêta sont annulées. Dans le cadre d'un accord entre Nintendo et Capcom, il sort finalement sur GameCube au début de l'année 2005, où il sera considéré comme l'un des titres majeurs de cette console. Il est ensuite porté sur PlayStation 2 à la fin de l'année, Windows et Wii en 2007, puis réédité successivement sur la plupart des plates-formes du marché, témoignant d'une longévité atypique et d'un succès constamment renouvelé.
                    Unanimement acclamé à sa sortie, il a été qualifié de « jeu de l'année 2005 » par plusieurs sites et magazines spécialisés. Sur GameCube, il est classé 30e jeu le mieux noté de tous les temps par le site GameRankings4.
                    Il marque par ailleurs un profond changement d'approche dans l'une des séries de jeux vidéo les plus populaires depuis les années 1990.
                    Un remake du jeu, simplement intitulé Resident Evil 4, est prévu pour 20235. 
                </P>
            </div>
        </div>*/
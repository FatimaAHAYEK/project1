function swapColumns() {
  const mainList = document.querySelector('.main_list_principale');
  const modulCss = document.querySelector('.modul_css');

  // Store the HTML content of the two boxes
  const mainListContent = mainList.innerHTML;
  const modulCssContent = modulCss.innerHTML;

  // Swap the content
  mainList.innerHTML = modulCssContent;
  modulCss.innerHTML = mainListContent;
}

//  fonction de supprimer  
function supprimerElement(elementId) {

    const element = document.getElementById(elementId);
    if (element) {
     element.remove();
   }
 }
 // Sélectionnez l'élément que vous souhaitez rendre cliquable
 const element_Supprimer = document.getElementById('supprimer');
 // Ajoutez un gestionnaire d'événements de clic pour supprimer l'élément lorsque vous cliquez dessus
 element_Supprimer.addEventListener('click', function() {
   supprimerElement('element_Supprimer');

 });

// fonction pour ajouter les elements et les botton
function ajouterElement(event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains('insere_au_debut') || clickedElement.classList.contains('insere_au_fin')) {
    const parentLi = clickedElement.parentElement;
    const saisie = prompt('Entrez un nouvel élément :');

    if (saisie !== null && saisie.trim() !== '') {
      // Créer un conteneur li pour l'élément et les boutons
      const containerLi = document.createElement('li');

      const nouvelElement = document.createElement('span');
      nouvelElement.textContent = saisie;

      // Créer les boutons à insérer
      const boutonDebut = document.createElement('span');
      boutonDebut.classList.add('insere_au_debut');
      boutonDebut.textContent = '⊷';

      const boutonSupprimer = document.createElement('span');
      boutonSupprimer.id = 'supprimer';
      boutonSupprimer.textContent = '⋫';
      boutonSupprimer.onclick = function () {
        // Appeler la fonction de suppression
        supprimerElement('supprimer'); 
      };

      const boutonFin = document.createElement('span');
      boutonFin.classList.add('insere_au_fin');
      boutonFin.textContent = '⊶';

      // Ajouter les éléments au conteneur li
      containerLi.appendChild(nouvelElement);
      containerLi.appendChild(boutonDebut);
      containerLi.appendChild(boutonSupprimer);
      containerLi.appendChild(boutonFin);

      // Insérer le conteneur li après l'élément existant
      if (clickedElement.classList.contains('insere_au_debut')) {
        parentLi.parentElement.insertBefore(containerLi, parentLi.nextSibling);
      } else {
        parentLi.parentElement.insertBefore(containerLi, parentLi.nextSibling);
      }


     // Ajouter un gestionnaire d'événements pour le nouvel élément
    containerLi.addEventListener('click', function (event) {
    var langage = saisie; // Utilisez le nom de votre nouvel élément
    var informations = dict[langage];

    if (informations) {
      titleElement.textContent = informations[0];
      paragraphElement.textContent = informations[1];
      imageElement.src = informations[2];
      imageElement.alt = langage;
    } else {
      alert("Information non trouvée pour le langage " + langage);
    }
  });

      
    }
  }
}

// affiche les title et definition et l'image des liste 

var dict = {
  "Developpement web": ["Developpement web","le développement web fait référence au processus d’écriture d’un site ou d’une page web dans un langage technique", "/img/download.jpg"],
  "cote client": ["Cote client", "Côté client et côté serveur sont des termes de développement web qui décrivent où s'exécute le code de l'application. ", "/img/client.png"],
  "HTML": ["HTML", "Le HyperText Markup Language, généralement abrégé HTML ou, dans sa dernière version, HTML5, est le langage de balisage conçu pour représenter les pages web", "/img/imghtml.png"],
  "CSS": ["CSS", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML. ", "/img/img1.png"],
  "JS": ["JavaScript", "language de programation pour fait la dynamique ", "/img/download.png"],
  "PHP": ["PHP", "php est language des programation pour dyanamique de web site ", "/img/php.jpg"],
  "Ruby": ["Ruby", "Ruby est un langage de programmation libre. Il est interprété, orienté objet et multi-paradigme. Le langage a été standardisé au Japon en 2011 ", "/img/ruby.jpg"],
  "cote_serveur": ["Cote Serveur", "a programmation côté serveur nous permet plutôt de stocker l'information dans une base de données et de construire et retourner dynamiquement ... ", "/img/serveur.png"],
  "conception": ["Conception", "Le langage  a été pensé pour être un langage de modélisation visuelle commun, et riche ... ", "/img/conception.png"],
  
};

var langagesListe = document.getElementById('list_principale');
var informationsLangageDiv = document.getElementById('informationsLangage');
var titleElement = document.getElementById('title');
var paragraphElement = document.getElementById('paragraph');
var imageElement = document.getElementById('image');


langagesListe.addEventListener('click', function (event) {
  var target = event.target;
  var langage = target.getAttribute('data-langage');

  if (langage) {
    var informations = dict[langage];

    if (informations) {
      titleElement.textContent = informations[0];
      paragraphElement.textContent = informations[1];
      imageElement.src = informations[2];
      imageElement.alt = langage;
    } else {
      alert("Information non trouvée pour le langage " + langage);
    }
  }


  function category() {
    const Element1 = document.getElementById('compter_cat');
    const Element2 = document.getElementById('compter_myenne');
    const Element3 = document.getElementById('compter_moyen_categorie');

    const webpageContent = document.body.textContent || document.body.innerText;
    const trimmedContent = webpageContent.trim();

    const words = trimmedContent.split(/\s+/);
    const categories = words.filter(word => /[A-Za-z]+\.[A-Za-z]+/g.test(word));
    const categoryCount = categories.length;


    const categoryAverage = categoryCount > 0 ? Math.floor(words.length / categoryCount) : 0;

   
    Element1.textContent = words.length;
    Element2.textContent = categoryCount;
    Element3.textContent = categoryAverage;
  }
  document.getElementById('compter').addEventListener('input', category);

  category();

});




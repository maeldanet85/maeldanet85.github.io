function afficheVille() {
  // 1. Récupération de la valeur courante du select, 
  // soit l'id de l'option sélectionnée 
  let nomVilleChoisie = document.getElementById("choixVille").value;

  // 2. RÃ©cupÃ©ration de la liste de toutes les div correspondant 
  // Ã  une div de mÃ©tÃ©o 
  let villes = document.getElementsByClassName("city");

  // 3. Parcours de la liste des div météo 
  // On cache celles qui ne sont pas selectionné.
 
  for (i=0; i<villes.length; i++) {
    if (villes[i].id == nomVilleChoisie) {
      // garder l'element -> ELEMENT.style.display= "";
	  villes[i].style.display= "";
    } else {
	  // cacher l'element visible -> ELEMENT.style.display= "none";
	  villes[i].style.display= "none";
    }
  }
}

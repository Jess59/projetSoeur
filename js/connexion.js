/**************fonction qui montre le formulaire d'inscription*************************/
btnInscription = document.getElementById("montreFormInsc");//id du boutton s'inscrire
formInscription = document.getElementById("inscription"); //id du formulaire Inscription
connexion = document.getElementById("formConnex");//id du formulaire Connexion
//evento cuando damos clic al boton i=s'inscrire
btnInscription.addEventListener("click", inscVisible);

function inscVisible() {
  formInscription.style.visibility = "visible";
  //btnInscription.style.hidden = "true";
  btnInscription.style.display = "none"; // Use "none" to hide the button
  //cache le button S'inscrire quand on clic sur lui
  connexion.style.display= "none"; 
}

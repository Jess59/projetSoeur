btnInscription = document.getElementById("montreFormInsc");
formInscription = document.getElementById("inscription");

btnInscription.addEventListener("click", inscVisible);

function inscVisible() {
    formInscription.style.visibility = "visible";
}
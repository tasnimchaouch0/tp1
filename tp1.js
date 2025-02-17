let n;
var niveau;
do {
    niveau = prompt("Choisir entre facile | intermédiaire | difficile");
} while (niveau !== "facile" && niveau !== "intermédiaire" && niveau !== "difficile");

var c = Math.random(); 
function saisin(i) {
    let nombre;
    do {
        nombre = prompt('Saisir un nombre entre 0 et'+ i);
        if (nombre === null) {
            alert("Saisie annulée.");
            return;
        }
        nombre = Number(nombre);
    } while (isNaN(nombre) || nombre < 0 || nombre > i); 

    alert(nombre);
}


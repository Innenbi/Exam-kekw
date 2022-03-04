// creer btn croix pour chaque evetn
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//croix pour fermer
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//barre sur un click
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

//ajouter un event
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    //if else pour rentrer obligatoirement du texte
    li.appendChild(t);
    if (inputValue === '') {
        alert("Faut écrire un truc chef ??");
    } else {
        document.getElementById("liste").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    //pour appeler la date
    var t2 = document.createTextNode(dateControl.value);

    li.appendChild(t2);
    document.getElementById("liste").appendChild(li);
    //pour appeler la catégorie
    var t3 = document.createTextNode(Catégorie.value);

    li.appendChild(t3);
    document.getElementsByClassName('LibelleOption').appendChild(li);
    //creer la ligne 
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}

//pour gerer la date
var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2022-03-04';

document.getElementById('input[type="date"]')


//liste catégorie
function CreeTableau() {
    this.length = CreeTableau.arguments.length
    for (var i = 0; i < this.length; i++)
        this[i + 1] = CreeTableau.arguments[i]
}

var LibelleOption = new CreeTableau("Catégorie",
    "Travail",
    "Maison",
    "Bouffe",
)

document.write("<FORM>");
document.write("<SELECT NAME='SelectMenu' onChange='AllerA(this.form)'>");
Nombre = LibelleOption.length;
for (var i = 1; i <= Nombre; i++)
    document.write("<OPTION>" + LibelleOption[i]);
document.write('</SELECT>');
document.write('</FORM>');

var Catégorie = document.getElementsByClassName('LibelleOption');
Catégorie.value = 'Maison';
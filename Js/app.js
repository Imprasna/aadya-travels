// let navbar = document.getElementsByClassName('nav-btn');

var navB = document.getElementById('btn');


function disappear() {
    var menus = document.getElementById("menus");
    if(menus.style.marginLeft == "0%") {
        document.getElementById("menus").style.marginLeft = '-100%';
    }
    else {
        document.getElementById("menus").style.marginLeft = '0%';
    }
}
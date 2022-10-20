import { levesek, foetelek, desszertek } from "../etelAdatok.js"

const levesSor = document.getElementById("leves-sor");
const foetelSor = document.getElementById("foetel-sor");
const desszertSor = document.getElementById("desszert-sor");
const osszegSpan = document.getElementById("osszeg");

function feltolt(lista, sor) {
    lista.forEach(etel => {
        let elem = document.createElement("div");
        elem.onclick = function(){kivalaszt()};

        let kep = document.createElement("img");
        kep.src = "../Images/Etelek/" + etel.kep + ".png";
        elem.appendChild(kep);

        let adatokDiv = document.createElement("div");
        adatokDiv.className = "adatok";
        
        let nev = document.createElement("p");
        nev.innerText = etel.nev;
        adatokDiv.appendChild(nev);

        let ar = document.createElement("p");
        ar.innerText = etel.ar;
        ar.className = "ar"
        let ft = document.createElement("span");
        ft.innerText = " Ft";
        ar.appendChild(ft);
        adatokDiv.appendChild(ar);
        
        elem.append(adatokDiv);
        sor.appendChild(elem);
    });
}

function kivalaszt(){
    let elem = window.event.currentTarget;

    let osszeg = parseInt(osszegSpan.innerText);
    let ar = parseInt(elem.querySelector(".ar").innerText);

    if (elem.classList.contains("kivalasztott")) {
        elem.classList.remove("kivalasztott");
        
        osszeg -= ar;
    } else {
        elem.classList.add("kivalasztott");
        osszeg += ar;
    }
    osszegSpan.innerText = osszeg;

    let sor = elem.parentElement;
    if (sor.querySelector('.kivalasztott') != null) {
        sor.classList.add('kivalasztott-sor')
    } else {
        sor.classList.remove('kivalasztott-sor')
    }
}

feltolt(levesek, levesSor);
feltolt(foetelek, foetelSor);
feltolt(desszertek, desszertSor);
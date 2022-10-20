import { levesek, foetelek, desszertek } from "../etelAdatok.js"
import { feltolt } from "../etelekEsItalok.js";

const levesKategoria= document.getElementById("leves-kategoria");
const foetelKategoria= document.getElementById("foetel-kategoria");
const desszertKategoria= document.getElementById("desszert-kategoria");

feltolt(levesek, levesKategoria);
feltolt(foetelek, foetelKategoria);
feltolt(desszertek, desszertKategoria);
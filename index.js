'use strict';

let southAmericanMeals = ["Gallo","Arepas","Pati","Chorreadas","Patacones","Casado"];
let spanishMeals = ["Paella","Tortilla","Bravas","Calamares","Fricandó","Caracoles"];


function removeCostaRicanElement() {
    
    document.getElementById("list1").innerHTML = southAmericanMeals;
    southAmericanMeals.splice(0, 1);
}
function removeSpanishElement() {
    
    document.getElementById("list2").innerHTML = spanishMeals;
    spanishMeals.splice(0, 1);
}
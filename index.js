// curveVertex(mouseX, mouseY);
// MouseEvent
'use strict';

let southAmericanMeals = ["Gallo Pinto","Arepas","Pati","Chorreadas","Patacones","Casado"];
let spanishMeals = ["Paella","Tortilla de Patatas","Patatas Bravas","Calamares en su Tinta","Fricandó","Caracoles a la Llauna"];

// function show() {
//     let x = southAmericanMeals.toString();
//     document.getElementById("list1").innerHTML = x;
// }

function removeCostaRicanElement() {
    
    document.getElementById("list1").innerHTML = southAmericanMeals;
    southAmericanMeals.splice(0, 1);
}
function removeSpanishElement() {
    
    document.getElementById("list2").innerHTML = spanishMeals;
    southAmericanMeals.splice(0, 1);
}
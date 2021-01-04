# SHAPES, HOVER, AND UL
## INTRODUCTION
The project consists of displaying two squares, each one with a different colour. One of the squares needs to change colour and transform it to a circle when the pointer is on the other square. On each shape we place an unordered list (ul) which contains as items (li) the names of different meals. Items can be deleted.
## TECHNOLOGIES USED
Visual Studio Code as the code editor, JavaScript for functionality, HTML for structuring how the web page elements are displayed, CSS for giving style to the elements displayed on the web page.
## CODE EXAMPLES
In JavaScript two variables are defined each one containing an array of items:

let southAmericanMeals = ["Gallo","Arepas","Pati","Chorreadas","Patacones","Casado"];

let spanishMeals = ["Paella","Tortilla","Bravas","Calamares","Fricandó","Caracoles"];

The following function allows us to remove one item (1) of the list (splice) starting from the first item (0):
function removeCostaRicanElement() {
    
    document.getElementById("list1").innerHTML = southAmericanMeals;
    southAmericanMeals.splice(0, 1);
}

In CSS we use the :hover selector to change the blue square to a yellow circle when we put the pointer on the red square (adding ~ to the selector means that when we hover over the square the change will take place on the other square -in this code I have called it circle to make it clear-, not on the red square itself):

.square:hover ~ .circle 

{
  
  background-color: rgb(248, 244, 21);
  
  border-radius: 100%;

}

To change the shape from square to circle we use the border-radius property.

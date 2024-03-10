document.write(
  "<h2>Ques1. Initialize an array with color names. Display the array <br> elements in your browser.</h2>"
);

var colors = ["Red ", "Blue ", "Green ", "Purple ", "Orange "];
document.write("<p> Ans1: " + colors + "</p>");

var inputColor1 = prompt("Which Color You want to add at the begining.");

document.write(
  "<h2> a. Ask the user what color he/she wants to add to the <br> beginning & add that color to the beginning of the array. </h2>"
);
colors = [inputColor1 + "," + " Red ", "Blue ", "Green ", "Purple ", "Orange "];
document.write("<p> Ans: " + colors + "</p>");

document.write(
  "<h2> b. Ask the user what color he/she wants to add to the end <br> & add that color to the end of the array. </h2>"
);
var inputColor2 = prompt("Which Color You want to add at the end");
colors.push(inputColor2);
document.write("<p> Ans: " + colors + "</p>");

document.write(
  "<h2> c. Add two more color to the beginning of the array. </h2>"
);
colors.unshift(" Crimson ", "Seagreen ");
document.write("<p> Ans: " + colors + "</p>");

document.write("<h2> d. Delete the first color in the array <h2>");
colors.shift();
document.write("<p> Ans: " + colors + "</p>");

document.write("<h2> e. Delete the last color in the array.<h2>");
colors.pop();
document.write("<p> Ans: " + colors + "</p>");

document.write(
  "<h2> f. Ask the user at which index he/she wants to add a color </h2>"
);
var inputColor3 = prompt("Enter index number at which you want to add a color");

document.write(
  "<h1> Write a program to store 3 student names in an array.Take <br> another array to store score of these three students. <br> Assume that total marks are 500 for each student, display <br> the scores & percentages of students like: </h1>"
);

var studentNames = ["Hamza", "Noman", "Ali"];
var studentScores = [300, 400, 450];

var hamzaPercentage = (studentScores[0] / 500) * 100;
var nomanPercentage = (studentScores[1] / 500) * 100;
var aliPercentage = (studentScores[2] / 500) * 100;

document.write("<h2> Result: </h2>");
document.write(
  "<p> Score Of " +
    studentNames[0] +
    " is " +
    studentScores[0] +
    ". Percentage: " +
    hamzaPercentage +
    "% </p>"
);
document.write(
  "<p> Score Of " +
    studentNames[1] +
    " is " +
    studentScores[1] +
    ". Percentage: " +
    nomanPercentage +
    "% </p>"
);
document.write(
  "<p> Score Of " +
    studentNames[2] +
    " is " +
    studentScores[2] +
    ". Percentage: " +
    aliPercentage +
    "% </p>"
);

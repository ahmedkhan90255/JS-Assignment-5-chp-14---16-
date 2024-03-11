document.write(
  "<h1> Write a program to store phone manufacturers (Apple,<br> Samsung, Motorola, Nokia, Sony & Haier) in an array. <br>Display the following dropdown/select menu in your <br> browser using document.write() method </h1>"
);

var phoneCompanies = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(
  "<select><option>Phone Manufacturers</option><option>" +
    phoneCompanies[0] +
    "</option>" +
    "<option>" +
    phoneCompanies[1] +
    "</option>" +
    "<option>" +
    phoneCompanies[2] +
    "</option>" +
    "<option>" +
    phoneCompanies[3] +
    "</option>" +
    "<option>" +
    phoneCompanies[4] +
    "</option>" +
    "<option>" +
    phoneCompanies[5] +
    "</option></select>"
);

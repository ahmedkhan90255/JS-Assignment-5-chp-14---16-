document.write(
  "<h1> Create a new array. Store values one by one in such a way <br> that you can access the values in the order in which they <br> were stored. (FIFO-First In First Out)</h1>"
);

var computerDevices = ["Keyboard", "Mouse", "CPU", "Monitor"];

document.write("<h2>Devices: " + computerDevices + "</h2>");

document.write("<h2> Out:<h2>");
document.write("<p>" + computerDevices[0] + "</p>");

document.write("<h2> Out:<h2>");
document.write("<p>" + computerDevices[1] + "</p>");

document.write("<h2> Out:<h2>");
document.write("<p>" + computerDevices[2] + "</p>");

document.write("<h2> Out:<h2>");
document.write("<p>" + computerDevices[3] + "</p>");

document.write("<h1> Now Last in First Out");

document.write("<h2> Out:<h2>");
document.write("<p>" + computerDevices[3] + "</p>");

document.write("<h2> Out:<h2>");
document.write("<p>" + computerDevices[2] + "</p>");

document.write("<h2> Out:<h2>");
document.write("<p>" + computerDevices[1] + "</p>");

document.write("<h2> Out:<h2>");
document.write("<p>" + computerDevices[0] + "</p>");

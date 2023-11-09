let testp = document.createElement("p");

testp.style.cssText = "color: blue";

testp.textContent = "This is a test to load html elements in Javascript"

let bodyElement = document.querySelector("body");

bodyElement.parentNode.insertBefore(testp, bodyElement);
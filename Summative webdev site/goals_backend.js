//JS backend for goals page

//Page Heading

let testp = document.createElement("h2");

testp.textContent = "Goals";

let bodyElement = document.querySelector("h2");

bodyElement.parentNode.insertBefore(testp, bodyElement);

/// Page logo
var image = document.createElement('img');
image.src = "Website_Logo.png"
image.id = "logo"
document.getElementById('logo').appendChild(image)


/// Navigation buttons

var h_button = document.createElement("button")
h_button.textContent = "Home"
document.getElementById('home_button').appendChild(h_button)

var a_button = document.createElement("button")
a_button.textContent = "About Us"
document.getElementById('about_button').appendChild(a_button)

var g_button = document.createElement("button")
g_button.textContent = "Goals"
document.getElementById('goals_button').appendChild(g_button)

var s_button = document.createElement("button")
s_button.textContent = "Sign Up"
document.getElementById('signup_button').appendChild(s_button)

/// Background split


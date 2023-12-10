//// JS backend for goals page //// 

//Page Heading

let headp = document.createElement("header");

headp.textContent = "SAC Goals";

headp.id = "goals_header";

let bodyElement = document.querySelector("header");

bodyElement.parentNode.insertBefore(headp, bodyElement); //Here, the element is inserted before its parent node. This is useful when creating the very first object on the HTML page.

//Navigation Buttons
texts = ["Home", "Goals", "Team", "Sign-Up"] 
hrefs = ["index.html", "goals.html", "team.html", "signup.html"]
const parentob = document.getElementsByClassName('navigation');

[...parentob].forEach((parent, i) => { //To keep the navigation buttons having the same styling, we want to loop through the same class name of 'navigation'. We will then create an anchor tag that will be part of the header.
    var navbutton = document.createElement("a")
    navbutton.textContent = texts[i] //We also need to use an array to iterate through and assign each anchor tag with a corrasponding text and href.
    navbutton.href = hrefs[i]
    parent.appendChild(navbutton) //Finally we append the child to its parent class - navbutton
});

// Page title
var pg_title = document.createElement("title")
pg_title.textContent = "UN Goals"
document.getElementById('title_id').appendChild(pg_title)

//Show and hide button creation

var hide_showbutton = document.createElement("button") //The creation of the buttons throughout the JS document are very similar. We create an element of "button" and assign it to a variable. In this case "hide_showbutton"
hide_showbutton.textContent = "Toggle Navigation Options" //We create some text content for the button
document.getElementById('button_div').appendChild(hide_showbutton)//We will travel the HTML DOM and get the element with the id of 'button_div'. We will then append the variable we created to it 
let butt = document.querySelector("#button_div"); //We can also add an event listenter through using a query selector that a variable can listen and trigger a function when clicked on. This will be put on the button.
butt.addEventListener("click", ShowHide);

//Acessibility show/hide Button creation

var access_toggle = document.createElement("button")
access_toggle.textContent="Double Click for Accessibility Features"
document.getElementById("access").appendChild(access_toggle)
let butt2 = document.querySelector("#access");
butt2.addEventListener("click", ShowHide2)

//Acessibility Buttons Creation

texts = ["Enlarge Text", "High Contrast Switch"]
const accessbutt = document.getElementsByClassName('bility');

[...accessbutt].forEach((parent, i) => {
    var accbutton = document.createElement("button")
    accbutton.textContent = texts[i]
    accbutton.href = hrefs[i]
    if (accbutton.textContent == "Enlarge Text"){
        accbutton.addEventListener("click", EnlargeFunc)
    } else {
        accbutton.addEventListener("click", ColourFunc)
    };
    parent.appendChild(accbutton)
});


// Footer

let footp = document.createElement("footer")

footp.textContent = "Copyright 2023 James Barnard, Liam Barry and Laurence Beven"

footp.id = "footer"

let footerElement = document.querySelector("#section-center")

footerElement.insertAdjacentElement("afterend", footp)

///The Main Goals Content.

class Goal{ //Here is a bit of object oriented programming. We have a class with a constructor that consists of all the attributes of the main goals page content.
    constructor(id, goal_title, goal_desc, goal_catagory, img, alt_text){
        this.id = id;
        this.goal_title = goal_title;
        this.goal_desc = goal_desc;
        this.goal_catagory = goal_catagory;
        this.img = img;
        this.alt_text = alt_text
    }
}

//Here we are creating instances (ES6 Pseudoclassical) of Goal. Each has given properties matching the constructor's parameters. 
const goal1 = new Goal (1, "No Poverty", "People and societies cannot be developed in a sustainable way without reducing or eliminating poverty. There are 500,000,000+ people in the world living in poverty. The development goal target escape rate of poverty is 2.5 people/sec. It currently stands at only 0.4 people/sec. In 2020 it stood at -91.1... ", "UN Goal 1", "goal1.png", "A girl in poverty with a homely sofa chair.");
const goal2 = new Goal(2, "Zero Hunger", "There are many people in the world with poor or worse food security. Food security can be defined as both the access to food and the availaibility of quality food. Nearly 1 in 10 don't sufficiently eat daily.", "UN Goal 2", "goal2.png", "A group of hungry children, looking through a window hole in a house.");
const goal3 = new Goal (3, "Decent Work and Economic Growth", "How can both poverty and hunger be prevented? Many people around the world do not have access or training for decent quality jobs that pay enough for people. Providing work can be fufilling to many people and improve peoples material and mental lives. It is vital to find the correct jobs for people. This can have a benefit of economic growth, helping propel nations to achieve sustainable development.", "UN Goal 8", "goal3.png", "Two women working together in an office.");
const goals = []; //These are then appended to an empty array
goals.push(goal1, goal2, goal3);

//console.log(goals)
//console.log(goals.length);

goals.map((element) => {
    console.log(`element ${element.id}`) //Here we can check each element that we will use. A map object is made of keys and values in pairs. This correlates to the objects that we have.
})
 
const page_center = document.querySelector("#section-center");

//function to load the content of HTML

function DynamicLoad(){ //In this function we will return the general HTML layout of our page and fill it with what we goals we defined.
    let display_element = goals.map( (item) => {
        return `
        <article class = "element">
        <img src = ${item.img} alt=${item.goal_catagory} id=${item.id} class = "goal_pic"/>
        <div class = "goal-info">
        <div class = "goal-header">
            <h4>${item.goal_title}</h4>
        </div>
        <br>
            <p class = "goal-desc">
            ${item.goal_desc}
            </p>
        </div>
        </article>
        `;
    }); //We have used the $ sign to fix some of the properties of goal to the HTML.

    display_element = display_element.join(""); //We need to use the join method to add all of the element in the array into a string in order to display it on the web page.
    console.log(display_element);
    page_center.innerHTML = display_element; //We can use .innerHTML to get the object reference. This is for the dynamic alt text for visually impaired users.
    page_center.addEventListener("click", ClickGoal);

};

window.addEventListener("DOMContentLoaded", DynamicLoad, false); //Finally here we can load the DOM content. We will use our function dynamic load and set it to false. This will render the data on the page when the document has been loaded and analysed.

function ClickGoal(check){ //This function is used for displying the alt text when a picture is clicked. This is useful for visually impaired users. 
    console.log(check.currentTarget);
    console.log(check.target);
    if (check.currentTarget != check.target){ 
        const targetID = check.target.id;
        console.log(targetID);
        const item = goals.find( i => i.id == targetID); //returns the value of the target clicked on ID. 
        if (typeof item !== "undefined"){ // If the target is not undefined then the system will give an alt text alert.
            alert(item.alt_text);
        }
    }
}
//These 2 functions are used to show/hide the nav bar or accessibility buttons through changing the CSS styling between none and block.
function ShowHide() {
    if (document.getElementById("navbuttons").style.display == "none"){
        document.getElementById("navbuttons").style.display = 'block';
    } else{
        document.getElementById("navbuttons").style.display = 'none';
    };
}

function ShowHide2() {
    if (document.getElementById("access_buttons").style.display == "none") {
        document.getElementById("access_buttons").style.display = "block";
    } else {
        document.getElementById("access_buttons").style.display = "none"; 
    };
}

function ColourFunc() { //This function inverts the background and text colours - changing its contrast.
    console.log("Colour Func run")
    const goal_header = document.querySelectorAll('.goal-header > h4'); //Here we select botht the dynamically generated goal headers and description.
    const goal_text = document.querySelectorAll('.goal-desc');
    if (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "black"; //Next we will check if the bg colour is white and change it to black
        document.getElementById("section-center").style.backgroundColor = "black";
        goal_header.forEach(element => { //for each element of the rendered data we will change the text colour to white.
            element.style.color = 'white';
        });
        goal_text.forEach(element => {
            element.style.color = "white";
        });
    } else { //Here we do the opposite if the background is black we will revert all the colours back to their default values.
        document.body.style.backgroundColor = "white";
        document.getElementById("section-center").style.backgroundColor = "white";
        goal_header.forEach(element => {
            element.style.color = 'black';
        });
        goal_text.forEach(element => {
            element.style.color = "black";
        });
    }

}
function EnlargeFunc() { //This function does the same as the colour switching but instead switches between the 2 font sizes of "medium" (default value) and x-large (extra large)
    const goal_header = document.querySelectorAll('.goal-header > h4');
    const goal_text = document.querySelectorAll('.goal-desc');
    if (document.body.style.fontSize == "medium") {
        console.log("Enlarge func run")
        document.body.style.fontSize = "x-large";
        document.getElementById('section-center').style.fontSize = "x-large";
        goal_header.forEach(element => {
            element.style.fontSize = "x-large";
        })
        goal_text.forEach(element => {
            element.style.fontSize = "x-large"
        })
    } else {
        document.body.style.fontSize = "medium";
        document.getElementById('section-center').style.fontSize = "medium";
        goal_header.forEach(element => {
            element.style.fontSize = "large";
        })
        goal_text.forEach(element => {
            element.style.fontSize = "medium"
        });
    }
    
};





// By Laurence Beven
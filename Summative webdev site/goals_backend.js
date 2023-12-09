//JS backend for goals page

//Page Heading

let headp = document.createElement("header");

headp.textContent = "SAC Goals";

headp.id = "goals_header";

let bodyElement = document.querySelector("header");

bodyElement.parentNode.insertBefore(headp, bodyElement);

//Navigation Buttons
texts = ["Home", "Goals", "Team", "Sign-Up"]
hrefs = ["index.html", "goals.html", "team.html", "signup.html"]
const parentob = document.getElementsByClassName('navigation');

[...parentob].forEach((parent, i) => {
    var navbutton = document.createElement("a")
    navbutton.textContent = texts[i]
    navbutton.href = hrefs[i]
    parent.appendChild(navbutton)
});



//Show and hide button creation

var hide_showbutton = document.createElement("button")
hide_showbutton.textContent = "Toggle Navigation Options"
document.getElementById('button_div').appendChild(hide_showbutton)
let butt = document.querySelector("#button_div");
butt.addEventListener("click", ShowHide);

//Acessibility show/hide Button creation

var access_toggle = document.createElement("button")
access_toggle.textContent="Accessibility Feature"
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

class Goal{
    constructor(id, goal_title, goal_desc, goal_catagory, img, alt_text){
        this.id = id;
        this.goal_title = goal_title;
        this.goal_desc = goal_desc;
        this.goal_catagory = goal_catagory;
        this.img = img;
        this.alt_text = alt_text
    }
}

const goal1 = new Goal (1, "No Poverty", "People and societies cannot be developed in a sustainable way without reducing or eliminating poverty. There are 500,000,000+ people in the world living in poverty. The development goal target escape rate of poverty is 2.5 people/sec. It currently stands at only 0.4 people/sec. In 2020 it stood at -91.1... ", "UN Goal 1", "goal1.png", "A girl in poverty with a homely sofa chair.");
const goal2 = new Goal(2, "Zero Hunger", "There are many people in the world with poor or worse food security. Food security can be defined as both the access to food and the availaibility of quality food. Nearly 1 in 10 don't sufficiently eat daily", "UN Goal 2", "goal2.png", "A group of hungry children, looking through a window hole in a house.");
const goal3 = new Goal (3, "Decent Work and Economic Growth", "How can both poverty and hunger be prevented? Many people around the world do not have access or training for decent quality jobs that pay enough for people. Providing work can be fufilling to many people and improve peoples material and mental lives. It is vital to find the correct jobs for people. This can have a benefit of economic growth, helping propel nations to achieve sustainable development.", "UN Goal 8", "goal3.png", "Two women working together in an office.");
const goals = [];
goals.push(goal1, goal2, goal3);

console.log(goals)
console.log(goals.length);

goals.map((element) => {
    console.log(`element ${element.id}`)
})
 
const page_center = document.querySelector("#section-center");

//function to load the content of HTML

function DynamicLoad(){
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
    });

    display_element = display_element.join("");
    console.log(display_element);
    page_center.innerHTML = display_element;
    page_center.addEventListener("click", ClickGoal);

};

window.addEventListener("DOMContentLoaded", DynamicLoad, false);

function ClickGoal(check){
    console.log(check.currentTarget);
    console.log(check.target);
    if (check.currentTarget != check.target){
        const targetID = check.target.id;
        console.log(targetID);
        const item = goals.find( i => i.id == targetID);
        if (typeof item !== "undefined"){
            alert(item.alt_text);
        }
    }
}
// function myFunction() {
//     let links = document.querySelector(".mainNav");
//     links.classList.toggle("button_div")
// }
function ShowHide() {
    if (document.getElementById("navbuttons").style.display == "none"){
        document.getElementById("navbuttons").style.display = 'block';
    } else{
        document.getElementById("navbuttons").style.display = 'none';
    };
}

function ShowHide2() {
    if (document.getElementById("access_buttons").style.display == "block") {
        document.getElementById("access_buttons").style.display = "none";
    } else {
        document.getElementById("access_buttons").style.display = "block"; 
    };
}

function ColourFunc() {
    console.log("Colour Func run")
    const goal_header = document.querySelectorAll('.goal-header > h4');
    const goal_text = document.querySelectorAll('.goal-desc');
    if (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "black";
        document.getElementById("section-center").style.backgroundColor = "black";
        goal_header.forEach(element => {
            element.style.color = 'white';
        });
        goal_text.forEach(element => {
            element.style.color = "white";
        });
    } else {
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
function EnlargeFunc() {
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







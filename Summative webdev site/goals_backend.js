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

var hide_showbutton = document.createElement("button")
hide_showbutton.textContent = "Toggle Navigation Options"
document.getElementById('hideshow').appendChild(hide_showbutton)
let hs = document.querySelector("hideshow")
hideshow.addEventListener("click", ToggleFunction())

//



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
        console.log( item.goal_title );
        if (typeof item !== "undefined"){
            alert(item.alt_text);
        }
    }
}

function ToggleFunction() {
    var butt = document.getElementById("navbuttons");
    if (butt.style.display === "none") {
        butt.style.display = "block";
    } else{
        butt.style.display = "none";
    }
};
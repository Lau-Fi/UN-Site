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

/////////////////


///The Main Goals Content.

class Goal{
    constructor(id, goal_title, goal_desc, goal_catagory, img){
        this.id = id;
        this.goal_title = goal_title;
        this.goal_desc = goal_desc;
        this.goal_catagory = goal_catagory;
        this.img = img;
    }
}

const goal1 = new Goal (1, "No Poverty", "People and societies cannot be developed in a sustainable way without reducing or eliminating poverty. There are 500,000,000+ people in the world living in poverty. The development goal target escape rate of poverty is 2.5 people/sec. It currently stands at only 0.4 people/sec. In 2020 it stood at -91.1... ", "UN Goal 1", "goal1.png");
const goal2 = new Goal(2, "Zero Hunger", "There are many people in the world with poor or worse food security. Food security can be defined as both the access to food and the availaibility of quality food. Nearly 1 in 10 don't sufficiently eat daily", "UN Goal 2", "goal2.png");
const goal3 = new Goal (3, "Decent Work and Economic Growth", "How can both poverty and hunger be prevented? Many people around the world do not have access or training for decent quality jobs that pay enough for people. Providing work can be fufilling to many people and improve peoples material and mental lives. It is vital to find the correct jobs for people. This can have a benefit of economic growth, helping propel nations to achieve sustainable development.", "UN Goal 8", "goal3.png");
const goals = [];
goals.push(goal1, goal2, goal3);

console.log(goals)
console.log(goals.length);

const page_center = document.querySelector("#section-center");

//function to load the content of HTML
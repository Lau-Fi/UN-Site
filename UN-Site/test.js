// Load the header
const navBar = document.querySelector("header");
function loadHeader() {
    let displayContent =
    `
    <h2>Sustainability Advisory Committee</h2>
        <nav>
            <ul>
                <li class="navigation"><a href="index.html">Home</a></li>
                <li class="navigation"><a href="goals.html">Goals</a></li>
                <li class="navigation active"><a href="team.html">Team</a></li>
                <li class="navigation"><a href="signup.html">Sign-up</a></li>
            </ul>
        </nav>
    `;

    navBar.innerHTML = displayContent;
}

window.addEventListener("DOMContentLoaded", loadHeader, false);

// Load the footer
const foot = document.querySelector("footer");
let newp = document.createElement("p");
newp.textContent = "Copyright 2023 James Barnard, Liam Barry and Laurence Beven";
foot.appendChild(newp);

// Object for the content
class information {
    constructor (type, className, source, title, content){
        this.type = type;
        this.className = className;
        this.source = source;
        this.title = title;
        this.content = content;
    }
}

const infoOne = new information("img", "photo", "images/placeholder.jpg", "UN Sustainability Plan", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
const infoTwo = new information("iframe", "video", "https://www.youtube.com/embed/0XTBYMfZyrM", "THink of title for this bit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
const info = [];
info.push(infoOne, infoTwo);

// console.log(info);

const section = document.querySelector("#home-info");
function loadPageContent() {   
    let displayItem = info.map( (item) => {
        return `
        <article id="info">
            <${item.type} class="${item.className}" src="${item.source}"></${item.type}>
            <h2>${item.title}</h2>
            <p class="info-para">${item.content}</p>
        </article>
        `;
    })
    displayItem = displayItem.join("");
    console.log(displayItem);
    section.innerHTML = displayItem;
}

window.addEventListener("DOMContentLoaded", loadPageContent, false);



// Load the header
const navBar = document.querySelector("header");
function loadHeader() {
    let displayContent =
    `
    <h2>Sustainability Advisory Committee</h2>
        <nav>
            <ul>
                <li class="navigation active"><a href="index.html">Home</a></li>
                <li class="navigation"><a href="test.html">Goals</a></li>
                <li class="navigation"><a href="team.html">Team</a></li>
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
    constructor (type, className, source, title, content, link, linkText){
        this.type = type;
        this.className = className;
        this.source = source;
        this.title = title;
        this.content = content;
        this.link = link;
        this.linkText = linkText;
    }
}
// https://international-partnerships.ec.europa.eu/policies/sustainable-development-goals_en - img
const infoOne = new information("img", "photo", "images/SustainabilityGoals.png", "UN Sustainability Plan", "In 2015, all United Nations Member States adopted the 2030 Agenda for Sustainable Development, which provides a shared blueprint for peace and prosperity for people and the planet. It is made up of 17 Sustainable Development Goals, ranging from Quality Education to Affordable and Clean Energy. The Sustainable Development Goals are built on decodes of work by countries and the UN to create a better world for both now and the future.", "https://www.un.org/sustainabledevelopment/sustainable-development-goals/", "Click here to read more.");
const infoTwo = new information("iframe", "video", "https://www.youtube.com/embed/0XTBYMfZyrM", "In 2023...", "In the 2023 review of the Sustainable Development Goals, it was found that incremental and fragmented change will be insufficient to achieve the goals by the 2030 deadline. The report highlights key changes needed in order to try and accomodate the deadline. It must be a team effort achieved globally.", "https://sdgs.un.org/gsdr/gsdr2023#:~:text=The%20Global%20Sustainable%20Development%20Report%202023&text=Implementation%20of%20the%202030%20Agenda,country%2C%20society%20or%20person%20behind.", "Click here to read the full report.");
const info = [];
info.push(infoOne, infoTwo);

const section = document.querySelector("#home-info");
function loadPageContent() {   
    let displayItem = info.map( (item) => {
        return `
        <article id="info">
            <h2 id="info-header">${item.title}</h2>
            <${item.type} class="${item.className}" src="${item.source}"></${item.type}>
           
            <p class="info-para">${item.content} <a href="${item.link}">${item.linkText}</a> </p>
            
        </article>
        `;
    })
    displayItem = displayItem.join("");
    console.log(displayItem);
    section.innerHTML = displayItem;
}

window.addEventListener("DOMContentLoaded", loadPageContent, false);




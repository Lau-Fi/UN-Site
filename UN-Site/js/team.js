// Create objects for each member to repeatedly create the html elements
class TeamMember {
    constructor(id, name, role, responsibility, contributions, bio, photo){
        this.id = id;
        this.name = name;
        this.role = role;
        this.responsible = responsibility;
        this.contributions = contributions;
        this.bio = bio;
        this.photo = photo;
    }
}

const teamMember1 = new TeamMember(1, "Liam Barry", "role", "Merge Code", "Navigation, Home and Team pages", "I am a Computer Science student studying at UEA. As a career, I would like to work in software engineering. Outside of computing, I enjoy sport, particularly football, F1 and triathlons.", "images/placeholder.jpg");
const teamMember2 = new TeamMember(2, "James Barnard", "role", "Merge Code", "SignUp Page Code", "Likes games", "images/placeholder.jpg");
const teamMember3 = new TeamMember(3, "Laurence Beven", "role", "Merge Code", "idk", "Likes football", "images/placeholder.jpg");


const members = [];
members.push(teamMember1);
members.push(teamMember2);
members.push(teamMember3);

console.log(members.length);

//ignore
members.map((item) => {
    console.log(`item ${item.id}`); //uses backtick ( ` );
    console.log(item.name);
})

const infoSection = document.querySelector("#info-section");

function loadContent() {
    let displayItem = members.map( (item) => {
        return `
        <article class="item-split">
        <img src=${item.photo} alt=${item.name} id=${item.id} class="photo"/>
        <div class="item-info">
        <div class="item-header">
        <h4>${item.name}</h4>
            <h4 class="role">${item.role}</h4>
            <h5 class="contribution">${item.contributions}</h5>
        </div>
            <p class="item-text">
            ${item.bio}
            </p>
        </div>
        </article>
        `;
    })
    displayItem = displayItem.join("");
    console.log(displayItem);
    infoSection.innerHTML = displayItem;
}

window.addEventListener("DOMContentLoaded", loadContent, false);
// Create objects for each member to repeatedly create the html elements
class TeamMember {
    constructor(id, name, role, contributions, bio, photo){
        this.id = id;
        this.name = name;
        this.role = role;
        this.contributions = contributions;
        this.bio = bio;
        this.photo = photo;
    }
}

const teamMember1 = new TeamMember(1, "Liam Barry", "Team Member", "Navigation, Home and Team pages", "Liam is a Computer Science student studying at UEA. As a career, he would like to work in software engineering. Outside of computing, he enjoys sport, particularly football, F1 and triathlons.", "images/IMG_LMB.jpg");
const teamMember2 = new TeamMember(2, "James Barnard", "Team Member", "SignUp Page and Combining Code", "James is a Computer Science student at UEA. He hopes to find a career as a programmer after finishing his studies. Outside of study, he enjoys board and computer games, video essays, and media dissection.", "images/IMG_JB.jpg");
const teamMember3 = new TeamMember(3, "Laurence Beven", "Team Leader", "Goals page and documentation", "Laurence is a Business Information Systems undergraduate, interested in the interaction between people and software for many years. He has managed to provide a great working environment in order to fulfill the project.", "images/IMG_LB.jpg");


const members = [];
members.push(teamMember1);
members.push(teamMember2);
members.push(teamMember3);

console.log(members.length);

const infoSection = document.querySelector("#info-section");

function loadContent() {
    let displayItem = members.map( (item) => {
        return `
        <article class="item-split">
        <img src=${item.photo} alt=${item.name} id=${item.id} class="photo"/>
        <div class="item-info">
        <div class="item-header">
        <h4>${item.name}</h4>
            <h4 class="role">Role:\n${item.role}</h4>
            <h5 class="contribution">Contribution:\n${item.contributions}</h5>
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
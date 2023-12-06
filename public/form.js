// get the element for the content
const main = document.querySelector("main")

// load the content into the file
function loadContent(){
    let pageContent = `<form>
            <fieldset>
                <legend>Sign-up</legend>
                <label>First Name*:<input id="fname" type="text" placeholder="first name" required></label>
                <label>Last Name*:<input id="lname" type="text" placeholder="last name" required></label>
                <label>Email*:<input id="email" type="text" placeholder="email" required></label>
                <label>Comments*:<input id="comment" type="text" placeholder="comments" required></label>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
        
        <div id="submitted">
        
        </div>`;
    
    main.innerHTML = pageContent;

    let form = main.querySelector("form")

    form.addEventListener("submit", processSubmit, false);

    function processSubmit(e){
        e.preventDefault();

        const fname = document.querySelector("#fname")
        const lname = document.querySelector("#lname")
        const email = document.querySelector("#email")
        const comment = document.querySelector("#comment")

        let message = {
            "fname": fname.value,
            "lname": lname.value,
            "email": email.value,
            "comment": comment.value
        }

        const serializedMessage = JSON.stringify(message)

        function onTextReady(text){
            console.log(text);
            alert(text);
        }

        function onResponse(response){
            return response.text();
        }

        function err() {
            alert("Something went wrong please try again.")
        }

        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: serializedMessage
        }

        fetch(`http://localhost:3000/form`, fetchOptions)
        .then(onResponse, err)
        .then(onTextReady);
    }
}

// call the function to load the content of the web page
window.addEventListener("DOMContentLoaded", loadContent, false)



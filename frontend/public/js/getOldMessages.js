import axios from "axios";
let messages = [];

const getMessages = async ()=> {
    try {

        const { data } = await axios.get("http://localhost:3000")

        messages = data

    } catch (err) {
        console.log(err.message)
    }

    render();
    setTimeout(getMessages, 3000);
    
}

const render  = ()=> {
    const ul = document.getElementById("messages");
    ul.innerHTML = "";

        messages.forEach(e => {
            ul.innerHTML += `<li>${e.nom}:<br>${e.message}</li><br>`
        });

        
}

getMessages();
import axios from "axios";

const form = document.querySelector("form");

form.addEventListener("submit", async (e)=> {

    e.preventDefault();
    const { data } = await axios.post("http://localhost:3000/newMessage", {
    nom: e.target.elements.nom.value,
    message: e.target.elements.message.value

    })
})
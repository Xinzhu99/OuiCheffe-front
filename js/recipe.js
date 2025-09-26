const API_URL = "http://localhost:3001";

const paramString = window.location.search;
let idParams = new URLSearchParams(paramString);
console.log(idParams);
let id = idParams.get("id");

const loadRecipe = async (id) => {
    try {
        const response = await fetch(`${API_URL}/dishes/${id}`);
        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.error("Problème de connexion au serveur", error)
    }
};
loadRecipe(id)
const URL = "https://rickandmortyapi.com/api/character/";

const getData = async(id) => {
    const APIURL = id ? `${URL}${id}` : URL;

    try {
        const response = await fetch(APIURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Error Fetch ${error}`);
    }
};

export default getData;
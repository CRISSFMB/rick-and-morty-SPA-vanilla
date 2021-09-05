import getData from "../utils/getData";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const SingleCharactherScreen = async () => {
  const id = getHash();

  const itemData = await getData(id);

  const { image, name, episode, status, species, gender, origin, location } =
    itemData;

  const view = `
            
        <div class="characters-inner">
        <article class="characters-card">
            <img src="${image}" alt="${name}">
            <h2>${name}</h2>
        </article>
        <article class="characters-card">
            <h3>Episodes: ${episode.length}</h3>
            <h3>Status: ${status}</h3>
            <h3>Species: ${species}</h3>
            <h3>Gender: ${gender}</h3>
            <h3>Origin: ${origin.name}</h3> 
            <h3>Last Location: ${location.name}</h3>
        </article>
        </div>
    `;

  return view;
};

export default SingleCharactherScreen;

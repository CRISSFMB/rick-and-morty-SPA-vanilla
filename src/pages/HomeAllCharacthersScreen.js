import getData from "../utils/getData";

const HomeAllCharacthersScreen = async () => {
  const { results } = await getData();

  const view = `
        <div class="characthers">

          ${results
            .map((characther) => {
              const { name, image, id } = characther;
              return `
            <article class="character-item">
                  <a href="#/${id}/">
                  <img src="${image}" alt="${name}">
                  <h2>${name}</h2>
                  </a>
            </article>`;
            })
            .join("")}

        </div>`;

  return view;
};

export default HomeAllCharacthersScreen;

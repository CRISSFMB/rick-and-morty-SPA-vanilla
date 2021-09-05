import Error404Screen from "../pages/Error404Screen";
import HomeAllCharacthersScreen from "../pages/HomeAllCharacthersScreen";
import SingleCharactherScreen from "../pages/SingleCharatherScreen";
import Header from "../templates/Header";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

// create router obj
const routes = {
    "/": HomeAllCharacthersScreen,
    "/:id": SingleCharactherScreen,
    contact: "contact",
};

const router = async() => {
    //seleccionar donde voy a inyectar mi html
    const header = null || document.querySelector("#header");
    const content = null || document.querySelector("#content");
    //inyectando mi header
    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let routeValue = routes[route] ? routes[route] : Error404Screen;
    content.innerHTML = await routeValue();
};

export default router;

//export to use in main index.js
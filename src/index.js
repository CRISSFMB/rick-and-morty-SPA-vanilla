import "./assets/styles.css";

import router from "./routes/index";

//cargando el router  cuando el documento este listo
window.addEventListener("load", router);

window.addEventListener("hashchange", router);

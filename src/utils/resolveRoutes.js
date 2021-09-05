const resolveRoutes = (hash) => {
    // hash example 10
    if (hash.length <= 3) {
        let validRoute = hash === "/" ? hash : "/:id";
        return validRoute;
    }
    return hash;
};

export default resolveRoutes;
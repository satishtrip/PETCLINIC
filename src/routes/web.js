import express from "express";
import homepagecontroller from "../controllers/homepagecontroller";

let router = express.Router();

let initAllWebRoutes = (app) =>{
    router.get("/", homepagecontroller.getHomepage);
    router.get("/new-user", homepagecontroller.getNewUserPage);
    router.post("/create-new-user",homepagecontroller.createNewUser);

    return app.use("/", router);
};

module.exports = initAllWebRoutes;

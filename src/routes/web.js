import express from "express";
import homepagecontroller from "../controllers/homepagecontroller";

let router = express.Router();

let initAllWebRoutes = (app) =>{
    router.get("/", homepagecontroller.getHomepage);
    router.get("/register",homepagecontroller.getRegisterPage);
    router.get("/login", homepagecontroller.getLoginPage);
    //router.get("/new-user", homepagecontroller.getNewUserPage);
   // router.post("/create-new-user",homepagecontroller.createNewUser);
    router.post("/register", homepagecontroller.handleRegister);

    return app.use("/", router);
};

module.exports = initAllWebRoutes;

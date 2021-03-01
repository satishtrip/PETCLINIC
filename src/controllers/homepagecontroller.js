import userServices from "../services/userServices"

let getHomepage = (rew,res) =>{
    return res.render('homepage.ejs')

}

let getNewUserPage = (req, res) => {
    return res.render("createUser.ejs");
}

let createNewUser = async (req, res) => {
    let user = req.body;
    let message = await userServices.createNewUser(user);

    console.log(message)
    return res.redirect("/")
    
    //console.log(req.body)

};
module.exports = {
    getHomepage : getHomepage ,
    getNewUserPage: getNewUserPage ,
    createNewUser: createNewUser
}
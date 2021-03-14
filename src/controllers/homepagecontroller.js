import userServices from "../services/userServices"

let getHomepage = (req,res) =>{
    return res.render('homepage.ejs')

}

// let getNewUserPage = (req, res) => {
//     return res.render("createUser.ejs");
// }

let getLoginPage = (req, res) => {
    return res.render("auth/login.ejs")
}

let getRegisterPage = (req, res) => {
    return res.render("auth/register.ejs")

}

let handleRegister = async (req, res) => {

    try{
        let user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            createdAt: Date.now()

    
        };
        let message = await userServices.createNewUser(user) ;
        console.log(message)
        return(res.redirect("/"))

    }catch(e){
        console.log(e)
    }
   
    
}

let createNewUser = async (req, res) => {
    try{
        let user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            createdAt: Date.now()

    
        };
        let message = await userServices.createNewUser(user) ;
        console.log(message)
        return(res.redirect("/"))

    }catch(e){
        console.log(e)
    }

};

module.exports = {
    getHomepage : getHomepage ,
  //  getNewUserPage: getNewUserPage ,
   // createNewUser: createNewUser,
    getRegisterPage: getRegisterPage,
    getLoginPage: getLoginPage,
    handleRegister:handleRegister

}
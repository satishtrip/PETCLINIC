import db from "../models";

//const db = require("../models");
import brcypt from "bcryptjs"


let createNewUser = (user) => {
    return new Promise( async (resolve, reject) => {
        try{
            let isEmailExist = await checkEmailOfUser(user);
            if(isEmailExist){
                resolve("Flah Message")
            }else{
                let salt = brcypt.genSaltSync(10);
                user.password = await brcypt.hashSync("user.password",salt)

                await db.User.create(user);
                resolve("done")
            }
            

        }
        catch (e) {
            reject(e);
        }
    });

};

let checkEmailOfUser = (userCheck) => {
    return new Promise(async(resolve, reject)=>{
        try {
            let currrentUser = await db.User.findOne({
                where : {
                    email : userCheck.email
                }
            });
            if (currrentUser) resolve(true);
            resolve(false)
        } catch(e){
            reject(e)
        }


        
    });
};

module.exports = {
    createNewUser:createNewUser
}



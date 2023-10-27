const express = require("express");
const router = express.Router();
const userController = require("./controller");
const { verifyToken } = require("../../middleware/verifyToken");
 console.log("ckd");
router
    .post("/user/register", userController.signup) 
    .post("/user/login", userController.login)
    // .get("/profile", verifyToken, userController.getMe)
    // .patch("/subscribe", verifyToken, userController.userSubscribe)
    // .get("/signup/confirmation/:token", userController.confirmationAccount)
    
    //    
  
    
module.exports = router;
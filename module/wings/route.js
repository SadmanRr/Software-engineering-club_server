const express = require("express");
const router = express.Router();
const productController = require("./controller");
const upload = require("../../middleware/upload");
const authorization = require("../../middleware/authorization");
  
 console.log("product");
router
    .post("/wing", upload.array("productImg"),  productController.postProduct)
    .get("/wing", productController.getProduct)
    .get("/wing/:id",productController.getOneProduct)
    // .patch("/product/like-update/:id",verifyToken, authorization('admin'), productController.likeUpdateProduct)
    // .get("/product/:id", productController.getOneProduct)
    // .delete("/product/all/delete",verifyToken, authorization('admin'), productController.deleteBulkProduct)
    // .patch("/product/one/:id",verifyToken, authorization('admin'), productController.updateProduct)
    // .delete("/product/delete/:id",verifyToken, authorization('admin'), productController.deleteProduct)
   
       
module.exports = router;  
const express = require("express");
const router = express.Router();
const productController = require("./controller");
const upload = require("../../middleware/upload");
 
router
    .post("/certificate", upload.array("productImg"),productController.postProduct)
    .get("/certificate", productController.getProduct)
    // .get("/Certificate/:id",productController.getOneProduct)
    // .patch("/product/like-update/:id",verifyToken, authorization('admin'), productController.likeUpdateProduct)
    // .get("/product/:id", productController.getOneProduct)
    // .delete("/product/all/delete",verifyToken, authorization('admin'), productController.deleteBulkProduct)
    // .patch("/product/one/:id",verifyToken, authorization('admin'), productController.updateProduct)
    // .delete("/product/delete/:id",verifyToken, authorization('admin'), productController.deleteProduct)
   
      
module.exports = router;  
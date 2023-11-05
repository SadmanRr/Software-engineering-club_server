const express = require("express");
const router = express.Router();
const productController = require("./controller");
const upload = require("../../middleware/upload");
  
 console.log("product");
router
    .post("/event", upload.array("productImg"),productController.postProduct)
    .get("/event", productController.getProduct)
    .delete("/event/:id", productController.deleteProduct)
    // .patch("/product/like-update/:id",verifyToken, authorization('admin'), productController.likeUpdateProduct)
    // .get("/product/:id", productController.getOneProduct)
    // .delete("/product/all/delete",verifyToken, authorization('admin'), productController.deleteBulkProduct)
    // .patch("/product/one/:id",verifyToken, authorization('admin'), productController.updateProduct)
    // .delete("/product/delete/:id",verifyToken, authorization('admin'), productController.deleteProduct)
   
      
module.exports = router;  
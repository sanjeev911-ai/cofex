
const express =require("express");
const {getProduct, getSingleProduct, postProduct,deleteProduct, putProduct}=require("../controller/ProductController")
const router=express.Router();

router.get("/products",getProduct)
router.get("/products/:id", getSingleProduct)
router.post("/products", postProduct)
router.delete("/products/:id", deleteProduct)
router.put("/products/:id",putProduct)

module.exports=router;
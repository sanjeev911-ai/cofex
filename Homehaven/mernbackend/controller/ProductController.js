const productModel =require("../model/Product");

exports.getProduct =async( req,res)=>{
    try {

        const product= await productModel.find();
        res.json(product)
        
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'server error'}) 
    }
}
exports.getSingleProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "server error" });
    }
};

exports.postProduct = async (req, res) => {
    try {
        if (Array.isArray(req.body)) {
            const products = await productModel.insertMany(req.body);
            return res.status(201).json(products);
        }

        const {name, category, description, price, originalPrice, image } = req.body;
        const newProduct = new productModel({ name, category, description, price, originalPrice, image });
        await newProduct.save();
        res.status(201).json(newProduct);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "server error" });
    }
};
exports.putProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const { name, category, description, price, originalPrice, image } = req.body;

        const updatedProduct = await productModel.findByIdAndUpdate(
            productId,
            { name, category, description, price, originalPrice, image },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};
exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        const deletedProduct = await productModel.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};
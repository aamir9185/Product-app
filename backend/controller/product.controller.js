import Product from "../model/product.js";


export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error("Error fetching products: ", error.message);
        res.status(500).json({ message: "Server error" });
    }
}

export const createProduct =  async (req, res) => {
    const product = req.body;
  
    if (!product.name || !product.price || !product.image) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newProduct = new Product(product);
    try {
      await newProduct.save();
      res.status(201).json({ message: "New product created", data: newProduct , success: true });
    } catch (error) {
      console.error("Error creating product: ", error.message);
      res.status(500).json({ message: "Server error", success: false });
    }
  }

export const deleteProduct =  async (req, res) => {
    const id = req.params.id;
    try {
      const product = await Product.findByIdAndDelete(id);
      res.json({ message: "Product removed", success: true });
      } catch (error) {
      console.error("Error deleting product: ", error.message);
      res.status(500).json({ message: "Server error", success: false });
      }
  }

export const updateProduct =   async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    if(mongoose.Types.ObjectId.isValid(id) === false){
        return res.status(400).json({message: "Invalid product id", success: false});
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.json({message: "Product updated", data: updatedProduct, success: true});
    } catch (error) {
        console.error("Error updating product: ", error.message);
        res.status(500).json({message: "Server error", success: false});
    }
}
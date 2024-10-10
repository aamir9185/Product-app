import { useSetRecoilState } from "recoil";
import { productsState } from "../atoms/atoms";
import { useState } from "react";

function Create() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const setProducts = useSetRecoilState(productsState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct), // Send the new product data
      });

      if (response.ok) {
        const addedProduct = await response.json();
        setProducts((prevProducts) => [...prevProducts, addedProduct]); // Update global state
        setNewProduct({ name: "", price: "", image: "" }); // Clear input fields
      } else {
        console.error("Failed to add product:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex my-12 justify-center">
        <h1 className="lg:text-5xl text-4xl font-bold">Create Product</h1>
      </div>
      <div className="bg-base-200 w-[90%] md:w-[60%] mx-auto p-12 rounded-lg shadow-md">
        {/* Input fields */}
        <div className="mb-4">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="name"
              className="grow"
              placeholder="Enter Name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="price"
              className="grow"
              placeholder="Enter Price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="image"
              className="grow"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button
          className="btn btn-primary w-full hover:bg-blue-700 transition duration-300 mt-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Create;

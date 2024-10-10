/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { productsState } from "../atoms/atoms";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

function Home() {
  const [products, setProducts] = useRecoilState(productsState);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products/");
        if (response.ok) {
          const data = await response.json();
          setProducts(data); // Set products in global state
        } else {
          console.error("Failed to fetch products:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [setProducts]); // Ensure setProducts is in the dependency array

  return (
    <div>
    <div className="relative h-[90vh] w-full flex items-center justify-center shadow-lg">
    <Carousel />
    
    <div className="relative z-10 text-center">
      <h1 className="text-5xl font-bold text-gray-200 shadow-lg">Get cool products with one click</h1>
    </div>
  </div>
    <div className="bg-base-300">
        <h1 className="text-4xl p-6 text-center font-bold">Buy Products</h1>
    </div>
    <div>
        <Card className="shadow-lg " products= {products} />
    </div>
  </div>
  );
}

export default Home;

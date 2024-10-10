import { useRecoilValue } from "recoil"; // Import useRecoilValue
import { productsState } from "../atoms/atoms"; // Make sure to import the correct atom

function Card() {
  const products = useRecoilValue(productsState); // Get the products from the Recoil state
  console.log(products); // Log the products to the console

  return (
    <div className="flex flex-wrap justify-center">
      {products.map(
        (
          product // Use parentheses for the return value of map
        ) => (
          <div
            className="card bg-base-100 w-80 shadow-2xl m-10 hover:scale-105 hover:translate-y-[-5px] transition-transform duration-300 ease-in-out"
            key={product.id}
          >
            {" "}
            {/* Add a key prop */}
            <figure>
              <img
                src={product.image} // Use curly braces to interpolate product.image
                alt={product.name} // Use product.name for accessibility
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p> $ {product.price}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Card;

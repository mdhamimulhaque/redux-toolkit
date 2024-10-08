import ProductCard from "@/components/shared/ProductCard";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <div className="grid grid-cols-12 gap-6 px-6">
      <section className="col-span-8">
        <ProductCard />
      </section>

      <section className="col-span-4">
        <Link to="/product-details/:id">
          <ProductCard />
        </Link>
      </section>
    </div>
  );
};

export default ProductDetails;

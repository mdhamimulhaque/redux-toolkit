import Search from "@/components/Search";
import ProductCard from "@/components/shared/ProductCard";
import SortBy from "@/components/Sortby";
import { Link } from "react-router-dom";

const Home = () => {
  const id = 1;

  return (
    <div className="m-6">
      <section className="flex justify-center gap-3 my-6">
        <Search />
        <SortBy />
      </section>

      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <Link to={`/product-details/${id}`}>
            <ProductCard />
          </Link>
        </div>
        <div className="col-span-3">
          <Link to={`/product-details/${id}`}>
            <ProductCard />
          </Link>
        </div>
        <div className="col-span-3">
          <Link to={`/product-details/${id}`}>
            <ProductCard />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

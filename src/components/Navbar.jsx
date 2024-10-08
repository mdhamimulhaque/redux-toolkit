import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/Products",
      name: "Products",
    },
    {
      id: 3,
      path: "/contact",
      name: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center bg-gray-200 px-5">
      <section>
        <h2 className="Rdx text-2xl font-bold">Rdx</h2>
      </section>
      <section>
        <nav className="flex gap-5 px-3 py-5">
          {navItems.map((navItem) => (
            <Link
              key={navItem.id}
              to={navItem.path}
              className="lg:mr-3 xl:mr-12 text-xl hover:text-yellow-400 transition-all ease-in-out duration-300"
            >
              {navItem.name}
            </Link>
          ))}
        </nav>
      </section>
      <section></section>
    </div>
  );
};

export default Navbar;

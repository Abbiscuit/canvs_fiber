import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="flex flex-row px-4 py-2 mb-6 w-full">
        <Link className="inline-block px-4 py-2 font-semibold" to="/">
          Home
        </Link>
        <Link className="inline-block px-4 py-2 font-semibold" to="/playground">
          Playground
        </Link>
      </nav>
    </>
  );
};

export default Header;

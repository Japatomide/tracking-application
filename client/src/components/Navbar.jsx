import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md">
      <nav className="sticky top-0 flex justify-between  p-3 shadow-md">
        <div className="flex gap-3">
          <img src="./vite.svg" alt="Logo" />
          <Link to={'/'}>
            <p style={{ cursor: "pointer", fontSize: "20px" }}>
              TrackMyShipment
            </p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
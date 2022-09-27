import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";



function NavBar() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

 const [isActive, setIsActive] = useState(false);

 const handleClick = (event) => {
   // 👇️ toggle isActive state on click
   setIsActive((current) => !current);
 };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light mb-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            Home
          </a>
          <button
            onClick={handleClick}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              isActive
                ? "collapse show navbar-collapse text-end justify-content-between"
                : "collapse navbar-collapse justify-content-between"
            }
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="/wishlist"
              >
                Wishlist
              </a>
              <a className="nav-link" href="/feed">
                Feed
              </a>
              <a className="nav-link" href="/contact">
                Contact me
              </a>
            </div>
            <button onClick={handleLogout} className="btn btn-primary me-3">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

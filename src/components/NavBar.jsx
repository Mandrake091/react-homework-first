import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";



function NavBar() {
  //userAuth for routes (look app.js)
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  ///////////////////////////////////
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
///////////////////////////////////////
//State management for hamburger menu
 const [isActive, setIsActive] = useState(false);
 const handleClick = (event) => {
   // 👇️ toggle isActive state on click
   setIsActive((current) => !current);
 };
//////////////////////////////////////

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-light p-0">
        <div className="container-fluid  py-3">
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
                ? "collapse show navbar-collapse justify-content-between text-center"
                : "collapse navbar-collapse justify-content-between"
            }
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                className="nav-link"
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
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

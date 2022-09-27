import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Signin from "./components/Signin";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./components/pages/HomePage";
import Feed from "./components/pages/Feed";
import Contact from "./components/pages/Contact";
import NavBar from "./components/NavBar";
import WishList from "./components/pages/WishList";
import Cart from "./components/Cart";
import { CartProvider } from "react-use-cart";
//////////////////////////////////////////////////////////////

console.log("e-mail: admin@admin.com", "psw: Admin123");

function App() {
  return (
    <div>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Signin />} />

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <CartProvider>
                  <WishList />
                  <Cart />
                </CartProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/feed"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

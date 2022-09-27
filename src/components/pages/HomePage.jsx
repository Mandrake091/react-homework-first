import React from "react";
import Loader from "../Loader";

const HomePage = () => {
  return (
    <div>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-4">
            <h1 className="text-2xl font-bold py-4">Home Page</h1>
            <p>Please navigate to pages in navbar</p>
            <Loader/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

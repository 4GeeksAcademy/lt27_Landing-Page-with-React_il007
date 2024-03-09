import React from "react";

//include images into your bundle
import JumpButron from "./jumpButron";
import Nav from "./nav";
import Cards from "./cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
  return (
    <div className="container-fluid">
      <>
        <Nav />
          <div className="container">
            <JumpButron />
            <div className="row justify-content-around m-5">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        <Footer />
      </>
    </div>
  );
};

export default Home;

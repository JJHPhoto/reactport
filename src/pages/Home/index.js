import React from "react";
// import "./Home.css";
import Footer from "../../components/Footer";
import HomeButtons from "../../components/HomeButtons";

function Home() {
  return (
    <div className="home text-center">
      <div class="bg-dark">
        <h1>Joshua J Haller</h1>
        <HomeButtons />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

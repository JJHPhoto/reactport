import React from "react";
// import "./Home.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeButtons from "../../components/HomeButtons";

function Home() {
  return (
    <div className="home text-center">
      <div class="bg-dark">
        <Header />
        {/* <HomeButtons /> */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;

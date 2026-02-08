import React from "react";
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="card w-[500px]">
          <h1 className="card-title">Home</h1>
          <p>Welcome to The Furnace! This is the home page.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
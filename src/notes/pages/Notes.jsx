import React from "react";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';

function Notes() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="card">
          <h1 className="card-title">Notes</h1>
          <p>Welcome to The Furnace! This is the notes page.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Notes;
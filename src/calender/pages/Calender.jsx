import React from "react";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';

function Calendar() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="card">
          <h1 className="card-title">Calendar</h1>
          <p>Welcome to The Furnace! This is the calendar page.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Calendar;
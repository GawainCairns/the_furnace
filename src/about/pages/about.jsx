import React, { useContext } from "react";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import { NewDataContext } from '../../context/NewDataContext'


function About() {
  const { newdata } = useContext(NewDataContext)
  
  return (
    <div>
      <Navbar />
      <main>
        <div className="card w-[750px]">
          <h1 className="card-title">About The Furnace</h1>
          <p>The Furnace is a testing and learning platform for me to learn how React and Node.js work.</p>
          <p>Features:</p>
          <ul>
            <li><strong>Notes:</strong> Create, edit, and organize your notes. Notes allows you to categorize and search through your notes.</li>
            <li><strong>Calendar:</strong> Keep track of your events and appointments. Set reminders and view your schedule.</li>
            <li><strong>User Authentication:</strong> Securely register and log in to your account to access your personalized notes and calendar.</li>
          </ul>
        </div>
        <div className="data">
          {newdata ? (
            <div>{newdata.map(user => <div key={user.id} >{user.name}</div>)}</div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
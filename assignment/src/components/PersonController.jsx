import React, { useState, useEffect } from 'react';
import Person from './Person';
function PersonController() {
  const [person, setPerson] = useState(null);

  const getPerson = () => {
    fetch('https://randomuser.me/api?results=1')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPerson(data.results[0]);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      <Person person={person} /> {/* Pass person as a prop */}
    </div>
  );
}

export default PersonController;
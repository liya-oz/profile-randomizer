import React from 'react';

const Person = ({ person }) => {
  if (!person) {
    return <div>Please wait a bit!</div>;
  }

  return (
    <ul>
      <li>{person.name.first}</li>
      <li>{person.name.last}</li>
      <li>{person.email}</li>
    </ul>
  );
};

export default Person;
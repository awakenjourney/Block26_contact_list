import React, { useState, useEffect } from "react";
import axios from "axios";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const getSelectedContact = async () => {
      try {
        const response = await axios.get(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.data;
        setContact(result);
        console.log(contact);
      } catch (error) {
        console.error(error);
      }
    }
    getSelectedContact();
  }, [selectedContactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={() => setSelectedContactId(null)}>Go Back</button>
    </div>
  );
};

export default SelectedContact;

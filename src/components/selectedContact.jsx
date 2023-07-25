import React, { useState, useEffect } from "react";

const SelectedContact = ({ selectedContactId, setSectedContactId }) => {
  const [constact, setContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
        console.log(constact);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelectedContact();
  }, []);
};

export default SelectedContact;

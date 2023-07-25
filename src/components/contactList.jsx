import React, { useState, useEffect, } from "react";
import axios from "axios";
import ContactRow from "./contactRow";

const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

const ContactList = ({setSelectedContactId}) => {
  const [contacts, setContacts] = useState([]);

  console.log("Contacts: ", contacts);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await axios.get(API_URL);
        const result = await response.data;
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    getContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => (
          <ContactRow 
          key={contact.id} 
          contact={contact} 
          setSelectedContactId={setSelectedContactId}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;

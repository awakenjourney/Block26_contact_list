import React from "react";

const ContactRow = ({ setSectedContactId, contact }) => {
  return (
    <tr
      onClick={() => {
        setSectedContactId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
};

export default ContactRow;

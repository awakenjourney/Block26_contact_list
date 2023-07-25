import { useState } from "react";
import "./App.css";
import ContactList from "./components/contactList";
import SelectedContact from "./components/selectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      <div>
        {/* <ContactList setSelectedContactId={setSelectedContactId} /> */}
        
        {selectedContactId ? <div>selectedContactId={selectedContactId}</div> : <ContactList />}
      </div>
    </>
  );
}

export default App;

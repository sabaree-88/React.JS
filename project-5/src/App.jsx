import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import ContactCard from "./components/ContactCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contact");
        const contactsSnapshot = await getDocs(contactRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.error(error);
      }
    };
    getContacts();
  }, []);
  return (
    <div className="mx-auto max-w-[480px] px-4">
      <Navbar />
      <Searchbar />
      <div className="mt-4 flex flex-col gap-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
  );
};

export default App;

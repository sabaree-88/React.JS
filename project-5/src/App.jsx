import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import ContactCard from "./components/ContactCard";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";


const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contact");
        onSnapshot(contactRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
        });
      } catch (error) {
        console.error(error);
      }
    };
    getContacts();
  }, []);

  const filteredContacts = (e) => {
    const value = e.target.value;

    const contactRef = collection(db, "contact");
    onSnapshot(contactRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContactList = contactLists.filter((contact) => 
      contact.name.toLowerCase().includes(value.toLowerCase())
      )
      setContacts(filteredContactList);

      return filteredContactList;
    });

  };
  return (
    <>
      <div className="mx-auto max-w-[480px] px-4">
        <Navbar />
        <Searchbar onOpen={onOpen} filteredContacts={filteredContacts}/>
        <div className="mt-4 flex flex-col gap-4">
          {contacts.length <= 0 ? <NotFound/> : contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;

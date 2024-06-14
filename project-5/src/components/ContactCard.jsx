import { FaTrashAlt } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbEditCircle } from "react-icons/tb";
import useDisclose from "../hooks/useDisclose";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contact", id));
      toast.success("Contact deleted successfully");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div
        key={contact.id}
        className="flex justify-between items-center p-2 rounded-lg bg-yellow"
      >
        <div className="flex gap-1">
          <FaRegCircleUser className="text-orange text-4xl" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex gap-2 text-3xl">
          <TbEditCircle onClick={onOpen} className="cursor-pointer" />
          <FaTrashAlt
            className="text-orange cursor-pointer"
            onClick={() => deleteContact(contact.id)}
          />
        </div>
      </div>
      <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;

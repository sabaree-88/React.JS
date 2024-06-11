import { FaTrashAlt } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbEditCircle } from "react-icons/tb";

const ContactCard = ({contact}) => {
  return (
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
        <TbEditCircle />
        <FaTrashAlt className="text-orange" />
      </div>
    </div>
  );
};

export default ContactCard;

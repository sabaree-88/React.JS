import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
const Searchbar = () => {
  return (
    <div className="relative flex items-center gap-2">
      <FiSearch className="absolute ml-3 text-white text-3xl" />
      <input
        type="search"
        className="bg-transparent border border-white rounded-md h-10 flex-grow pl-12 text-white"
      />
      <FaCirclePlus className="text-white text-4xl cursor-pointer"/>
    </div>
  );
};

export default Searchbar;

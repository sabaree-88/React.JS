import { createPortal } from "react-dom";
import { IoIosCloseCircle } from "react-icons/io";

const Modal = ({ onClose, isOpen, children }) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return createPortal(
    <>
      {isOpen && (
        <div
          className="grid place-items-center fixed z-40 backdrop-blur-sm top-0 h-screen w-screen bg-black bg-opacity-50"
          onClick={onClose}
        >
          <div
            className="relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white p-4 rounded-md"
            onClick={stopPropagation}
          >
            <div className="close-icon flex justify-end">
              <IoIosCloseCircle onClick={onClose} className="text-3xl cursor-pointer" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;

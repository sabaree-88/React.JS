import { createPortal } from "react-dom";
import { IoIosCloseCircle } from "react-icons/io";
const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="relative z-50 m-auto min-h-[200px] min-w-80 bg-white p-4 rounded-md">
            <div className="close-icon flex justify-end">
              <IoIosCloseCircle onClick={onClose} className="text-3xl" />
            </div>
            {children}
          </div>
          <div
            className="absolute z-40 backdrop-blur top-0 h-screen w-screen"
            onClick={onClose}
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;

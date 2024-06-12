import Modal from "./Modal";
import { Formik, Form, Field } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
const AddAndUpdateContact = ({ isOpen, onClose }) => {
  const addContact = async(contact) => {
    try {
      const contactRef = collection(db, 'contact');
      await addDoc(contactRef, contact);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="max-w-[400px] m-auto">
      <Modal isOpen={isOpen} onClose={onClose} className="m-auto min-w-[80%]">
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" className="h-10 border" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Email</label>
              <Field type="email" name="email" className="h-10 border" />
            </div>
            <button className="self-end border bg-orange px-3 py-1">
              Add Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;

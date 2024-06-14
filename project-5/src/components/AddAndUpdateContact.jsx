import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";
const AddAndUpdateContact = ({ isUpdate, isOpen, onClose, contact }) => {
  const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact added successfully");
    } catch (error) {
      console.error(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contact", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact updated successfully");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="max-w-[400px] m-auto">
      <Modal isOpen={isOpen} onClose={onClose} className="m-auto min-w-[80%]">
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            // console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" className="h-10 border" />
              <div className="text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Email</label>
              <Field type="email" name="email" className="h-10 border" />
              <div className="text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button
              type="submit"
              className="self-end border bg-orange px-3 py-1"
            >
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;

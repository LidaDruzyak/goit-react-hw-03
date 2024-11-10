import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={s.container}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            contact={contact}
            handleDeleteContact={handleDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

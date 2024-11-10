import s from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { PiPhoneFill } from "react-icons/pi";
const Contact = ({ contact, handleDeleteContact }) => {
  return (
    <div className={s.item}>
      <div className={s.contact}>
        <span className={s.span}>
          <IoPersonSharp />
          {contact.name}
        </span>
        <span className={s.span}>
          <PiPhoneFill />
          {contact.number}
        </span>
      </div>
      <button
        onClick={() => handleDeleteContact(contact.id)}
        className={s.btn}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;

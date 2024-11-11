import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, options) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.number,
    };
    onAdd(newContact);
    options.resetForm();
    console.log(values);
  };

  // const telRe = /^\d{3}-\d{2}-\d{2}$/;

  const orderSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Enter the correct phone number!")
      .required("Required"),
  });

  const initialValues = {
    username: "",
    number: "",
  };

  return (
    <div className={s.wrapper}>
      <Formik
        validationSchema={orderSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} type="text" name="username" />
            <ErrorMessage
              name="username"
              component="span"
              className={s.error}
            />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} type="number" name="number" />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

import React from "react";
import PropTypes from "prop-types";
import style from "./Contacts.module.css";
// eslint-disable-next-line import/extensions
import Contact from "./Contact.jsx";

const Contacts = ({ contacts, deleteFunc }) => (
  <div className={style.wrapper}>
    <h2>Contacts</h2>
    <ul>
      {contacts.map(el => {
        return (
          <Contact deleteFunc={() => deleteFunc(el.id)} key={el.id} el={el} />
        );
      })}
    </ul>
  </div>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  deleteFunc: PropTypes.func.isRequired
};
export default Contacts;

import React from "react";
import PropTypes from "prop-types";
import style from "./Contacts.module.css";

const Contact = ({ el, deleteFunc }) => (
  <li data-id={el.id} className={style.list_item}>
    <p>{el.name}</p>
    <p>{el.number}</p>
    <input
      type="button"
      onClick={deleteFunc}
      value="Delete"
      className={style.delete_button}
    />
  </li>
);

Contact.propTypes = {
  el: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired,
  deleteFunc: PropTypes.func.isRequired
};
export default Contact;

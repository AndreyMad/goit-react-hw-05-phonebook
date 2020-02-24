import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import style from "./Contacts.module.css";
import slide from "../../transitions/slide.module.css";
// eslint-disable-next-line import/extensions
import Contact from "./Contact.jsx";

const Contacts = ({ contacts, deleteFunc }) => (
  <div className={style.wrapper}>
    <h2 className={style.title}>Contacts</h2>

    <TransitionGroup component="ul" className={style.list}>
      {contacts.map(el => {
        return (
          <CSSTransition key={el.id} timeout={250} classNames={slide}>
            <Contact deleteFunc={() => deleteFunc(el.id)} key={el.id} el={el} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
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

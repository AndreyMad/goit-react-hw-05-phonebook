/* eslint-disable import/extensions */
import React, { Component } from "react";
import keyGenerator from "uuid/v1";
import { CSSTransition } from "react-transition-group";
import Phonebook from "./Phonebook/Phonebook.jsx";
import Contacts from "./Contacts/Contacts.jsx";
import Filter from "./Filter/Filter.jsx";
import style from "./App.module.css";
import pop from "../transitions/pop.module.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    alert: false,
    filter: ""
  };

  componentDidMount = () => {
    try {
      const contacts = localStorage.getItem("contacts");
      if (contacts) {
        this.setState({ contacts: JSON.parse(contacts) });
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    try {
      const { contacts } = this.state;
      if (prevState.contacts !== contacts) {
        localStorage.setItem("contacts", JSON.stringify(contacts));
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  

  handleFilter = e => {
    this.setState({ filter: e.target.value });
    const { contacts, filter } = this.state;
    this.searchFunc(contacts, filter);
  };

  searchFunc = (arrayToFilter, value) => {
    const filteredValue = arrayToFilter.filter(el => {
      return el.name.toLowerCase().includes(value.toLowerCase());
    });

    return filteredValue;
  };

  deleteFunc = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => {
        return el.id !== id;
      })
    }));
  };

  handleSubmit = value => {
    const { contacts } = this.state;
    const testForSameUserName = contacts.find(
      contact => contact.name === value.name
    );
    if (!testForSameUserName) {
      const contactFromInput = {
        id: keyGenerator(),
        name: value.name,
        number: value.number
      };
      const newContactsArray = [contactFromInput, ...contacts];
      this.setState({ contacts: newContactsArray });
      // eslint-disable-next-line no-alert
    } else alert("Error message", "Click me!", 5000);
  };

  render() {
    const { contacts, filter, alert } = this.state;
    const filteredValue = this.searchFunc(contacts, filter);
    return (
      <>
        <CSSTransition timeout={500} appear classNames={style}>
          <h1 className={style.title}>Phonebook</h1>
        </CSSTransition>

        <Phonebook
          handleSubmit={this.handleSubmit}
          resetForm={this.resetForm}
        />

        <CSSTransition
          in={contacts.length > 1}
          unmountOnExit
          timeout={250}
          classNames={pop}
        >
          <Filter handleFilter={this.handleFilter} />
        </CSSTransition>

        <Contacts
          deleteFunc={this.deleteFunc}
          contacts={filteredValue || contacts}
        />
      </>
    );
  }
}

export default App;

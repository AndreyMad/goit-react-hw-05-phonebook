import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Phonebook.module.css";

class Phonebook extends Component {
  state = {
    name: "",
    number: ""
  };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };

  handleChangeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: ""
    });
  };

  createContact = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const exp = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
    const isValidInputNumber = number.match(exp);
    if (name.length > 0 && number.length > 0 && isValidInputNumber) {
      const { handleSubmit } = this.props;
      handleSubmit(this.state);
      this.resetForm();
    } else alert("Enter name & number"); // eslint-disable-line no-alert
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={style.form} onSubmit={this.createContact}>
        <label htmlFor="name">
          Name
          <input
            onChange={this.handleChangeState}
            value={name}
            type="Number"
            name="name"
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            value={number}
            type="input"
            name="number"
            onChange={this.handleChangeState}
          />
        </label>
        <input type="submit" className={style.submit_btn} value="Add contact" />
      </form>
    );
  }
}

export default Phonebook;

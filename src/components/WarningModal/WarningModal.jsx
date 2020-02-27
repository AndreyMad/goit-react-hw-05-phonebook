import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./WarningModal.module.css";

class componentName extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    notification: PropTypes.string.isRequired
  };

  componentDidMount() {
    const { closeModal } = this.props;
    window.addEventListener("keydown", closeModal);
    document.body.style = " overflow: hidden ";
  }

  componentWillUnmount() {
    const { closeModal } = this.props;
    window.removeEventListener("keydown", closeModal);
    document.body.style = "";
  }

  render() {
    const { closeModal, notification } = this.props;
    return (
      <div
        className={style.Overlay}
        onClick={closeModal}
        onKeyDown={closeModal}
        role="presentation"
      >
        <div className={style.modal}>
          <p className={style.message}>{notification}</p>
          <button
            className={style.close_button}
            onClick={closeModal}
            type="button"
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default componentName;

import React from "react";
import PropTypes from "prop-types";
import style from "./Filter.module.css";

const Filter = ({ handleFilter }) => {
  return (
    <div className={style.wrapper}>
      <label htmlFor="filter">
        Filter contacts by name
        <input type="input" name="filter" onChange={handleFilter} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired
};
export default Filter;

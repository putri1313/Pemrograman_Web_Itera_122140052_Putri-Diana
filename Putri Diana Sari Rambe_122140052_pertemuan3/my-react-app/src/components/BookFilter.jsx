import React from "react";
import PropTypes from "prop-types";

const BookFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <label>Filter Status: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="semua">Semua</option>
        <option value="miliki">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="pinjam">Dipinjam</option>
      </select>
    </div>
  );
};

BookFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default BookFilter;

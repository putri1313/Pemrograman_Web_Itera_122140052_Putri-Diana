import React from "react";
import PropTypes from "prop-types";




const FilterBar = ({ filter, onFilterChange, searchTerm, onSearchChange }) => {
  return (
    <div className="filter-bar">
      <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="Semua">Semua</option>
        <option value="Milik">Milik</option>
        <option value="Baca">Baca</option>
        <option value="Beli">Beli</option>
      </select>

      <input
        type="text"
        placeholder="Cari judul buku..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

FilterBar.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default FilterBar;

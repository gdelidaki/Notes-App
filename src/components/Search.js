import React from 'react';
import { MdSearch } from 'react-icons/md';

export default function Search({ searchText, handleSearchNote }) {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.6em" />
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder="Type to search..."
        name=""
        id=""
        value={searchText}
      />
    </div>
  );
}

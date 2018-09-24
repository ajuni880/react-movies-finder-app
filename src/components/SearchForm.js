import React from 'react';

const SearchForm = (props) => (
    <form onSubmit={props.onSubmit}>
        <input 
            autoFocus
            autoComplete="off"
            type="text"
            name="searchInput"
            placeholder="Black panther"
            onChange={props.onInputChange}
            value={props.searchInput}
        />
        <button type="submit">Find</button>
    </form>
);

export default SearchForm;
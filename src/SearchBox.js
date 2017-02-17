import React from 'react';

const SearchBox = (props)  => {
    return(
      <div className='pa2'>
        <input className='pa2'
            type='search'
            placeholder='Search Robots...'
            onChange={props.onSearchChange}
        />
      </div>
    );
}

export default SearchBox;

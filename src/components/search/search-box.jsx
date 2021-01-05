import React from 'react';
import './search-box.style.css'

export const SearchBox = ({placeholder, eventhandler}) =>
(
    <input className='search' type='search'
     placeholder={placeholder} 
    onChange={eventhandler} />
)
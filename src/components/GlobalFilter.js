import React from 'react';

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      search :{' '}
      <input
        type='text'
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};

export default GlobalFilter;

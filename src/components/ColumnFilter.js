import React from 'react';

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <span>
      search :{' '}
      <input
        type='text'
        value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};

export default ColumnFilter;

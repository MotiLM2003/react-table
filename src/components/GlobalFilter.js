import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onchange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 250);
  return (
    <span>
      search :{' '}
      <input
        type='text'
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onchange(e.target.value);
        }}
      />
    </span>
  );
};

export default GlobalFilter;

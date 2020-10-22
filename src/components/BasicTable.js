import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './Columns';

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <div>
      <table {...getTableProps}>
              <thead>
                  {
                      headerGroups.map(headerGroup => (
                          <tr {...headerGroup.getFooterGroupProps()}>
                              {
                                  headerGroup.headers.map(column => (
                                      <th>{column.Header}</th>
                                  ))
                              }
                          </tr>
                      )
                  }
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps}>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;

import { format } from 'date-fns';
export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
  },
  {
    Header: 'First name',
    Footer: 'First name',
    accessor: 'first_name',
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name',
    Cell: ({ value }) => {
      return `${value}`;
    },
  },
  {
    Header: 'Date of Birth',
    Footer: 'Date of Birt',
    accessor: 'date_of_birth',
    Cell: ({ value }) => {
      console.log(value);
      return format(new Date(value), ' dd/MM/yyyy');
    },
  },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor: 'country',
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
  },
];

export const GROUPED_COLUMNS = [
  { Header: 'Id', Footer: 'Id', accessor: 'id' },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First name',
        Footer: 'First name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
      },
    ],
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Date of Birth',
        Footer: 'Date of Birt',
        accessor: 'date_of_birth',
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone',
      },
    ],
  },
];

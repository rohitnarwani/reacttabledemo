import React from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import GlobalFilter from './GlobalFilter';

function Table({ columns, data }) {
    const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        visibleColumns,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = tableInstance;

    return (
        <table {...getTableProps()} style={{
            height: '80%',
            width: '80%',
            borderCollapse: 'collapse',
            border: 'none',
        }}>
            <thead>
                <tr>
                    <th
                        colSpan={visibleColumns.length}
                        style={{
                            textAlign: 'left',
                        }}
                    >
                        <GlobalFilter
                            preGlobalFilteredRows={preGlobalFilteredRows}
                            globalFilter={state.globalFilter}
                            setGlobalFilter={setGlobalFilter}
                        />
                    </th>
                </tr>
                {headerGroups.map(headerGroup => (

                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                style={{
                                    color: 'black',
                                }}
                            >{column.render('Header')}
                                <span>
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? '🔽'
                                            : '🔼'
                                        : ''}
                                </span>                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} style={{ border: 'solid 1px gray'}}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()} style={{
                                    padding: '10px',
                                    border: 'solid 1px gray',
                                    backgroundColor: '#e5e4e2',
                                    textAlign: 'center',
                                }}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;

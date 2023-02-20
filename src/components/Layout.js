import Sidebar from "./Sidebar";
import Table from './Table';
import React from 'react';
import './Table.css';

function Layout(props) {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Created Dt',
                accessor: 'createdDt',
            },
            {
                Header: 'Is WebPage Helpful',
                accessor: 'iswebPageHelpful',
            },
            {
                Header: 'Feedback',
                accessor: 'feedback',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Comments',
                accessor: 'comments',
            },
            {
                Header: 'Actions',
                accessor: 'actions',
            },
        ],
        []
    );

    const data = React.useMemo(
        () => [
            {
                createdDt: '2022-02-17',
                iswebPageHelpful: 'Yes',
                feedback: 'Good',
                status: 'In Progress',
                comments: 'test',
                Actions: ''

            },
            {
                createdDt: '2022-02-18',
                iswebPageHelpful: 'Yes',
                feedback: 'Good',
                status: 'In Progress',
                comments: 'test',
                Actions: ''
            },
            {
                createdDt: '2022-02-19',
                iswebPageHelpful: 'Yes',
                feedback: 'Good',
                status: 'In Progress',
                comments: 'test',
                Actions: ''
            },
            {
                createdDt: '2022-02-20',
                iswebPageHelpful: 'Yes',
                feedback: 'Good',
                status: 'In Progress',
                comments: 'test',
                Actions: ''
            },
            {
                createdDt: '2022-02-13',
                iswebPageHelpful: 'Yes',
                feedback: 'Good',
                status: 'In Progress',
                comments: 'test',
                Actions: ''
            },
        ],
        []
    );
    return (
     <div id="wrapper">
          <Sidebar />
            <div className="table">
              <Table columns={columns} data={data} />
         
          </div>
    </div>
    );
}

export default Layout;
import Sidebar from "./Sidebar";
import Table from './Table';
import React from 'react';
import './Table.css';
import { BiEdit } from "react-icons/bi";
import Feedback from "./Feedback";

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
                Cell: ({ row }) => (
                    <div>
                        <Feedback onClick={() => handleFeedBack(row)} />
                    </div>
                )
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Updated Dt',
                accessor: 'updateDt',
            },
            {
                Header: 'Comments',
                accessor: 'comments',
            },
            {
                Header: 'Actions',
                Cell: ({ row }) => (
                    <div>
                        <BiEdit size={25} onClick={() => handleEdit(row)}/>
                    </div>
                )
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
                updateDt: '2022-02-21',
                comments: 'test',

            },
            {
                createdDt: '2022-02-18',
                iswebPageHelpful: 'Yes',
                feedback: 'Good',
                status: 'In Progress',
                updateDt: '2022-02-22',
                comments: 'test',
                Actions: ''
            },
            {
                createdDt: '2022-02-19',
                iswebPageHelpful: 'Yes',
                feedback: 'Good',
                status: 'In Progress',
                updateDt: '2022-02-21',
                comments: 'test',
                Actions: ''
            },
            {
                createdDt: '2022-02-20',
                iswebPageHelpful: 'Yes',
                feedback: 'Good',
                status: 'In Progress',
                updateDt: '2022-02-22',
                comments: 'test',
                Actions: ''
            },
            {
                createdDt: '2022-02-13',
                iswebPageHelpful: 'Yes',
                feedback: 'Good',
                status: 'In Progress',
                updateDt: '2022-02-23',
                comments: 'test',
                Actions: ''
            },
        ],
        []
    );
    const handleEdit = (row) => {
        console.log('Editing row ${row.index}');
    };
    const handleFeedBack = (row) => {
       
    };
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
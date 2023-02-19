import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Table from './components/Table';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Age',
                accessor: 'age',
            },
            {
                Header: 'Gender',
                accessor: 'gender',
            },
        ],
        []
    );

    const data = React.useMemo(
        () => [
            {
                name: 'John Doe',
                age: 30,
                gender: 'Male',
            },
            {
                name: 'Jane Doe',
                age: 25,
                gender: 'Female',
            },
            {
                name: 'Bob Smith',
                age: 45,
                gender: 'Male',
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

export default App;

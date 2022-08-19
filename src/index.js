import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ClassTable from './ClassTable';
import Navbar from './Navbar';

const Main = () => {
  const apiUrl = 'https://www.dnd5eapi.co';

  const [classes, setClasses] = useState([]);

  async function getClasses() {
    try {
      const response = await fetch(apiUrl + '/api/classes');
      const data = await response.json();
      setClasses(data.results);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function fetchData(dataUrl) {
    try {
      fetch(apiUrl + dataUrl)
        .then((response) => response.json())
        .then((value) => console.log(value));
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getClasses();
  }, []);

  return (
    <div id='main'>
      <Navbar />
      <div id='container'>
        <ClassTable classes={classes} fetchData={fetchData} />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<Main />);

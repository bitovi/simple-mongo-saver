import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const backendURL = 'http://localhost:5001';

// Configure a base URL for axios
const api = axios.create({
    baseURL: backendURL,
});



function App() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await api.get('/list');
    setData(result.data);
  };

  const handleAddData = async (e) => {
    e.preventDefault();
    await api.post('/create', { data: newData });
    setNewData('');
    fetchData(); // Refresh the data list after adding new data
  };

  return (
    <div className="App container">
      <h1>Data List</h1>
      <Form onSubmit={handleAddData}>
        <Form.Group controlId="formData">
          <Form.Label>Add Data</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter data"
            value={newData}
            onChange={e => setNewData(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}


export default App;

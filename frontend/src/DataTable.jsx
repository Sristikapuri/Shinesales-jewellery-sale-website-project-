import React, { useState, useEffect } from 'react';

const DataTable = () => {
  const [storedData, setStoredData] = useState(null);

  useEffect(() => {
    // Retrieve the form data saved in localStorage under 'submittedFormData'
    const data = localStorage.getItem('submittedFormData');
    if (data) {
      setStoredData(JSON.parse(data));
    }
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Registered User Details</h2>
      {storedData ? (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{storedData.name}</td>
              <td>{storedData.email}</td>
              <td>{storedData.password}</td>
              <td>{storedData.confirmPassword}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No data found in localStorage. Please register first.</p>
      )}
    </div>
  );
};

export default DataTable;
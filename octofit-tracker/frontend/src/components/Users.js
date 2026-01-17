import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('Fetching users from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Fetched users:', results);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Superhero</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id || user.email}>
              <td>{user.id || ''}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.is_superhero ? 'Yes' : 'No'}</td>
              <td>{user.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;

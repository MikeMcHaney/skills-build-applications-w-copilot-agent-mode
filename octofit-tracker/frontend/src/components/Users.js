import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Users API endpoint:', endpoint);
        console.log('Fetched users:', data);
        setUsers(data.results || data);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, [endpoint]);

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h2 className="card-title">Users</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id || idx}>
                <td>{user.id || idx + 1}</td>
                <td>{user.username || user.name || '-'}</td>
                <td>{user.email || '-'}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2">View</button>
                  <button className="btn btn-secondary btn-sm">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Example Bootstrap form for adding users */}
        <form className="mt-4">
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">Username</label>
            <input type="text" className="form-control" id="userName" placeholder="Enter username" />
          </div>
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="userEmail" placeholder="Enter email" />
          </div>
          <button type="submit" className="btn btn-success">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default Users;

import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Teams API endpoint:', endpoint);
        console.log('Fetched teams:', data);
        setTeams(data.results || data);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, [endpoint]);

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h2 className="card-title">Teams</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Members</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={team.id || idx}>
                <td>{team.id || idx + 1}</td>
                <td>{team.name || '-'}</td>
                <td>{team.members ? team.members.length : '-'}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2">View</button>
                  <button className="btn btn-secondary btn-sm">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Example Bootstrap form for adding teams */}
        <form className="mt-4">
          <div className="mb-3">
            <label htmlFor="teamName" className="form-label">Team Name</label>
            <input type="text" className="form-control" id="teamName" placeholder="Enter team name" />
          </div>
          <button type="submit" className="btn btn-success">Add Team</button>
        </form>
      </div>
    </div>
  );
};

export default Teams;

import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts API endpoint:', endpoint);
        console.log('Fetched workouts:', data);
        setWorkouts(data.results || data);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, [endpoint]);

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h2 className="card-title">Workouts</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Duration</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={workout.id || idx}>
                <td>{workout.id || idx + 1}</td>
                <td>{workout.name || '-'}</td>
                <td>{workout.duration || '-'}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2">View</button>
                  <button className="btn btn-secondary btn-sm">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Example Bootstrap form for adding workouts */}
        <form className="mt-4">
          <div className="mb-3">
            <label htmlFor="workoutName" className="form-label">Workout Name</label>
            <input type="text" className="form-control" id="workoutName" placeholder="Enter workout name" />
          </div>
          <div className="mb-3">
            <label htmlFor="workoutDuration" className="form-label">Duration</label>
            <input type="text" className="form-control" id="workoutDuration" placeholder="Enter duration" />
          </div>
          <button type="submit" className="btn btn-success">Add Workout</button>
        </form>
      </div>
    </div>
  );
};

export default Workouts;

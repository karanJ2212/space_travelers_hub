import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

export default function MyProfile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  return (
    <div className="profile-section">
      <table className="table">
        <thead>
          <tr>
            <th>
              <h3>My Missions</h3>
              <hr className="rocket-line" />
            </th>
          </tr>
        </thead>
        <tbody>mission names</tbody>
      </table>
      <table className="table-rocket">
        <thead>
          <tr>
            <th>
              <h3>My Rockets</h3>
              <hr className="rocket-line" />
            </th>
          </tr>
        </thead>
        <tbody>
          {rockets
            .filter((rockets) => rockets.reserved === true)
            .map((rockets) => (
              <tr key={rockets.id} className="border-rocket">
                <p className="rocket-paragraph">{rockets.rocketName}</p>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

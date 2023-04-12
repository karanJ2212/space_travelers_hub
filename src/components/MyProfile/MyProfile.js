import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

export default function MyProfile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.missions.missions);
  return (
    <div className="profile-section">
      <div className="mprdiv">
        <h2 className="my-profile-h2">My missions</h2>
        <table className="table">
          <tbody>
            {missions
              .filter((missions) => missions.reserved)
              .map((missions) => (
                <tr key={missions.mission_id} className="border">
                  <td className="profiletd">{missions.mission_name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="mprdiv">
        <h2 className="my-profile-h2">My rockets</h2>
        <table className="table">
          <tbody>
            {rockets
              .filter((rockets) => rockets.reserved === true)
              .map((rockets) => (
                <tr key={rockets.id} className="border">
                  <td className="profiletd">{rockets.rocketName}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

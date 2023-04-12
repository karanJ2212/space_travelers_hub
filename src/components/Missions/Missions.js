import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/missions/missionslice';
import MissionStatus from '../MissionStatus';
import MissionJoinButton from '../MissionJoinButton';

export default function Missions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  const { missions, isLoading } = useSelector((store) => store.missions);

  if (isLoading || !missions.length) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <table className="missions">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {(missions || []).map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.mission_description}</td>
              <td>
                <MissionStatus member={mission.reserved} />
              </td>
              <td>
                <MissionJoinButton
                  status={mission.reserved}
                  missionId={mission.mission_id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

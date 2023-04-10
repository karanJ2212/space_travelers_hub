import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../../redux/missions/missionslice';

export default function MissionJoinButton({ status, missionId }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (status) return dispatch(leaveMission(missionId));
    return dispatch(joinMission(missionId));
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`btn ${status ? 'leave' : ''}`}
    >
      {status ? 'Leave' : 'Join'}
      {' '}
      Mission
    </button>
  );
}
MissionJoinButton.propTypes = {
  status: PropTypes.bool.isRequired,
  missionId: PropTypes.string.isRequired,
};

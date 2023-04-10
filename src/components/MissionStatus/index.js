import PropTypes from 'prop-types';

export default function MissionStatus({ member }) {
  const text = member ? 'Active Member' : 'NOT A MEMBER';
  return <span className={member ? 'active' : ''}>{text}</span>;
}
MissionStatus.propTypes = {
  member: PropTypes.bool.isRequired,
};

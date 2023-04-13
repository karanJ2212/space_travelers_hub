import React from 'react';
import PropTypes from 'prop-types';
import './Rocketdetails.css';
import { useDispatch } from 'react-redux';
import { cancelRocket, reserveRocket } from '../../redux/rockets/rocketsSlice';

export default function Rocketdetails(props) {
  const dispatch = useDispatch();
  const { rocket } = props;
  const {
    id, rocketName, description, flickrImages, reserved,
  } = rocket;
  return (
    <li className="list-container">
      <img className="rocket-images" src={flickrImages[0]} alt="rockets" />
      <div className="heading-rockets">
        <h3 className="rocket-name">{rocketName}</h3>
        <p className="paragraph">
          {reserved ? (
            <button type="button" className="reserved">
              Reserved
            </button>
          ) : null}
          {description}
        </p>
        {reserved ? (
          <buttons
            type="button"
            className="cancel"
            onClick={() => dispatch(cancelRocket(id))}
          >
            Cancel Reservation
          </buttons>
        ) : (
          <button
            type="button"
            className="rocket-button"
            onClick={() => dispatch(reserveRocket(id))}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </li>
  );
}

Rocketdetails.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

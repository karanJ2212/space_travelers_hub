import React from 'react';
import PropTypes from 'prop-types';
import './Rocketdetails.css';

export default function Rocketdetails(props) {
  const { rocket } = props;
  const {
    id, rocketName, description, flickrImages, reserved,
  } = rocket;
  console.log(id);
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
          <button
            type="button"
            className="cancel"
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            type="button"
            className="rocket-button"
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
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

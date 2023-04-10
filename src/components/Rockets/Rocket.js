import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocket } from '../../redux/rockets/rocketsSlice';
import Rocketdetails from '../Rocketdetails/Rocketdetails';

export default function Rocket() {
  const rocketData = useSelector((state) => state.rockets.rockets);

  const isLoading = useSelector((state) => state.rockets.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocket());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="data-container">
      <ul className="map">
        {rocketData.map((rocket) => (
          <Rocketdetails key={rocket.id} rocket={rocket} />
        ))}
      </ul>
    </div>
  );
}

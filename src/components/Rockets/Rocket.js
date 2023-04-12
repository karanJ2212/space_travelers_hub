import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocket } from '../../redux/rockets/rocketsSlice';
import Rocketdetails from '../Rocketdetails/Rocketdetails';

export default function Rocket() {
  const rocketData = useSelector((state) => state.rockets.rockets);
  const fetched = useSelector((state) => state.rockets.fetched);
  const isLoading = useSelector((state) => state.rockets.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchRocket());
    }
  }, [dispatch, fetched]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
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

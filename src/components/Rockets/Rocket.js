import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocket } from '../../redux/rockets/rocketsSlice';

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
    <section className="rocketContainer">
      {rocketData.map((rocket) => (
        <div key={rocket.id}>
          <h2>{rocket.name}</h2>
          <img src={rocket.flickr_images[0]} alt={rocket.name} />
        </div>
      ))}
    </section>

  );
}

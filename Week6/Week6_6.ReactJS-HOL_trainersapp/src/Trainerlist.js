import React from 'react';
import { Link } from 'react-router-dom';

const TrainersList = ({ trainers }) => {
  return (
    <div>
      <h2>Trainers List</h2>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.trainerId}>
            <Link to={`/trainers/${trainer.trainerId}`}>
              {trainer.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainersList;

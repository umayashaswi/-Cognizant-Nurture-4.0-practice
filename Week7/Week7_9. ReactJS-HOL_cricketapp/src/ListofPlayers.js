import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 95 },
    { name: "KL Rahul", score: 60 },
    { name: "Shikhar Dhawan", score: 50 },
    { name: "Rishabh Pant", score: 88 },
    { name: "Hardik Pandya", score: 72 },
    { name: "Ravindra Jadeja", score: 65 },
    { name: "Bhuvneshwar Kumar", score: 45 },
    { name: "Jasprit Bumrah", score: 90 },
    { name: "Mohammed Shami", score: 58 },
    { name: "Yuzvendra Chahal", score: 40 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div style={{ padding: '20px', border: '1px solid black', margin: '10px' }}>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {lowScorers.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;

import React from 'react';

const IndianPlayers = () => {
  const oddTeamPlayers = ["Virat", "Rahul", "Pant", "Jadeja", "Shami"];
  const evenTeamPlayers = ["Rohit", "Dhawan", "Hardik", "Bhuvi", "Bumrah", "Chahal"];

  const [odd1, odd2, odd3, ...restOdd] = oddTeamPlayers;
  const [even1, even2, even3, ...restEven] = evenTeamPlayers;

  const T20players = ["Rohit", "Virat", "Hardik"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Mayank"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers]; 

  return (
    <div style={{ padding: '20px', border: '1px solid black', margin: '10px' }}>
      <h2>Odd Players</h2>
      <p>{odd1}, {odd2}, {odd3}, {restOdd.join(", ")}</p>

      <h2>Even Players</h2>
      <p>{even1}, {even2}, {even3}, {restEven.join(", ")}</p>

      <h2>List of Indian Players Merged</h2>
      <ul>
        {mergedPlayers.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;

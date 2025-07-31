import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainersList from './Trainerlist';
import trainers from './TrainersMock';
import TrainerDetail from './TrainerDetails'; 

const App = () => {
  return (
    <BrowserRouter>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1>My Academy Trainers App</h1>
          <nav style={styles.nav}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/trainers" style={styles.link}>Trainers</Link>
          </nav>
        </header>

        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainers" element={<TrainersList trainers={trainers} />} />
            <Route path="/trainers/:id" element={<TrainerDetail />} /> 
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px'
  },
  nav: {
    marginTop: '10px'
  },
  link: {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#3498db',
    fontWeight: 'bold'
  },
  main: {
    padding: '20px',
    borderTop: '1px solid #ccc'
  }
};

export default App;

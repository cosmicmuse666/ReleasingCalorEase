import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav1 = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>ByteWise</Link>

      <div style={styles.centerLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/track" style={styles.link}>Track</Link>
        <Link to="/select" style={styles.link}>Dashboard</Link>        
        <Link to="/contact" style={styles.link}>Connect</Link>
      </div>
      
      <div>
        <button style={styles.loginButton} onClick={() => navigate('/login')}>Track your Calories</button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#131327',
    padding: '1.5rem 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
  logo: {
    color: '#fff',
    fontSize: '2rem',
    fontWeight: '600',
    textDecoration: 'none',
    flex: '1',
  },
  centerLinks: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '3rem',
  },
  link: {
    color: '#E0E0E0',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
    letterSpacing: '0.5px',
    transition: 'color 0.3s ease, transform 0.3s ease',
  },
  loginButton: {
    backgroundColor: '#FFF',
    color: '#131327',
    border: 'none',
    padding: '0.7rem 1.8rem',
    borderRadius: '28px',
    fontWeight: '600',
    fontSize: '1rem',
    letterSpacing: '0.5px',
    cursor: 'pointer',
    boxShadow: '0px 3px 6px rgba(0,0,0,0.15)',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
};

// Add subtle hover styles (Material Vibes)
styles.link[':hover'] = {
  color: '#BBF5FF',
  transform: 'translateY(-2px)',
};

styles.loginButton[':hover'] = {
  backgroundColor: '#A4E3F7',
  transform: 'translateY(-2px)',
};

export default Nav1;

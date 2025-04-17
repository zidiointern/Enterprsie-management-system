import React, { useState } from 'react';

const HomePage: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.logo}>💼 ExpensePro</div>
        <div style={styles.navLinks}>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>Dashboard</a>
          <a href="#" style={styles.link}>Reports</a>
          <a href="#" style={styles.link}>Profile</a>
          <a href="#" style={styles.loginButton}>Login</a>
        </div>
      </nav>

      <header style={styles.hero}>
        <h1 style={styles.title}>Enterprise Expense Management</h1>
        <p style={styles.subtitle}>
          Track, manage, and optimize your company’s expenses with ease.
        </p>
        <button
        style={{
          ...styles.button,
          backgroundColor: isHovered ? 'white' : '#667eea',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Explore More
      </button>
      </header>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    width: '100vw',
    background: 'linear-gradient(to right, #667eea, #764ba2)',
    color: '#fff',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 500,
  },
  loginButton: {
    backgroundColor: '#fff',
    color: '#764ba2',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    fontWeight: 600,
    textDecoration: 'none',
  },
  hero: {
    textAlign: 'center',
    padding: '6rem 2rem',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    margin: '0 auto 2rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    //backgroundColor: '#fff',
    color: '#5a67d8',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
  },
};

export default HomePage;

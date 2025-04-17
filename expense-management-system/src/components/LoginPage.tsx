// LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();  // Initialize navigate
  const [isHovered, setIsHovered] = useState(false);

  const validCredentials = {
    email: 'admin@example.com',
    password: 'admin123',
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    if (email === validCredentials.email && password === validCredentials.password) {
        navigate('/home'); // Redirect on successful login
      } else {
        alert('Invalid credentials!');
      }
    };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Welcome Back 👋</h2>
        <p style={styles.subtext}>Please sign in to your account</p>

        <label style={styles.label} htmlFor="email">Email</label>
        <input
          style={styles.input}
          type="email"
          id="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label style={styles.label} htmlFor="password">Password</label>
        <input
          style={styles.input}
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

<button
  type="submit"
  style={{
    ...styles.button,
    backgroundColor: isHovered ? '#5a67d8' : '#667eea', // Slightly darker on hover
    transition: 'background-color 0.3s ease',
  }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  Login
</button>

        <p style={styles.registerText}>
          Don’t have an account? <a href="#" style={styles.link}>Register</a>
        </p>
      </form>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
    },
    form: {
      background: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
      width: '100%',
      maxWidth: '400px',
    },
    heading: {
      marginBottom: '0.5rem',
      fontSize: '1.8rem',
      color: '#333',
    },
    subtext: {
      marginBottom: '1.5rem',
      color: '#777',
    },
    label: {
      display: 'block',
      marginBottom: '0.3rem',
      fontWeight: 600,
      color: '#444',
    },
    input: {
      width: '100%',
      padding: '0.7rem',
      marginBottom: '1.2rem',
      border: '1px solid #ccc',
      borderRadius: '0.5rem',
      fontSize: '1rem',
    },
    // button: {
    //   width: '100%',
    //   padding: '0.8rem',
    //   backgroundColor: '#667eea',
    //   color: 'white',
    //   border: 'none',
    //   borderRadius: '0.5rem',
    //   fontSize: '1rem',
    //   cursor: 'pointer',
    // },
    registerText: {
      textAlign: 'center',
      marginTop: '1rem',
      color: '#555',
    },
    link: {
      color: '#667eea',
      textDecoration: 'none',
      fontWeight: 500,
    },
  };
  
  export default LoginPage;

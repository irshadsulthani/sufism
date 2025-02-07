import styled, { keyframes } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyles';

// Background Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(1.02);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Hero Section
const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: white;
  text-align: center;
  padding: 50px;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 1s ease-in-out;
  font-family: 'Poppins', sans-serif;

  .hero-content {
    max-width: 800px;
    z-index: 2;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 30px;
  }

  .cta-button {
    background: linear-gradient(90deg, #ff7f50, #ff4500);
    color: #fff;
    padding: 16px 45px;
    font-size: 1.3rem;
    font-weight: 700;
    border-radius: 30px;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    box-shadow: 0 4px 12px rgba(255, 127, 80, 0.5);
    font-family: 'Poppins', sans-serif;
    
    &:hover {
      background: linear-gradient(90deg, #ff4500, #e63946);
      transform: scale(1.05);
      box-shadow: 0 6px 18px rgba(255, 69, 0, 0.6);
    }
  }
`;

// Content Section
const ContentSection = styled.section`
  padding: 100px 10%;
  background: linear-gradient(180deg, #1e3c72, #2a5298);
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: white;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .split-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .card {
    background: white;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    max-width: 420px;
    text-align: left;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    color: #333;
    font-family: 'Poppins', sans-serif;
    
    &:hover {
      transform: translateY(-7px);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 100%;
      border-radius: 12px;
      margin-bottom: 20px;
      transition: transform 0.3s;
    }

    &:hover img {
      transform: scale(1.05);
    }

    h3 {
      font-size: 1.9rem;
      margin-bottom: 12px;
    }

    p {
      font-size: 1.2rem;
      color: #555;
    }
  }
`;

const HomePage = () => {
  return (
    <div>
      <GlobalStyle />
      <HeroSection>
        <div className="hero-content">
          <h1>Welcome to Sufi World</h1>
          <p>Connect with knowledge, spirituality, and faith. Embark on a journey of wisdom and inner peace.</p>
          <a href="#explore" className="cta-button">Explore More</a>
        </div>
      </HeroSection>

      <ContentSection id="explore">
        <h2>Explore Our Pages</h2>
        <p>Delve into the resources we offer, from spiritual teachings to insightful articles.</p>

        <div className="split-container">
          <div className="card">
            <img src="/images/nature.jpg" alt="Sufi Teachings" />
            <h3>Spiritual Teachings</h3>
            <p>Explore the depths of spiritual wisdom and connect with Sufi teachings.</p>
          </div>

          <div className="card">
            <img src="/images/nature2.jpg" alt="Insights & Articles" />
            <h3>Insights & Articles</h3>
            <p>Gain knowledge through thought-provoking articles and insights.</p>
          </div>
        </div>
      </ContentSection>
    </div>
  );
};

export default HomePage;

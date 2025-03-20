import styled, { keyframes } from 'styled-components';


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
  font-family: 'Roboto', sans-serif;

  .hero-content {
    max-width: 800px;
    z-index: 2;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  .cta-button {
    background: linear-gradient(90deg, #ff9800, #e65100);
    color: #fff;
    padding: 14px 40px;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 30px;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    box-shadow: 0 4px 12px rgba(255, 152, 0, 0.5);

    &:hover {
      background: linear-gradient(90deg, #e65100, #bf360c);
      transform: scale(1.05);
      box-shadow: 0 6px 18px rgba(255, 87, 34, 0.6);
    }
  }
`;

// Content Section
const ContentSection = styled.section`
  padding: 100px 10%;
  background: linear-gradient(180deg, #1b1b2f, #1e3c72);
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: white;

  h2 {
    font-size: 2.8rem;
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    justify-content: center;
  }

  .card {
    background: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    text-align: left;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    color: #333;
    max-width: 100%;

    &:hover {
      transform: translateY(-7px);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
    }

    img {
      width: 100%;
      height: 250px;
      border-radius: 12px;
      object-fit: cover;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 1.8rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2rem;
      color: #444;
    }
  }
`;

const HomePage = () => {
  return (
    <div>
      <HeroSection>
        <div className="hero-content">
          <h1 style={{color : '#ffff'}} >Welcome to Sulthaniya Family</h1>
          <p style={{color : '#ffff'}} >Connect with knowledge, spirituality, and faith. Embark on a journey of wisdom and inner peace.</p>
          <a href="#explore" className="cta-button">Explore More</a>
        </div>
      </HeroSection>

      <ContentSection id="explore">
        <h2 style={{color: '#cce0cd'}} >Explore Our Pages</h2>
        <p style={{color: '#cce0cd'}} >Delve into the resources we offer, from spiritual teachings to insightful articles.</p>

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
          
          <div className="card">
            <img src="/images/nature2.jpg" alt="Faith and Wisdom" />
            <h3>Faith and Wisdom</h3>
            <p>Discover the teachings that inspire and deepen your faith.</p>
          </div>
          
          <div className="card">
            <img src="/images/nature.jpg" alt="Journey of Peace" />
            <h3>Journey of Peace</h3>
            <p>Find inner peace through meditative and spiritual practices.</p>
          </div>
        </div>
      </ContentSection>
    </div>
  );
};

export default HomePage;

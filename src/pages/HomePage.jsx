import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://via.placeholder.com/1400x800') no-repeat center center/cover;
  color: white;
  text-align: center;
  padding: 50px;
  border-bottom: 8px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  .hero-content {
    max-width: 700px;
    z-index: 2;
    text-shadow: 3px 3px 8px rgba(0,0,0,0.5);
  }

  h1 {
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 2px;
    animation: fadeInDown 1s ease-in-out;
  }

  p {
    font-size: 22px;
    margin-bottom: 30px;
    animation: fadeInUp 1s ease-in-out;
  }

  .cta-button {
    background: #ffcc00;
    color: #222;
    padding: 14px 32px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 50px;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    
    &:hover {
      background: #ff9900;
      transform: scale(1.05);
    }
  }
`;

const ContentSection = styled.section`
  padding: 80px 20px;
  background: #f9f9f9;
  text-align: center;

  h2 {
    font-size: 42px;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    color: #555;
    margin-bottom: 50px;
  }

  .split-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    max-width: 400px;
    text-align: left;
    transition: transform 0.3s;
    
    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100%;
      border-radius: 10px;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      color: #777;
    }
  }
`;

const HomePage = () => {
  return (
    <div>
      <GlobalStyles />
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

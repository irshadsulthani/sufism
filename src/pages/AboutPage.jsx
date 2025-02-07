import styled from 'styled-components';

const AboutSection = styled.div`
  padding: 60px 20px;
  text-align: center;
  background-color: #f8f9fa;
  color: #333;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 20px;
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #444;
  margin-top: 40px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto 20px;
  line-height: 1.6;
`;

const AboutPage = () => {
  return (
    <AboutSection>
      <Heading>About Us</Heading>
      <Paragraph>We are a platform dedicated to connecting people through knowledge and faith.</Paragraph>
      <SubHeading>Our Mission</SubHeading>
      <Paragraph>To spread awareness and foster a deeper connection to Islamic teachings through educational content.</Paragraph>
    </AboutSection>
  );
};

export default AboutPage;

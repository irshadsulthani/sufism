import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const socialLinks = [
  { icon: <FaFacebook />, link: "https://facebook.com" },
  { icon: <FaInstagram />, link: "https://instagram.com" },
  { icon: <FaTwitter />, link: "https://twitter.com" },
  { icon: <FaLinkedin />, link: "https://linkedin.com" },
];

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1b1b2f, #1e3c72);
  color: white;
  text-align: center;
  padding: 50px 20px;
  font-family: "Roboto", sans-serif;
  position: relative;

  .footer-content {
    max-width: 800px;
    margin: auto;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
  }

  .social-icon {
    font-size: 2rem;
    color: #cce0cd;
    transition: transform 0.3s, color 0.3s;

    &:hover {
      color: #e67e22;
      transform: scale(1.2) rotate(10deg);
    }
  }

  p {
    font-size: 1rem;
    color: #ccc;
    margin-top: 15px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }

    .social-icon {
      font-size: 1.8rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-content">
        <h3>Follow Us</h3>
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;

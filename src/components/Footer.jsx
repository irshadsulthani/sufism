// import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin,  FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebook className="text-xl" />, link: "https://facebook.com", name: "Facebook", color: "hover:text-blue-400" },
  { icon: <FaInstagram className="text-xl" />, link: "https://instagram.com", name: "Instagram", color: "hover:text-pink-500" },
  { icon: <FaTwitter className="text-xl" />, link: "https://twitter.com", name: "Twitter", color: "hover:text-blue-400" },
  { icon: <FaLinkedin className="text-xl" />, link: "https://linkedin.com", name: "LinkedIn", color: "hover:text-blue-600" },
  { icon: <FaWhatsapp className="text-xl" />, link: "https://whatsapp.com", name: "WhatsApp", color: "hover:text-green-500" }
];

const quickLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Events", link: "/events" },
  { name: "Gallery", link: "/gallery" },
  { name: "Contact", link: "/contact" }
];

const services = [
  { name: "Family Gatherings", link: "/services/gatherings" },
  { name: "Community Outreach", link: "/services/outreach" },
  { name: "Educational Support", link: "/services/education" },
  { name: "Cultural Events", link: "/services/events" },
  { name: "Welfare Programs", link: "/services/welfare" }
];

const Footer = () => {
  // const [email, setEmail] = useState("");
  // const [subscribed, setSubscribed] = useState(false);

  // const handleSubscribe = (e) => {
  //   e.preventDefault();
  //   if (email) {
  //     setSubscribed(true);
  //     setEmail("");
  //     // Here you would normally send the email to your API
  //     setTimeout(() => {
  //       setSubscribed(false);
  //     }, 3000);
  //   }
  // };

  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 text-white">
      {/* Top Wave Divider */}
      <div className="text-indigo-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            d="M0,64L60,64C120,64,240,64,360,53.3C480,43,600,21,720,16C840,11,960,21,1080,37.3C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <div className="mb-4 flex items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-indigo-900 font-bold text-xl">SF</span>
              </div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-100">
                Sulthaniya Family
              </h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Building stronger bonds through community, tradition, and shared values. Join us in making a difference in our community.
            </p>
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-300 ${social.color} hover:scale-110 transform transition-all duration-300 bg-indigo-950 w-9 h-9 rounded-full flex items-center justify-center`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-indigo-500 pb-2 flex items-center">
              <span className="w-1.5 h-6 bg-indigo-400 mr-2 rounded"></span>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className="transition-transform duration-200 hover:translate-x-1">
                  <a 
                    href={link.link} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="text-indigo-400 mr-2">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-indigo-500 pb-2 flex items-center">
              <span className="w-1.5 h-6 bg-indigo-400 mr-2 rounded"></span>
              Our Activities
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="transition-transform duration-200 hover:translate-x-1">
                  <a 
                    href={service.link} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="text-indigo-400 mr-2">›</span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-indigo-500 pb-2 flex items-center">
              <span className="w-1.5 h-6 bg-indigo-400 mr-2 rounded"></span>
              Contact Us
            </h4>
            <address className="not-italic text-gray-300">
              <div className="flex items-start mb-3">
                <FaMapMarkerAlt className="mr-2 mt-1 text-indigo-400" /> 
                <div>
                  <p className="mb-1">Sulthaniya Mavandiyoor</p>
                  <p className="mb-1">Malappuram, Kerala </p>
                  <p className="mb-1">India</p>
                </div>
              </div>
              {/* <p className="flex items-center mb-3">
                <FaPhone className="mr-2 text-indigo-400" /> 
                <a href="tel:+91-9876543210" className="hover:text-white">
                  +91-9876543210
                </a>
              </p> */}
              {/* <p className="flex items-center mb-3">
                <FaEnvelope className="mr-2 text-indigo-400" /> 
                <a href="mailto:info@sultaniyafamily.org" className="hover:text-white hover:underline">
                  info@sultaniyafamily.org
                </a>
              </p> */}
            </address>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      {/* <div className="bg-indigo-950 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-semibold">Join Our Community</h4>
              <p className="text-gray-300">Stay updated with our latest events and news</p>
            </div>
            <div className="w-full md:w-auto">
              {subscribed ? (
                <div className="bg-green-700 text-white px-6 py-3 rounded-md animate-pulse">
                  Thank you for subscribing!
                </div>
              ) : (
                <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button 
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors duration-300 font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div> */}

      {/* Copyright */}
      <div className="bg-indigo-950 border-t border-indigo-800 py-6 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sulthaniya Family. All rights reserved.
          </p>
          <div className="mt-2 text-xs text-gray-500 flex justify-center space-x-4">
            <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
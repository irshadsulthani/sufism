import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebook className="text-2xl" />, link: "https://facebook.com", name: "Facebook" },
  { icon: <FaInstagram className="text-2xl" />, link: "https://instagram.com", name: "Instagram" },
  { icon: <FaTwitter className="text-2xl" />, link: "https://twitter.com", name: "Twitter" },
  { icon: <FaLinkedin className="text-2xl" />, link: "https://linkedin.com", name: "LinkedIn" }
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">YourCompany</h3>
            <p className="text-gray-300 mb-4">
              Creating amazing experiences and building digital solutions since 2010.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white hover:scale-110 transform transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-500 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-500 pb-2">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-500 pb-2">Contact Us</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2">123 Business Avenue</p>
              <p className="mb-2">Tech City, TC 12345</p>
              <p className="mb-4">United States</p>
              <p className="flex items-center mb-2">
                <FaEnvelope className="mr-2" /> 
                <a href="mailto:info@yourcompany.com" className="hover:text-white hover:underline">
                  info@yourcompany.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-indigo-950 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-semibold">Subscribe to our newsletter</h4>
              <p className="text-gray-300">Stay updated with our latest news and offers</p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
                  required
                />
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-indigo-950 border-t border-indigo-800 py-6 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} YourCompany. All rights reserved.
          </p>
          <div className="mt-2 text-xs text-gray-500 flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
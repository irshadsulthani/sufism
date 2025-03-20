const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-emerald-600 py-10 px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">About Us</h1>
          </div>
          
          {/* Main Content */}
          <div className="p-8 md:p-12">
            {/* Intro Paragraph */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 text-center">
              We are a platform dedicated to connecting people through knowledge and faith,
              providing resources that inspire spiritual growth and understanding.
            </p>
            
            {/* Mission Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-emerald-700 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To spread awareness and foster a deeper connection to Islamic teachings through educational content
                that is accessible, authentic, and relevant to contemporary life. We strive to build bridges of 
                understanding and create a space where seekers of knowledge can find guidance and inspiration.
              </p>
            </div>
            
            {/* Values Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-emerald-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-emerald-700 mb-3">Authenticity</h3>
                <p className="text-gray-600">
                  We are committed to presenting teachings that are grounded in authentic sources and scholarship.
                </p>
              </div>
              
              <div className="bg-emerald-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-emerald-700 mb-3">Inclusivity</h3>
                <p className="text-gray-600">
                  We welcome people from all backgrounds and levels of understanding on their spiritual journey.
                </p>
              </div>
              
              <div className="bg-emerald-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-emerald-700 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in the quality and presentation of our educational resources.
                </p>
              </div>
            </div>
            
            {/* Team Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-emerald-700 mb-4">Our Team</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our dedicated team consists of scholars, educators, and technologists who share a passion for 
                making Islamic knowledge accessible in the digital age. Together, we work to create content 
                and experiences that enlighten, educate, and inspire.
              </p>
              
              <div className="flex justify-center mt-8">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                  Join Our Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
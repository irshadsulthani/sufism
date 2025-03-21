import { useEffect } from 'react';

const HomePage = () => {
  // Fade-in effect on page load
  useEffect(() => {
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.classList.add('opacity-100', 'scale-100');
      heroSection.classList.remove('opacity-0', 'scale-105');
    }
  }, []);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section 
        id="hero-section"
        className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-900 to-sky-700 text-white text-center p-12 relative overflow-hidden shadow-inner transition-all duration-1000 ease-in-out opacity-0 scale-105"
      >
        <div className="max-w-3xl z-10">
          <h1 className="text-5xl font-bold tracking-wide mb-6 text-white drop-shadow-lg">
            Sulthaniya Knowledge Repository
          </h1>
          <p className="text-2xl mb-8 text-white drop-shadow-md">
            Access sacred texts, scholarly works, and spiritual guidance. Discover the treasures of Islamic wisdom in our comprehensive digital library.
          </p>
          <a 
            href="#explore" 
            className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 px-10 text-xl font-bold rounded-full transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:scale-105 hover:from-amber-700 hover:to-amber-800"
          >
            Browse Collection
          </a>
        </div>
      </section>

      {/* Content Section - Using a slightly different background than navbar */}
      <section 
        id="explore" 
        className="py-24 px-8 md:px-16 bg-gradient-to-b from-[oklch(0.971_0.013_17.38)] to-[oklch(0.96_0.02_17.38)] text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-800">
          Our Digital Collection
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-slate-700">
          Explore our carefully curated library of Islamic texts, scholarly works, and spiritual guides - all available in high-quality PDF format for easy reading and reference.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer text-left overflow-hidden border border-slate-200">
            <div className="h-64 bg-blue-100 flex justify-center items-center">
              <img 
                src="/images/nature.jpg" 
                alt="Quran Studies" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-blue-800">Quranic Studies</h3>
              <p className="text-lg text-slate-600">Access translations, tafsir, and scholarly commentary on the Holy Quran to deepen your understanding.</p>
              <a href="#" className="inline-block mt-4 text-amber-600 font-semibold hover:text-amber-700">View Collection →</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer text-left overflow-hidden border border-slate-200">
            <div className="h-64 bg-blue-100 flex justify-center items-center">
              <img 
                src="/images/nature2.jpg" 
                alt="Hadith Collections" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-blue-800">Hadith Collections</h3>
              <p className="text-lg text-slate-600">Explore authenticated compilations of hadith from renowned scholars with explanations and context.</p>
              <a href="#" className="inline-block mt-4 text-amber-600 font-semibold hover:text-amber-700">View Collection →</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer text-left overflow-hidden border border-slate-200">
            <div className="h-64 bg-blue-100 flex justify-center items-center">
              <img 
                src="/images/nature2.jpg" 
                alt="Sufi Literature" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-blue-800">Sufi Literature</h3>
              <p className="text-lg text-slate-600">Discover the rich tradition of Sufi writings that illuminate the path to spiritual enlightenment.</p>
              <a href="#" className="inline-block mt-4 text-amber-600 font-semibold hover:text-amber-700">View Collection →</a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer text-left overflow-hidden border border-slate-200">
            <div className="h-64 bg-blue-100 flex justify-center items-center">
              <img 
                src="/images/nature.jpg" 
                alt="Islamic History" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-blue-800">Islamic History</h3>
              <p className="text-lg text-slate-600">Learn about Islamic civilization, important historical figures, and significant events from authentic sources.</p>
              <a href="#" className="inline-block mt-4 text-amber-600 font-semibold hover:text-amber-700">View Collection →</a>
            </div>
          </div>
        </div>

        {/* Featured PDF Section - with a slight bg difference */}
        {/* <div className="mt-24 p-8 rounded-2xl bg-[oklch(0.965_0.015_17.38)]">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">
            Featured Resources
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-slate-700">
            Our most popular and recommended readings, carefully selected to provide spiritual guidance and knowledge.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all">
              <div className="bg-amber-50 p-4 rounded-lg mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">The Spiritual Path</h3>
              <p className="text-slate-600 mb-4">An essential guide for seekers of spiritual knowledge, explaining core principles and practices.</p>
              <a href="#" className="block w-full py-2 bg-blue-700 text-white text-center rounded-lg hover:bg-blue-800 transition-colors">Download PDF</a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all">
              <div className="bg-amber-50 p-4 rounded-lg mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Daily Supplications</h3>
              <p className="text-slate-600 mb-4">A comprehensive collection of daily prayers and invocations for spiritual protection and growth.</p>
              <a href="#" className="block w-full py-2 bg-blue-700 text-white text-center rounded-lg hover:bg-blue-800 transition-colors">Download PDF</a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all">
              <div className="bg-amber-50 p-4 rounded-lg mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Wisdom of the Elders</h3>
              <p className="text-slate-600 mb-4">Collected teachings and insights from respected scholars and spiritual guides throughout history.</p>
              <a href="#" className="block w-full py-2 bg-blue-700 text-white text-center rounded-lg hover:bg-blue-800 transition-colors">Download PDF</a>
            </div>
          </div>
        </div> */}
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-4">Join Our Knowledge Community</h2>
          <p className="text-xl mb-8">Subscribe to receive notifications about new additions to our library and exclusive spiritual content.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-lg flex-grow text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-bold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;
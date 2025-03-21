import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Book, Heart, History, Sparkles } from 'lucide-react';

const HomePage = () => {
  // Fade-in effect on page load
  useEffect(() => {
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.classList.add('opacity-100', 'scale-100');
      heroSection.classList.remove('opacity-0', 'scale-105');
    }
  }, []);

  // State for hadith carousel
  const [currentHadithIndex, setCurrentHadithIndex] = useState(0);
  
  // Hadith data
  const hadiths = [
    {
      source: "Sahih al-Bukhari 52",
      arabic: "أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ أَلَا وَهِيَ الْقَلْبُ",
      english: "Verily, in the body is a piece of flesh which, if sound, the entire body is sound, and if corrupt, the entire body is corrupt. Truly, it is the heart.",
      malayalam: `തീർച്ചയായും ശരീരത്തിൽ ഒരു മാംസക്കഷണമുണ്ട്, അത് ആരോഗ്യമുള്ളതാണെങ്കിൽ ശരീരം മുഴുവൻ ആരോഗ്യമുള്ളതാണ്, ദുഷിച്ചതാണെങ്കിൽ ശരീരം മുഴുവൻ ദുഷിച്ചതാണ്. വാസ്തവത്തിൽ അത് ഹൃദയമാണ്`
    },
    {
      source: "Sahih al-Bukhari 3209",
      arabic: "إِنَّ اللَّهَ إِذَا أَحَبَّ عَبْدًا نَادَى جِبْرِيلَ: إِنَّ اللَّهَ يُحِبُّ فُلَانًا فَأَحْبِبْهُ فَيُحِبُّهُ جِبْرِيلُ فَيُنَادِي جِبْرِيلُ فِي أَهْلِ السَّمَاءِ: إِنَّ اللَّهَ يُحِبُّ فُلَانًا فَأَحِبُّوهُ فَيُحِبُّهُ أَهْلُ السَّمَاءِ ثُمَّ يُوضَعُ لَهُ الْقَبُولُ فِي الْأَرْضِ",
      english: "When Allah loves a servant, He calls Jibreel (Gabriel) and says: 'Indeed, I love so-and-so, so love him.' So Jibreel loves him. Then he calls out in the heavens: 'Indeed, Allah loves so-and-so, so love him.' Then the inhabitants of the heavens love him. And then acceptance is placed for him on Earth.",
      malayalam: `അല്ലാഹുവിന്റെ ദൂതൻ (ﷺ) പറഞ്ഞു: "അല്ലാഹു ഒരു ദാസനെ സ്നേഹിക്കുമ്പോൾ, അവൻ ജിബ്‌രീലിനെ വിളിച്ച് പറയും: 'തീർച്ചയായും, ഞാൻ ഇന്നയാളെ സ്നേഹിക്കുന്നു, അതിനാൽ അവനെ സ്നേഹിക്കുക.' അങ്ങനെ ജിബ്‌രീൽ അവനെ സ്നേഹിക്കുന്നു. പിന്നെ അവൻ സ്വർഗത്തിൽ വിളിച്ചുപറയുന്നു: 'തീർച്ചയായും, അല്ലാഹു ഇന്നയാളെ സ്നേഹിക്കുന്നു, അതിനാൽ അവനെ സ്നേഹിക്കുക.' അപ്പോൾ സ്വർഗവാസികൾ അവനെ സ്നേഹിക്കുന്നു. അപ്പോൾ ഭൂമിയിൽ അവന് സ്വീകാര്യത ലഭിക്കുന്നു."`
    },
    {
      source: "Sayyiduna Umar ibn Al-Khattab (رضي الله عنه)",
      arabic: "قال عمر بن الخطاب رضي الله عنه: حاسِبُوا أنفسَكُم قبلَ أنْ تُحاسَبُوا، وزِنُوا أعمالَكُم قبلَ أنْ تُوزَنَ عليكُم، وتَهيّؤوا للعرضِ الأكبرِ.",
      english: "Take account of yourselves before you are taken to account. Weigh your deeds before they are weighed for you. And prepare yourselves for the Great Presentation (on the Day of Judgment).",
      malayalam: "വിചാരണ ചെയ്യപ്പെടുന്നതിന് മുമ്പ് നിങ്ങളെത്തന്നെ വിലയിരുത്തുക. നിങ്ങളുടെ പ്രവൃത്തികൾ നിങ്ങൾക്ക് തൂക്കിനോക്കുന്നതിന് മുമ്പ് അവയെ തൂക്കിനോക്കുക. (ന്യായവിധി ദിനത്തിലെ) മഹത്തായ അവതരണത്തിനായി നിങ്ങളെത്തന്നെ ഒരുക്കുക."
    }
  ];

  // Collection data with icons
  const collections = [
    {
      title: "Quranic Studies",
      description: "Access translations, tafsir, and scholarly commentary on the Holy Quran to deepen your understanding.",
      icon: Book,
      bgImage: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Hadith Collections",
      description: "Explore authenticated compilations of hadith from renowned scholars with explanations and context.",
      icon: Heart,
      bgImage: "https://images.unsplash.com/photo-1584286595398-a59511e3a4c5?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sufi Literature",
      description: "Discover the rich tradition of Sufi writings that illuminate the path to spiritual enlightenment.",
      icon: Sparkles,
      bgImage: "https://images.unsplash.com/photo-1584286595398-a59511e3a4c5?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Islamic History",
      description: "Learn about Islamic civilization, important historical figures, and significant events from authentic sources.",
      icon: History,
      bgImage: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=800"
    }
  ];



  
  // State for collection carousel
  const [currentCollectionIndex, setCurrentCollectionIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle hadith navigation
  const nextHadith = () => {
    setCurrentHadithIndex((prevIndex) => (prevIndex + 1) % hadiths.length);
  };

  const prevHadith = () => {
    setCurrentHadithIndex((prevIndex) => (prevIndex - 1 + hadiths.length) % hadiths.length);
  };

  // Handle collection navigation
  const showCollection = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentCollectionIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const nextCollection = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentCollectionIndex((prevIndex) => (prevIndex + 1) % collections.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevCollection = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentCollectionIndex((prevIndex) => (prevIndex - 1 + collections.length) % collections.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="font-sans bg-[#f8f9fa]">
      {/* Hero Section */}
      <section 
        id="hero-section"
        className="relative flex justify-center items-center min-h-screen bg-[url('https://images.unsplash.com/photo-1584286595398-a59511e3a4c5?auto=format&fit=crop&q=80')] bg-cover bg-center text-white text-center p-12 overflow-hidden transition-all duration-1000 ease-in-out opacity-0 scale-105"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-950/90"></div>
        <div className="relative max-w-4xl z-10">
          <h1 className="text-6xl font-bold tracking-tight mb-8 text-white drop-shadow-lg">
            Sulthaniya Knowledge Repository
          </h1>
          <p className="text-2xl mb-12 text-blue-100 leading-relaxed">
            Access sacred texts, scholarly works, and spiritual guidance. Discover the treasures of Islamic wisdom in our comprehensive digital library.
          </p>
          <a 
            href="#explore" 
            className="group inline-flex items-center gap-2 bg-white text-blue-900 py-4 px-8 text-xl font-semibold rounded-full transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-xl"
          >
            Browse Collection
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Featured Hadith Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Wisdom from the Prophet ﷺ</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-blue-700/80 max-w-3xl mx-auto">
              Illuminating our hearts and minds with the timeless wisdom of the Messenger of Allah ﷺ
            </p>
          </div>
          
          {/* Hadith Carousel */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-6 px-8 text-white flex justify-between items-center">
                <p className="text-lg font-medium">{hadiths[currentHadithIndex].source}</p>
                <div className="flex items-center gap-4">
                  <span className="text-sm bg-white/10 px-3 py-1 rounded-full">
                    {currentHadithIndex + 1}/{hadiths.length}
                  </span>
                </div>
              </div>
              
              <div className="p-10">
                {/* Arabic */}
                <div className="mb-12">
                  <h3 className="font-bold text-blue-600 text-lg mb-4">Arabic</h3>
                  <p className="text-3xl leading-loose font-amiri text-right" style={{ direction: 'rtl' }}>
                    {hadiths[currentHadithIndex].arabic}
                  </p>
                </div>
                
                {/* English */}
                <div className="mb-12">
                  <h3 className="font-bold text-blue-600 text-lg mb-4">English</h3>
                  <p className="text-xl leading-relaxed text-slate-700">
                    {hadiths[currentHadithIndex].english}
                  </p>
                </div>
                
                {/* Malayalam */}
                <div>
                  <h3 className="font-bold text-blue-600 text-lg mb-4">Malayalam</h3>
                  <p className="text-xl leading-relaxed text-slate-700" lang="ml">
                    {hadiths[currentHadithIndex].malayalam}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevHadith}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-6 bg-white rounded-full p-4 shadow-lg hover:bg-blue-50 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-blue-900 transition-transform group-hover:-translate-x-1" />
            </button>
            <button 
              onClick={nextHadith}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-6 bg-white rounded-full p-4 shadow-lg hover:bg-blue-50 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-blue-900 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section 
        id="explore" 
        className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Our Digital Collection
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-blue-700/80 max-w-3xl mx-auto">
              Explore our carefully curated library of Islamic texts, scholarly works, and spiritual guides
            </p>
          </div>

          {/* Collection Carousel */}
          <div className="relative">
            <div className="flex justify-center">
              <div 
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100 w-full max-w-4xl transition-all duration-500 hover:shadow-2xl"
              >
                <div 
                  className="h-80 relative bg-cover bg-center"
                  style={{ backgroundImage: `url(${collections[currentCollectionIndex].bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-950/80 flex items-center justify-center">
                    {React.createElement(collections[currentCollectionIndex].icon, {
                      className: "w-20 h-20 text-white opacity-90"
                    })}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-bold mb-4 text-blue-900">
                    {collections[currentCollectionIndex].title}
                  </h3>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    {collections[currentCollectionIndex].description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-blue-600 text-lg font-semibold hover:text-blue-700 transition-colors">
                    Explore Collection
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevCollection}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-6 bg-white rounded-full p-4 shadow-lg hover:bg-blue-50 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-blue-900 transition-transform group-hover:-translate-x-1" />
            </button>
            <button 
              onClick={nextCollection}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-6 bg-white rounded-full p-4 shadow-lg hover:bg-blue-50 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-blue-900 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 gap-2">
              {collections.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => showCollection(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentCollectionIndex 
                      ? "bg-blue-600 w-8" 
                      : "bg-blue-200 hover:bg-blue-300"
                  }`}
                  aria-label={`Show collection ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
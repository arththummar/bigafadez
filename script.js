const App = () => {
    const [currentSection, setCurrentSection] = React.useState('home');
    const [image, setImage] = React.useState(null);
    const [result, setResult] = React.useState(null);
    const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  
    // Navigation with smooth scroll
    const navigate = (section) => {
      document.getElementById('main-content').style.opacity = '0';
      setTimeout(() => {
        setCurrentSection(section);
        document.getElementById('main-content').style.opacity = '1';
      }, 300);
    };
  
    // Mock ML functions
    const analyzeImage = () => {
      setIsAnalyzing(true);
      setTimeout(() => {
        const hairTypes = ['Straight', 'Wavy', 'Curly'];
        const faceShapes = ['Oval', 'Round', 'Square'];
        const hairType = hairTypes[Math.floor(Math.random() * hairTypes.length)];
        const faceShape = faceShapes[Math.floor(Math.random() * faceShapes.length)];
        
        setResult({
          hairType,
          faceShape,
          recommendation: hairType === 'Curly' || faceShape === 'Round' 
            ? 'Mid Taper Fade' 
            : 'Low Taper Fade'
        });
        setIsAnalyzing(false);
      }, 2000);
    };
  
    return (
      <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
        {/* Animated background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white/5"
              style={{
                width: `${Math.random() * 15 + 5}px`,
                height: `${Math.random() * 15 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}></div>
          ))}
        </div>
  
        {/* Holographic navigation */}
        <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex space-x-2 bg-gray-800/80 backdrop-blur-lg rounded-full p-2 border border-gray-700/50 shadow-2xl">
            {['home', 'mission', 'services', 'analyzer'].map((item) => (
              <button
                key={item}
                onClick={() => navigate(item)}
                className={`px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-300 ${
                  currentSection === item 
                    ? 'bg-gradient-to-r from-amber-500 to-red-600 text-white shadow-lg shadow-amber-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {item === 'home' ? 'Home' : 
                 item === 'mission' ? 'Our Mission' : 
                 item === 'services' ? 'Services' : 'Fade Finder'}
              </button>
            ))}
          </div>
        </nav>
  
        {/* Main content with fade transitions */}
        <main 
          id="main-content"
          className="transition-opacity duration-300 opacity-100 min-h-screen"
        >
          {currentSection === 'home' && (
            <section className="max-w-6xl mx-auto px-8 py-24 flex flex-col items-center justify-center min-h-screen">
              <div className="text-center mb-16">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500 tracking-tight">
                  BigA<span className="text-white">Fadez</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Where precision meets style in the art of the perfect fade
                </p>
              </div>
  
              <div className="grid md:grid-cols-3 gap-8 w-full">
                {[
                  { title: "Master Craftsmanship", desc: "Barbers trained in the latest techniques" },
                  { title: "AI-Powered Recommendations", desc: "Find your perfect fade with our technology" },
                  { title: "Luxury Experience", desc: "Premium products and comfortable environment" }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="bg-gray-800/50 border border-gray-700/30 rounded-2xl p-8 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="text-amber-400 text-3xl mb-4">{i+1}.</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
  
              <button 
                onClick={() => navigate('analyzer')}
                className="mt-16 px-12 py-4 bg-gradient-to-r from-amber-500 to-red-600 rounded-full text-lg font-bold tracking-wider hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105"
              >
                Find Your Fade →
              </button>
            </section>
          )}
  
          {currentSection === 'mission' && (
            <section className="max-w-4xl mx-auto px-8 py-24 min-h-screen flex items-center">
              <div className="bg-gray-800/50 border border-gray-700/30 rounded-3xl p-12 backdrop-blur-sm">
                <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
                  Our Mission
                </h2>
                
                <div className="space-y-8">
                  <p className="text-lg leading-relaxed">
                    At <span className="text-amber-400">BigAFadez</span>, we believe every haircut is a statement. 
                    Our mission is to blend the timeless art of barbering with cutting-edge technology 
                    to create personalized, precision fades that elevate your style.
                  </p>
                  
                  <div className="border-l-4 border-amber-500 pl-6 py-2 my-6">
                    <p className="italic text-gray-300">
                      "We don't just cut hair - we craft confidence."
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mt-12">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <span className="w-3 h-3 bg-amber-400 rounded-full mr-2"></span>
                        The Future of Barbering
                      </h3>
                      <p className="text-gray-400">
                        Using AI and augmented reality to visualize your perfect cut before we make the first snip.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                        Community First
                      </h3>
                      <p className="text-gray-400">
                        We're more than a barbershop - we're a hub for style, culture, and connection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
  
          {currentSection === 'services' && (
            <section className="max-w-6xl mx-auto px-8 py-24 min-h-screen">
              <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
                Our Services
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { 
                    name: "Signature Fade", 
                    price: "$45", 
                    desc: "Our most requested service featuring precision blending and sharp lines",
                    time: "45 min"
                  },
                  { 
                    name: "Beard Sculpt", 
                    price: "$30", 
                    desc: "Detailed beard shaping and grooming with hot towel treatment",
                    time: "30 min"
                  },
                  { 
                    name: "Executive Cut", 
                    price: "$60", 
                    desc: "Full service including cut, shampoo, and style consultation",
                    time: "60 min"
                  },
                  { 
                    name: "The Works", 
                    price: "$85", 
                    desc: "Complete package with fade, beard, facial, and luxury products",
                    time: "90 min"
                  }
                ].map((service, i) => (
                  <div 
                    key={i}
                    className="bg-gray-800/50 border border-gray-700/30 rounded-2xl p-8 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{service.name}</h3>
                      <span className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full text-sm">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-6">{service.desc}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">{service.time}</span>
                      <button className="text-amber-400 hover:text-white transition-colors">
                        Book Now →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
  
          {currentSection === 'analyzer' && (
            <section className="max-w-4xl mx-auto px-8 py-24 min-h-screen flex items-center">
              <div className="w-full bg-gray-800/50 border border-gray-700/30 rounded-3xl p-12 backdrop-blur-sm">
                <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
                  Fade Finder
                </h2>
                
                <div className="space-y-8">
                  <p className="text-gray-400">
                    Upload your photo to get a personalized fade recommendation based on your hair type and face shape.
                  </p>
                  
                  <div className="group relative h-64 w-full rounded-xl bg-gray-700/30 border-2 border-dashed border-gray-600/50 hover:border-amber-500/50 transition-all duration-300 flex flex-col items-center justify-center">
                    {!image ? (
                      <>
                        <div className="text-5xl mb-4 text-gray-500 group-hover:text-amber-400 transition-colors">↑</div>
                        <p className="text-lg mb-1">Drag & drop your photo</p>
                        <p className="text-sm text-gray-500">or click to browse</p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => e.target.files && e.target.files[0] && setImage(URL.createObjectURL(e.target.files[0]))}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                      </>
                    ) : (
                      <>
                        <img src={image} alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-80 rounded-xl" />
                        <button 
                          onClick={() => setImage(null)}
                          className="absolute top-4 right-4 bg-red-500/80 hover:bg-red-500 text-white p-2 rounded-full z-10"
                        >
                          ×
                        </button>
                      </>
                    )}
                  </div>
                  
                  <button
                    onClick={analyzeImage}
                    disabled={!image || isAnalyzing}
                    className={`w-full py-4 px-6 rounded-xl text-lg font-bold tracking-wider transition-all duration-300 ${
                      !image || isAnalyzing
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-amber-500 to-red-600 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02]'
                    }`}
                  >
                    {isAnalyzing ? (
                      <span className="flex items-center justify-center">
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        Analyzing...
                      </span>
                    ) : (
                      'Find My Perfect Fade'
                    )}
                  </button>
                  
                  {result && (
                    <div className="mt-8 p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                      <h3 className="text-xl font-bold mb-6 flex items-center">
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        Your Recommended Fade
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-gray-800 rounded-lg">
                          <p className="text-gray-400 text-sm">Hair Type</p>
                          <p className="text-xl font-mono text-amber-300">{result.hairType}</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg">
                          <p className="text-gray-400 text-sm">Face Shape</p>
                          <p className="text-xl font-mono text-red-300">{result.faceShape}</p>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-amber-900/30 to-red-900/30 rounded-lg border border-amber-500/20">
                        <p className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-red-400">
                          {result.recommendation}
                        </p>
                        <p className="text-gray-400">
                          {result.recommendation.includes('Mid') 
                            ? "This medium-length fade balances volume and structure, perfect for your features." 
                            : "A sharp, clean look that accentuates your facial structure."}
                        </p>
                      </div>
                      
                      <button 
                        onClick={() => navigate('services')}
                        className="mt-6 w-full py-3 px-6 border border-amber-500/50 text-amber-400 rounded-lg hover:bg-amber-500/10 transition-colors duration-300"
                      >
                        Book This Style Now
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}
        </main>
  
        {/* Global styles */}
        <style>{`
          @keyframes float {
            0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-100vh) translateX(20px) rotate(360deg); opacity: 0; }
          }
          body {
            overflow-x: hidden;
          }
        `}</style>
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
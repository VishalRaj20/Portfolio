import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="container mx-auto py-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="text-xl text-gray-700 mb-4 block">Welcome to my digital space</span>

            <h1 className="text-6xl lg:text-8xl font-extrabold leading-tight text-gray-900 mb-4">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:300%]">
                Vishal Raj
              </span>
            </h1>

            <p className="text-2xl font-semibold text-gray-800 mb-2">Full Stack Developer | Aspiring software developer</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 mx-auto lg:mx-0"></div>

            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0 mb-10">
              Passionate about software development, artificial intelligence, and web technologies. Currently pursuing Electronics and Communication Engineering at NIT Andhra Pradesh.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="#projects">
                <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View My Work
                    <ArrowDown className="w-5 h-5 rotate-45" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </a>
              <a
                href="/Vishal_Raj.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="px-10 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-bold text-lg hover:border-purple-600 hover:text-purple-600 hover:shadow-lg hover:bg-purple-50 transition-all duration-300">
                  View CV
                </button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/VishalRaj20"
                aria-label="GitHub Profile"
                className="p-4 bg-white rounded-2xl shadow-md hover:shadow-purple-500/20 transition-all transform hover:scale-110 border border-gray-100"
              >
                <Github className="w-6 h-6 text-gray-700 hover:text-purple-600 transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishal-raj-816485253/"
                aria-label="LinkedIn Profile"
                className="p-4 bg-white rounded-2xl shadow-md hover:shadow-purple-500/20 transition-all transform hover:scale-110 border border-gray-100"
              >
                <Linkedin className="w-6 h-6 text-gray-700 hover:text-purple-600 transition-colors duration-300" />
              </a>
              <a
                href="mailto:vishalraj857808@gmail.com"
                aria-label="Send Email"
                className="p-4 bg-white rounded-2xl shadow-md hover:shadow-purple-500/20 transition-all transform hover:scale-110 border border-gray-100"
              >
                <Mail className="w-6 h-6 text-gray-700 hover:text-purple-600 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl border-8 border-white">
              <img
                src="/portifoliopng-removebg-preview.png"
                alt="Vishal Raj Profile Picture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-pink-500/10"></div>
            </div>

            {/* Floating Blobs */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse blur-sm"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000 blur-sm"></div>
            <div className="absolute top-1/2 -left-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full opacity-15 animate-pulse delay-500 blur-sm"></div>
            <div className="absolute top-1/4 -right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full opacity-25 animate-pulse delay-700 blur-sm"></div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-2 bg-white rounded-full shadow-lg">
            <ArrowDown className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { ExternalLink, Github, Eye } from 'lucide-react';

  const Projects = () => {
  const projects = [
    {
      title: 'Car Marketplace Platform',
      description: 'A full-stack car marketplace built with AI-powered car detail extraction using Gemini 1.5 Flash API. Users can auto-populate listings from images or descriptions, book or cancel test drives, and view live booking updates via a real-time dashboard.',
      image: 'CarMaketPlace.png',
      technologies: ['Next.js', 'React', 'Supabase', 'Clerk', 'ShadCn UI', 'Vercel'],
      liveUrl: 'https://car-market-place-eight.vercel.app/',
      githubUrl: 'https://github.com/VishalRaj20/CarApp.git',
      featured: true
    },
    {
      title: 'Realtime Responsive Chat App',
      description: 'A real-time chat app supporting 1:1 and group messaging with text, image, and file sharing. Built with Socket.IO and secured with JWT auth, featuring <150ms latency and real-time online status updates.',
      image: 'ChatApp UI.png',
      technologies: ['React', 'Socket.IO', 'Express.js', 'Node.js', 'MongoDB'],
      liveUrl: 'https://chatapp-yt-wmo5.onrender.com/',
      githubUrl: 'https://github.com/VishalRaj20/ChatApp-yt.git',
      featured: true
    },
    {
      title: 'BookStore App',
      description: 'An online book platform showcasing 250+ books across 15+ genres. Features include secure login, responsive design, and seamless book management for a smooth digital reading experience.',
      image: 'BookStore.png',
      technologies: ['MongoDB', 'React.js', 'TailwindCSS', 'Express.js', 'Node.js'],
      liveUrl: 'https://bookstoreapp-frontend-6drb.onrender.com/',
      githubUrl: "https://github.com/VishalRaj20/BookStore",
      featured: true
    },
    {
      title: 'Fake News Detector – Inspira Hackathon',
      description: 'Top 5 Finalist project at Inspira 24-Hour Hackathon 2025. Built an AI-powered Fake News Detector using MobileBERT integrated with a browser plugin. I managed both frontend and backend development, and successfully integrated the trained ML model into the project.',
      image: 'Fake_new_detector.png',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MobileBERT', 'Browser Extension'],
      liveUrl: 'https://hackathon-frontend1-qhwz.onrender.com/',
      githubUrl: 'https://github.com/VishalRaj20/Inspira-Hackathon',
      featured: true
    },
    {
      title: 'Amazon Clone',
      description: 'A fully functional e-commerce platform inspired by Amazon with 50+ product listings, optimized search/filtering, and a responsive user interface.',
      image: 'amazonClone.png',
      technologies: ['HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/VishalRaj20/Amazon-clone',
      featured: true
    },
  ];


  return (
    <section id="projects" className="pt-20 pb-10 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <Eye className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-700 font-medium text-sm transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
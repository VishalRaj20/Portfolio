import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Summer Intern - Full Stack Developer',
    company: 'South Bihar Power Distribution Company Limited (SBPDCL)',
    location: 'Patna, Bihar (On Site)',
    period: 'May 2025 – Jun 2025',
    description:
      'Completed in-plant training at SBPDCL’s IT Cell, contributing to a full-stack car marketplace project under IT Manager (SCADA) supervision.',
    achievements: [
      'Developed a full-stack Car Marketplace Platform with Next.js, Supabase, Clerk, and ShadCn UI',
      'Integrated Gemini API for AI-based car detail extraction from images and descriptions',
      'Implemented test drive booking workflows and dynamic dashboards for dealership operations',
      'Deployed a responsive, cross-device application on Vercel with real-time updates and secure access',
    ],
    technologies: ['Next.js', 'React', 'Supabase', 'Clerk', 'ShadCn UI', 'Vercel', 'Gemini API'],
    certificateUrl: 'https://drive.google.com/file/d/1p3-gVB966-sY35KmfmJ5eWm7vdHSprv0/view?usp=drive_link',
  },

  {
    title: 'Winter Research Intern',
    company: 'Indian Institute of Technology, Bhubaneswar',
    location: 'Remote',
    period: 'Dec 2024 – Jan 2025',
    description:
      'Completed a remote internship on a Microsoft-supported project under the Academic Partnership Grant 2024, focused on personalized travel planning using Geospatial Data and Large Language Models (LLMs).',
    achievements: [
      'Processed and structured 5,000+ raw travel data points to build intelligent, user-specific travel plans',
      'Collaborated with the research team to refine dataset quality and annotations',
      'Designed and fine-tuned prompts for LLMs to generate accurate travel itineraries from natural language inputs',
    ],
    technologies: ['Python', 'LLMs', 'Geospatial Data'],
    certificateUrl: 'https://drive.google.com/file/d/1xOlKxNHRChZ2_Agfvb1K0AXplN90WaJa/view?usp=sharing',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="pt-20 pb-10 bg-gradient-to-br from-gray-50 to-blue-50 px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 hidden lg:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>

                <div className={`lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="hidden lg:block lg:w-1/2"></div>

                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                      <div className="p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-blue-600 font-semibold mb-3">
                            
                            {exp.company}
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-500 text-sm">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {exp.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {exp.certificateUrl && (
                          <a
                            href={exp.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm mt-2"
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            View Certificate
                          </a>
                        )}
                      </div>

                      <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  </div>
                </div>

                <div className="lg:hidden ml-4 mt-4 mb-8 w-0.5 h-8 bg-gradient-to-b from-blue-600 to-purple-600 last:hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

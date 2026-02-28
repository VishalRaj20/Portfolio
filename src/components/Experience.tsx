import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'South Bihar Power Distribution Company Limited (SBPDCL)',
    location: 'Patna, Bihar (On Site)',
    period: 'May 2025 – Jun 2025',
    description:
      'Worked in the IT Cell under the IT Manager (SCADA), building a production-grade full-stack Car Marketplace platform.',
    achievements: [
      'Developed a production-grade Car Marketplace platform using Next.js and Supabase (PostgreSQL), supporting 100+ car listings, wishlisting, 10+ advanced filters, detailed car pages, and end-to-end test drive booking workflows.',
      'Integrated role-based authentication and access control using Clerk for two user roles (buyers and dealership admins), including secure session handling, booking state management, and dealership working hours configuration.',
      'Designed admin and dealership dashboards to monitor inventory states (available/sold/unavailable) and test drive statuses (pending/confirmed/completed).',
      'Automated car listing using Google Gemini API (Flash 1.5) to extract structured vehicle details from uploaded images with confidence scoring, significantly reducing manual data entry.',
    ],
    technologies: [
      'Next.js',
      'React',
      'Supabase',
      'PostgreSQL',
      'Clerk',
      'Google Gemini API',
      'Vercel',
    ],
    certificateUrl:
      'https://drive.google.com/file/d/1p3-gVB966-sY35KmfmJ5eWm7vdHSprv0/view',
  },

  {
    title: 'Research Intern',
    company: 'Indian Institute of Technology, Bhubaneswar',
    location: 'Remote',
    period: 'Dec 2024 – Jan 2025',
    description:
      'Collaborated on a Microsoft-supported research internship focused on personalized travel planning using geospatial datasets and Large Language Models (LLMs).',
    achievements: [
      'Built a personalized travel planning system using structured geospatial and user-preference datasets to improve itinerary relevance and recommendation accuracy.',
      'Processed and structured large-scale travel datasets to enhance model input quality and system reliability.',
      'Engineered rule-based backend logic to generate optimized 3-day, 5-day, and 7-day itineraries tailored to user preferences.',
    ],
    technologies: ['Python', 'Geospatial Data'],
    certificateUrl:
      'https://drive.google.com/file/d/1xOlKxNHRChZ2_Agfvb1K0AXplN90WaJa/view',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50 px-6 lg:px-12"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Experience
          </h2>
        </div>

        <div className="max-w-6xl mx-auto relative">

          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 hidden lg:block"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 last:mb-0">

              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>

              <div
                className={`lg:flex lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="hidden lg:block lg:w-1/2"></div>

                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                    <div className="p-8">

                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {exp.title}
                        </h3>

                        <div className="text-blue-600 font-semibold mb-3">
                          {exp.company}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-gray-500 text-sm">
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

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Key Contributions:
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:scale-105 transition-transform"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Certificate */}
                      {exp.certificateUrl && (
                        <a
                          href={exp.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm mt-3 font-medium"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View Certificate
                        </a>
                      )}
                    </div>

                    {/* Bottom Hover Border */}
                    <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
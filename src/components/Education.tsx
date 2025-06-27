import { Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Electronics & Communication Engineering',
      institution: 'National Institute of Technology, Andhra Pradesh',
      location: 'Andhra Pradesh, India',
      period: '2022 - 2026',
      achievements: ['CGPA: 8.54/10'],
    },
    {
      degree: 'Intermediate (12th Grade), Science Stream',
      institution: 'A.N. College, Patna',
      location: 'Patna, Bihar',
      period: '2020 - 2022',
      achievements: ['Percentage: 85.6%'],
    },
  ];

  return (
    <section id="education" className="pt-20 pb-10 bg-gradient-to-br from-gray-50 to-blue-50 px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Education</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-600 to-blue-600 hidden lg:block"></div>

            {education.map((edu, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>

                <div className={`lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="hidden lg:block lg:w-1/2"></div>

                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
                      <div className="p-8">
                        {/* Header */}
                        <div className="mb-6">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                              <BookOpen className="w-5 h-5 text-white" />
                            </div>
                          </div>

                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                            {edu.degree}
                          </h3>

                          <div className="text-blue-600 font-semibold mb-3 text-lg">
                            {edu.institution}
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-500 text-sm">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {edu.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              {edu.location}
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-6">
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-2 h-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Hover Effect Border */}
                      <div className="h-1 bg-gradient-to-r from-green-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  </div>
                </div>

                {/* Mobile Timeline Connector */}
                <div className="lg:hidden ml-4 mt-4 mb-8 w-0.5 h-8 bg-gradient-to-b from-green-600 to-blue-600 last:hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

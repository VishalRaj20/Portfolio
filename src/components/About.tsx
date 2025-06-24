import { Code, Zap, Heart, Database } from 'lucide-react';

const About = () => {
  const skills = [
    {
      name: 'Frontend Development',
      icon: Code,
      description: 'HTML, CSS, JavaScript, React, TypeScript, Next.js, Tailwind CSS',
    },
    {
      name: 'Backend Development',
      icon: Zap,
      description: 'Node.js, Express.js, Python, MongoDB, PostgreSQL, Supabase, REST APIs',
    },
    {
      name: 'Problem Solving',
      icon: Heart,
      description: 'Data Structures, Algorithms, Competitive Programming (C++)',
    },
    {
      name: 'Database & Cloud',
      icon: Database,
      description: 'Supabase, MySQL MongoDB Atlas',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a strong foundation in building modern web apps, solving real-world problems, and creating scalable digital experiences. I enjoy blending elegant UI with robust backend logic to deliver impactful solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {skill.name}
              </h3>
              <p className="text-gray-600">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Let's Build Something Great
              </h3>
              <p className="text-blue-100 text-lg">
                I'm Vishal, a passionate full-stack developer with hands-on experience in building scalable, AI-powered web apps.
                Whether it's turning ideas into interactive platforms or enhancing performance with clean code and smart design,
                I'm eager to collaborate and bring your product to life.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-blue-100">Full-Stack Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5</div>
                <div className="text-blue-100">Tech Stacks Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Open</div>
                <div className="text-blue-100">for Freelance & Internships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;
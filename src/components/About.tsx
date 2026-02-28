import { Code, Zap, Heart, BookOpen} from 'lucide-react';

const About = () => {
  const skills = [
    {
      name: 'Frontend Development',
      icon: Code,
      description: 'HTML, CSS, JavaScript, React.js, Next.js, TypeScript, Tailwind CSS, Shadcn UI',
    },
    {
      name: 'Backend Development',
      icon: Zap,
      description: 'Node.js, Express.js, Supabase, MongoDB, Clerk Auth',
    },
    {
      name: 'Problem Solving & DSA',
      icon: Heart,
      description: 'C++, Data Structures & Algorithms, Competitive Programming (Leetcode, Geeksforgeeks)',
    },
    {
      name: 'Coursework',
      icon: BookOpen,
      description: 'Data Structures & Algorithms, DBMS, OOPs, Computer Networks, Operating Systems',
    },
  ];

  return (
    <section id="about" className="pt-20 pb-10 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I’m a final-year B.Tech student in Electronics and Communication Engineering at NIT Andhra Pradesh (Class of 2026), specializing as a backend-leaning Software Development Engineer. I build scalable full-stack applications using Node.js, REST APIs, PostgreSQL, and MongoDB, with hands-on experience in real-time systems, authentication workflows, and production-grade deployments. Passionate about solving complex problems, I’ve solved 500+ DSA problems and worked on AI-integrated systems, blending intelligent automation with clean, user-focused design.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">I'm always eager to learn new technologies, work on challenging projects and collaborate with like-minded individuals who share my passion for innovation.</p>
        </div>

        <h3 className='flex justify-center text-3xl font-semibold mb-6'>Skills & Technologies</h3>
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
      </div>
    </section>
  );
};

export default About;

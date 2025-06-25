import { Calendar, Award, ExternalLink, Star, Trophy, Code, Database } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: 'NVIDIA Deep Learning Institute Program',
            issuer: 'NVIDIA Deep Learning Institute',
            date: 'March 2025',
            description:
                'Successfully completed the course "Fundamentals of Deep Learning for Computer Vision," focusing on image classification and convolutional neural networks.',
            skills: ['Deep Learning', 'Computer Vision', 'CNN', 'Image Classification', 'Neural Networks'],
            credentialId: '1tO0Ys3ITkGJkXM3sgBKrQ',
            verifyUrl: 'https://learn.nvidia.com/certificates?id=sb6RMYRXTlOKyDYBlcGxfw#',
            featured: true,
            type: 'AI/ML'
        },
        {
            title: 'Database Management Systems (DBMS)',
            issuer: 'NPTEL - IIT Kharagpur',
            date: 'July 2024 - September 2024',
            description:
                'Completed comprehensive online course on Database Management Systems covering database design, SQL, normalization, and advanced database concepts.',
            skills: ['Database Design', 'SQL', 'Normalization', 'RDBMS', 'Query Optimization'],
            credentialId: 'NPTEL-DBMS-2024',
            verifyUrl: 'https://drive.google.com/file/d/1X2VVoyRoXEEYap_L6GICpeWV5haXW7lM/view?usp=drive_link',
            featured: true,
            type: 'Database'
        },
        {
            title: 'Smart India Hackathon 2024 Finalist',
            issuer: 'Ministry of Education’s Innovation Cell',
            date: 'November 2024',
            description:
                'Built a scalable web-based application to solve real-world challenges. Selected among the top teams from 2,500+ nationwide. Led a 6-member team to prototype completion with 95% delivery.',
            skills: ['Team Leadership', 'Web Development', 'Prototyping', 'Problem Solving'],
            credentialId: 'SIH2024-TEAM-LEAD',
            verifyUrl: 'https://drive.google.com/file/d/13Zm6yL-rTKsb4WB4EFkdmZjH5p4tBE-5/view?usp=drive_link',
            featured: true,
            type: 'Competition'
        }
    ];


    const achievements = [
        {
            title: 'Competitive Programming',
            description:
                'Solved 300+ Data Structures and Algorithms (DSA) problems across 10+ topics on LeetCode and CodeStudio, including Graph Theory, Dynamic Programming, and Greedy Algorithms.',
            type: 'Programming',
            icon: Code,
            highlights: [
                '300+ DSA problems solved',
                '10+ algorithmic topics covered',
                'Graph Theory expertise',
                'Dynamic Programming proficiency',
                'Greedy Algorithms mastery'
            ]
        }
    ];


    const getTypeColor = (type: string) => {
        const colors = {
            'AI/ML': 'from-purple-600 to-pink-600',
            'Database': 'from-orange-600 to-red-600',
            'Competition': 'from-yellow-500 to-orange-500',
            'Programming': 'from-indigo-600 to-purple-600'
        };
        return colors[type as keyof typeof colors] || 'from-gray-600 to-gray-700';
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'AI/ML': return Star;
            case 'Database': return Database;
            case 'Competition': return Trophy;
            case 'Programming': return Code;
            default: return Award;
        }
    };

    return (
        <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-6 lg:px-12">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Certifications & Achievements
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Professional certifications, competitive programming achievements, and hackathon victories
                        that demonstrate my technical expertise and problem-solving abilities.
                    </p>
                </div>

                {/* Certifications */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Certifications</h3>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => {
                            const IconComponent = getTypeIcon(cert.type);
                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                                >
                                    <div className="p-8">
                                        {/* Header */}
                                        <div className="mb-6">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(cert.type)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>
                                                <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(cert.type)} text-white`}>
                                                    {cert.type}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                                                {cert.title}
                                            </h3>

                                            <div className="text-blue-600 font-semibold mb-2">
                                                {cert.issuer}
                                            </div>

                                            <div className="flex items-center text-gray-500 text-sm">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {cert.date}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {cert.description}
                                        </p>

                                        {/* Skills */}
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-900 mb-3">Skills Covered:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {cert.skills.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(cert.type)} bg-opacity-10 text-gray-700 rounded-full text-sm font-medium`}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Credential Info */}
                                        <div className="border-t pt-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-xs text-gray-500">Credential ID</p>
                                                    <p className="text-sm font-mono text-gray-700">{cert.credentialId}</p>
                                                </div>
                                                <a
                                                    href={cert.verifyUrl}
                                                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Verify
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Effect Border */}
                                    <div className={`h-1 bg-gradient-to-r ${getTypeColor(cert.type)} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Achievements */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Major Achievements</h3>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {achievements.map((achievement, index) => {
                            const IconComponent = achievement.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                                >
                                    <div className="p-8">
                                        {/* Header */}
                                        <div className="mb-6">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(achievement.type)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>
                                                <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(achievement.type)} text-white`}>
                                                    {achievement.type}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                                                {achievement.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {achievement.description}
                                        </p>

                                        {/* Highlights */}
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                                            <ul className="space-y-2">
                                                {achievement.highlights.map((highlight, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <div className={`w-2 h-2 bg-gradient-to-r ${getTypeColor(achievement.type)} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                                                        <span className="text-gray-600 text-sm">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Hover Effect Border */}
                                    <div className={`h-1 bg-gradient-to-r ${getTypeColor(achievement.type)} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
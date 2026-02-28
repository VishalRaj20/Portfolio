import { Calendar, Award, ExternalLink, Star, Trophy, Code, Database } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: 'Republic Day Consistency Challenge – Rank 4',
            issuer: 'NxtWave LaunchPad',
            date: 'January 2025',
            description:
                'Recognized as Rank 4 in the Republic Day Challenge: 7 Days of Consistency for demonstrating consistent participation and discipline throughout the program.',
            skills: ['Consistency', 'Problem Solving', 'Discipline', 'Time Management'],
            credentialId: '',
            verifyUrl: 'https://drive.google.com/file/d/1w9GaNZGOhiOnsCcXeuIhcxuglZ4PY0F-/view',
            featured: true,
            type: 'Achievement'
        },
        {
            title: 'Database Management Systems (DBMS)',
            issuer: 'NPTEL - IIT Kharagpur',
            date: 'July 2024 - September 2024',
            description:
                'Completed comprehensive online course on Database Management Systems covering database design, SQL, normalization, and advanced database concepts.',
            skills: ['Database Design', 'SQL', 'Normalization', 'RDBMS', 'Query Optimization'],
            credentialId: 'NPTEL-DBMS-2024',
            verifyUrl: 'https://drive.google.com/file/d/1X2VVoyRoXEEYap_L6GICpeWV5haXW7lM/view',
            featured: true,
            type: 'Database'
        },
        {
            title: 'Smart India Hackathon 2024 Finalist',
            issuer: 'Ministry of Education’s Innovation Cell',
            date: 'November 2024',
            description:
                'Built a scalable web-based application to solve real-world challenges. Selected among the top teams nationwide and led a 6-member team to prototype completion.',
            skills: ['Team Leadership', 'Web Development', 'Prototyping', 'Problem Solving'],
            credentialId: 'SIH2024-TEAM-LEAD',
            verifyUrl: 'https://drive.google.com/file/d/13Zm6yL-rTKsb4WB4EFkdmZjH5p4tBE-5/view',
            featured: true,
            type: 'Competition'
        }
    ];

    const achievements = [
        {
            title: 'Competitive Programming',
            description:
                'Solved 500+ Data Structures and Algorithms (DSA) problems across multiple topics including Graph Theory, Dynamic Programming, and Greedy Algorithms.',
            type: 'Programming',
            icon: Code,
            highlights: [
                '500+ DSA problems solved',
                'Strong problem-solving foundation',
                'Graph Theory & DP expertise',
                'Greedy Algorithms proficiency'
            ]
        }
    ];

    const getTypeColor = (type: string) => {
        const colors = {
            'AI/ML': 'from-purple-600 to-pink-600',
            'Database': 'from-orange-500 to-red-500',
            'Competition': 'from-yellow-500 to-orange-500',
            'Programming': 'from-indigo-600 to-purple-600',
            'Achievement': 'from-blue-600 to-indigo-600'
        };
        return colors[type as keyof typeof colors] || 'from-gray-600 to-gray-700';
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'AI/ML': return Star;
            case 'Database': return Database;
            case 'Competition': return Trophy;
            case 'Programming': return Code;
            case 'Achievement': return Award;
            default: return Award;
        }
    };

    return (
        <section id="certifications" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50 px-6 lg:px-12">
            <div className="container mx-auto max-w-7xl">

                <div className="text-center mb-14">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                        Certifications & Achievements
                    </h2>
                </div>

                {/* Certifications */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Professional Certifications
                    </h3>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => {
                            const IconComponent = getTypeIcon(cert.type);

                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                                >
                                    <div className="p-8">

                                        {/* Header */}
                                        <div className="mb-6">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(cert.type)} rounded-xl flex items-center justify-center`}>
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>
                                                <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(cert.type)} text-white`}>
                                                    {cert.type}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                                                {cert.title}
                                            </h3>

                                            <div className="text-blue-600 font-semibold text-sm mb-1">
                                                {cert.issuer}
                                            </div>

                                            <div className="flex items-center text-gray-500 text-sm">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {cert.date}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                            {cert.description}
                                        </p>

                                        {/* Skills */}
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                                                Skills Covered:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {cert.skills.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Footer */}
                                        <div className="border-t pt-4 flex items-center justify-between">
                                            {cert.credentialId && (
                                                <div>
                                                    <p className="text-xs text-gray-500">Credential ID</p>
                                                    <p className="text-xs font-mono text-gray-700">
                                                        {cert.credentialId}
                                                    </p>
                                                </div>
                                            )}

                                            <a
                                                href={cert.verifyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Verify
                                            </a>
                                        </div>
                                    </div>

                                    <div className={`h-1 bg-gradient-to-r ${getTypeColor(cert.type)}`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Achievements */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Major Achievements
                    </h3>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {achievements.map((achievement, index) => {
                            const IconComponent = achievement.icon;

                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                                >
                                    <div className="p-8">

                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(achievement.type)} rounded-xl flex items-center justify-center`}>
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(achievement.type)} text-white`}>
                                                {achievement.type}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                                            {achievement.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-6">
                                            {achievement.description}
                                        </p>

                                        <ul className="space-y-2">
                                            {achievement.highlights.map((highlight, i) => (
                                                <li key={i} className="flex items-start text-sm text-gray-700">
                                                    <div className={`w-2 h-2 bg-gradient-to-r ${getTypeColor(achievement.type)} rounded-full mt-2 mr-3`}></div>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={`h-1 bg-gradient-to-r ${getTypeColor(achievement.type)}`}></div>
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
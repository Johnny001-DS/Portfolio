import React from 'react';
import { GraduationCap, Award, Star } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                About Me
                </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
                    <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                        I'm a passionate Computer Science student at Northeastern University with a focus on creating efficient, 
                        elegant, and user-centered digital solutions. My journey in programming began 
                        in high school and has evolved into a deep love for web development and software engineering.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                        I thrive on challenges and constantly seek to expand my knowledge and skills 
                        in the ever-evolving tech landscape. My approach combines technical expertise 
                        with creative problem-solving to build applications that make a difference.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                        When I'm not coding, you'll find me exploring nature trails, contributing to 
                        open-source projects, and staying current with the latest in tech through podcasts 
                        and community meetups.
                        </p>
                    </div>
                    </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
                    <div className="flex items-center mb-4">
                        <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                        <h3 className="text-2xl font-bold ml-3">Education</h3>
                    </div>
                    
                    <div className="mb-6">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Northeastern University</h4>
                        <p className="text-blue-600 dark:text-blue-400">Boston, MA</p>
                        <p className="text-gray-700 dark:text-gray-300 mt-1">Bachelor of Science in Computer Science, Honors Program</p>
                        <p className="text-gray-700 dark:text-gray-300">Expected December 2026</p>
                    </div>
                    
                    <div className="flex items-center mb-4">
                        <Award className="text-blue-600 dark:text-blue-400" size={24} />
                        <h3 className="text-xl font-bold ml-3">Achievements</h3>
                    </div>
                    
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <Star className="text-blue-600 dark:text-blue-400 mt-1 mr-2" size={16} />
                            <span className="text-gray-700 dark:text-gray-300">Dean's List</span>
                        </li>
                        <li className="flex items-start">
                            <Star className="text-blue-600 dark:text-blue-400 mt-1 mr-2" size={16} />
                            <span className="text-gray-700 dark:text-gray-300">Honors Impact Badge</span>
                        </li>
                        <li className="flex items-start">
                            <Star className="text-blue-600 dark:text-blue-400 mt-1 mr-2" size={16} />
                            <span className="text-gray-700 dark:text-gray-300">Honors Scholarship</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
    );
};

export default About;
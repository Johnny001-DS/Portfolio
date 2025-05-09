import React, { useState } from 'react';
import { Layout, Server, Code, Book, GraduationCap, Database, Terminal, Cloud, Users, Globe } from 'lucide-react';
import SkillCategory from '@/components/ui/SkillCategory';
import ClubCard from '@/components/clubs/ClubCard';
import ClubDetails from '@/components/clubs/ClubDetails';

const Skills: React.FC = () => {
    const languages = ["Python", "Java", "C#", "C++", "Rust", "SQL", "TypeScript", "JavaScript"];
    const frameworks = ["RESTful", "React", "Next.js", "NumPy", "Pandas", "PyTorch"];
    const tools = ["Git", "Docker", "AWS", "Linux", "Ansible", "RedHat OpenShift", "Azure", "Jenkins"];
    
    const relevantCourses = [
      "Computer Systems (Graduate)",
      "Algorithms (Graduate)",
      "Discrete Structures",
      "Mathematics of Data Models",
      "Object-Oriented Design",
      "Introduction to Databases",
      "Programming in C++",
      "Projects in Cloud Computing",
      "Game Programming",
      "Foundations of Cybersecurity",
      "Theory of Computation"
    ];

    // Club involvement
    const clubs = [
      {
        name: "Oasis",
        role: "Team Member & Mentor",
        period: "September 2024 - Present",
        location: "Boston, MA",
        description: "Collaborated with 4 software engineers to develop a website that consolidates reviews and information on the over 200+ global opportunities a part of Northeastern's Global Campus Network.",
        image: "/oasis_banner.png",
        details: {
          activities: [
            "Collaborated on developing the website architecture",
            "Designed and implemented the user interface",
            "Created database schemas for storing global opportunity data",
            "Developed API endpoints for data retrieval",
            "Performed quality assurance testing",
            "Contributed to documentation and user guides"
          ],
          skills: [
            "Web Development",
            "Team Collaboration",
            "UI/UX Design",
            "Database Design",
            "API Development",
            "Project Management"
          ],
          achievements: [
            "Successfully launched a comprehensive resource for students",
            "Implemented a user-friendly interface for accessing information on 200+ global opportunities",
            "Developed effective teamwork and communication skills"
          ],
          gallery: [
            "/oasis_headshot.JPEG",
            "/api/placeholder/600/400",
            "/api/placeholder/600/400"
          ]
        }
      },
      {
        name: "ColorStack",
        role: "Team Member",
        period: "September 2024 - Present",
        location: "Boston, MA",
        description: "Engaging with over 1500+ other Latinx and Black computer science students across the ColorStack network to gain a better understanding of how a diverse and inclusive professional environment operates.",
        image: "/colorstackneu.jpg",
        details: {
          activities: [
            "Participating in diversity and inclusion initiatives",
            "Attending networking events and workshops",
            "Contributing to mentorship programs",
            "Collaborating on technical projects with diverse teams",
            "Engaging in professional development activities",
            "Supporting community outreach efforts"
          ],
          skills: [
            "Diversity & Inclusion",
            "Networking",
            "Leadership",
            "Community Building",
            "Cross-cultural Communication",
            "Mentorship"
          ],
          achievements: [
            "Built connections with 1500+ computer science students from diverse backgrounds",
            "Enhanced understanding of inclusive professional environments",
            "Contributed to creating a more diverse tech community"
          ],
          testimonial: {
            text: "Your active participation and insights have been invaluable to our community. You've demonstrated a genuine commitment to fostering diversity in tech.",
            author: "ColorStack Community Lead"
          },
          gallery: [
            "/colorstack_gallery_1.jpeg",
          ]
        }
      }
    ];

    const [selectedClub, setSelectedClub] = useState<any>(null);

    return (
        <section id="skills" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Skills & Education
                  </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            {/* Technical Skills */}
            <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                
                <SkillCategory 
                  icon={<Terminal className="text-blue-600 dark:text-blue-400" size={24} />}
                  title="Programming Languages"
                  skills={languages}
                />
                
                <SkillCategory 
                  icon={<Layout className="text-purple-600 dark:text-purple-400" size={24} />}
                  title="Frameworks & Libraries"
                  skills={frameworks}
                />
                
                <SkillCategory 
                  icon={<Cloud className="text-blue-600 dark:text-blue-400" size={24} />}
                  title="Tools & Platforms"
                  skills={tools}
                />
              </div>
              
              <div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <GraduationCap className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                    Relevant Coursework
                  </h3>
                  
                  <ul className="space-y-3">
                    {relevantCourses.map((course, index) => (
                      <li key={index} className="flex items-center bg-blue-50 dark:bg-gray-700 p-3 rounded-lg">
                        <span className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full mr-3 text-xs font-bold">
                          {index + 1}
                        </span>
                        <span className="text-gray-800 dark:text-gray-200 font-medium">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Club Involvement */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Club Involvement
                  </span>
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-2"></div>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
                  Engaging with student organizations to build skills and contribute to the community
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {clubs.map((club, index) => (
                  <ClubCard 
                    key={index} 
                    club={club} 
                    onSelect={setSelectedClub} 
                  />
                ))}
              </div>
            </div>
            
            {selectedClub && (
              <ClubDetails 
                club={selectedClub} 
                onClose={() => setSelectedClub(null)} 
              />
            )}
        </div>
        </section>
    );
};

export default Skills;
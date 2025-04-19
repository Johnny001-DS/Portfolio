import { useState } from 'react';
import { ProjectDetailsProps } from "@/types";
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'gallery'>('overview');
    
    if (!project) return null;
    
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>
        
        {/* Modal */}
        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl mx-auto animate-fadeIn overflow-hidden">
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full bg-gray-100 dark:bg-gray-800 z-10"
            >
              <X size={24} />
            </button>
            
            {/* Header */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-600/80 text-white rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex px-6" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-4 text-sm font-medium border-b-2 ${
                    activeTab === 'overview'
                      ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`px-3 py-4 text-sm font-medium border-b-2 ${
                    activeTab === 'features'
                      ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`px-3 py-4 text-sm font-medium border-b-2 ${
                    activeTab === 'gallery'
                      ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  Gallery
                </button>
              </nav>
            </div>
            
            {/* Content */}
            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Project Overview</h3>
                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Challenge</h3>
                      <p className="text-gray-700 dark:text-gray-300">{project.details.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Solution</h3>
                      <p className="text-gray-700 dark:text-gray-300">{project.details.solution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Results</h3>
                    <p className="text-gray-700 dark:text-gray-300">{project.details.results}</p>
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors flex items-center"
                    >
                      Live Demo <ExternalLink size={16} className="ml-2" />
                    </a>
                    <a 
                      href="#" 
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center"
                    >
                      Source Code <Github size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h3>
                  <ul className="space-y-2">
                    {project.details.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-5 h-5 mt-0.5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                          ✓
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'gallery' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Project Gallery</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.details.gallery.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <img 
                          src={image} 
                          alt={`${project.title} screenshot ${index + 1}`} 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProjectDetails;
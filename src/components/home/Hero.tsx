import { ArrowDownCircle } from "lucide-react";
import Image from "next/image";

const Hero: React.FC = () => {
    const scrollToAbout = () => {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600 opacity-5 blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-10">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between relative">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="relative">
                {/* <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-5">
                  Full-Stack Software Engineer
                </span> */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                  <span className="block">Hi, I'm</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    James Khadan
                  </span>
                </h1>
                <h2 className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                  Building efficient solutions with code and creativity
                </h2>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                  Computer Science student at Northeastern University with experience in full-stack
                  development, DevSecOps, and cloud computing. Passionate about creating intuitive and
                  scalable applications.
                </p>
                
                <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                  <a 
                    href="#projects"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    View My Work
                  </a>
                  <a 
                    href="#contact"
                    className="px-8 py-4 bg-white dark:bg-gray-800 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-blue-600 dark:border-blue-400 rounded-tl-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-4 border-r-4 border-purple-600 dark:border-purple-400 rounded-br-lg"></div>
                
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                  <Image 
                  src="/Headshot.jpg"
                  alt="James Khadan" 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-600 dark:bg-blue-500 rounded-lg shadow-lg transform -rotate-6"></div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-600 dark:bg-purple-500 rounded-lg shadow-lg transform rotate-12"></div>
              </div>
            </div>
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button onClick={scrollToAbout} aria-label="Scroll down">
              <ArrowDownCircle className="text-blue-600 dark:text-blue-400" size={32} />
            </button>
          </div>
        </div>
      </section>
    );
};

export default Hero;
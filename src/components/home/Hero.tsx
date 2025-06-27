// components/home/Hero.tsx
import { ArrowDownCircle } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Hero: React.FC = () => {
    const scrollToAbout = () => {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    // Mouse position tracking for parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const springConfig = { stiffness: 100, damping: 20 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);
    
    // Handle mouse move
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX - innerWidth / 2) / innerWidth;
        const y = (clientY - innerHeight / 2) / innerHeight;
        mouseX.set(x * 30);
        mouseY.set(y * 30);
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    
    // Enhanced typewriter with glitch effect
    const phrases = [
      "Full-Stack Software Engineer",
      "Cloud Infrastructure Engineer",
      "Tech Entrepreneur",
      "Automation & Efficiency Engineer",
      "AI & Machine Learning Developer",
      "Deployment & CI/CD Specialist",
      "Data Engineer"
    ];

    const [displayText, setDisplayText] = useState("");
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isGlitching, setIsGlitching] = useState(false);

    // Glitch effect
    useEffect(() => {
      const glitchInterval = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }, 5000);
      
      return () => clearInterval(glitchInterval);
    }, []);

    useEffect(() => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      const timeout = setTimeout(() => {
        if (!isDeleting) {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
          
          if (displayText.length === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
          
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          }
        }
      }, isDeleting ? 50 : 100);
      
      return () => clearTimeout(timeout);
    }, [displayText, currentPhraseIndex, isDeleting]);
  
    return (
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0a0f]">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-96 h-96 bg-[#00d4ff] rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-[#8b5cf6] rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[#ff006e] rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-10">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between relative">
            <motion.div 
              className="md:w-1/2 mb-12 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                  style={{ x, y }}
                >
                  <span className="block text-gray-300">Hi, I'm</span>
                  <span className="relative">
                    <span className="absolute -inset-1 bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#ff006e] opacity-75 blur-lg"></span>
                    <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#ff006e]">
                      James Khadan
                    </span>
                  </span>
                </motion.h1>
                
                {/* Enhanced typewriter with glitch */}
                <div className="mt-6 min-h-[3rem]">
                  <h2 className={`text-xl md:text-2xl text-gray-400 inline ${isGlitching ? 'glitch' : ''}`}>
                    <span className="font-mono">{'<'}</span>
                    {displayText}
                    <span className="animate-pulse text-[#00d4ff]">|</span>
                    <span className="font-mono">{' />'}</span>
                  </h2>
                </div>
                
                <motion.p 
                  className="mt-8 text-lg text-gray-400 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Computer Science student at Northeastern University currently working as a full-stack engineer. 
                  I craft <span className="text-[#00d4ff]">intuitive</span> and{' '}
                  <span className="text-[#8b5cf6]">scalable</span> digital experiences.
                </motion.p>
                
                <motion.div 
                  className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <motion.a 
                    href="#projects"
                    className="group relative px-8 py-4 overflow-hidden rounded-xl font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#ff006e]"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#ff006e] opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></span>
                    <span className="relative text-white">View My Work</span>
                  </motion.a>
                  
                  <motion.a 
                    href="/app/files/JamesKhadanResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 overflow-hidden rounded-xl font-medium border border-gray-700 hover:border-[#00d4ff] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/10 to-[#8b5cf6]/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative text-gray-300 group-hover:text-white transition-colors">
                      Download Resume
                    </span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
            
            {/* 3D Profile Section */}
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative group">
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] rounded-2xl opacity-20 blur-xl"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#8b5cf6] to-[#ff006e] rounded-full opacity-20 blur-xl"
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -90, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Main image container with glassmorphic effect */}
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff] via-[#8b5cf6] to-[#ff006e] rounded-3xl opacity-50 blur-2xl group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative w-full h-full backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 overflow-hidden group-hover:border-white/20 transition-all">
                    <Image 
                      src="/app/images/misc/Headshot.jpg"
                      alt="James Khadan" 
                      layout="fill"
                      objectFit="cover"
                      className="rounded-3xl transition-transform group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Enhanced scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.button 
              onClick={scrollToAbout} 
              aria-label="Scroll down"
              className="group"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDownCircle className="text-[#00d4ff] group-hover:text-[#8b5cf6] transition-colors" size={32} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
};

export default Hero;
// components/projects/ProjectCard.tsx
import { ProjectCardProps } from "@/types";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { getTechIcon } from "../projects/IconCard";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 300, damping: 30 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-10, 10]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPos = (mouseX / width) - 0.5;
    const yPos = (mouseY / height) - 0.5;
    
    x.set(xPos);
    y.set(yPos);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      ref={ref}
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
    >
      {/* Glassmorphic card container */}
      <div className="relative h-full backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 via-[#8b5cf6]/10 to-[#ff006e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Tech stack visualization */}
        <div className="relative h-48 p-8 overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] animate-pulse"></div>
          </div>
          
          {/* Floating tech icons */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="grid grid-cols-3 gap-6 max-w-xs">
              {project.icons.slice(0, 6).map((icon, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <motion.div
                    className="p-3 rounded-xl glass"
                    whileHover={{ 
                      boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
                    }}
                  >
                    {getTechIcon(icon, 24)}
                  </motion.div>
                  <span className="text-xs text-gray-400 text-center font-medium max-w-14 truncate">
                    {icon}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Project type badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white rounded-full">
              {project.category || 'Web Application'}
            </span>
          </div>
        </div>
        
        {/* Content section */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00d4ff] group-hover:to-[#8b5cf6] transition-all duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-400 line-clamp-2">
            {project.description}
          </p>
          
          {/* Tags with hover effect */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 text-xs font-medium glass rounded-full text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-3 py-1 text-xs font-medium glass rounded-full text-gray-300">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center justify-between pt-4">
            <motion.button
              className="flex items-center text-[#00d4ff] hover:text-[#8b5cf6] transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(project);
              }}
              whileHover={{ x: 5 }}
            >
              View Details <ArrowRight size={16} className="ml-1" />
            </motion.button>
            
            <div className="flex gap-3">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                </motion.a>
              )}
            </div>
          </div>
        </div>
        
        {/* Hover reveal overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
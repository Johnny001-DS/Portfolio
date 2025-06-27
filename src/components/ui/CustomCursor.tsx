// components/ui/CustomCursor.tsx
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Check if cursor should be visible
      const target = e.target as HTMLElement;
      setIsVisible(!target.closest('input, textarea'));
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for interactive elements
      if (target.matches('a, button, [data-cursor-hover]')) {
        setIsHovering(true);
        
        // Check for custom cursor text
        const cursorText = target.getAttribute('data-cursor-text');
        if (cursorText) {
          setCursorText(cursorText);
        }
      }
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
    };
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    
    // Hide cursor on touch devices
    const handleTouchStart = () => setIsVisible(false);
    window.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
            opacity: isHovering ? 0.8 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className={`transition-colors duration-300 ${
              isHovering ? 'text-[#8b5cf6]' : 'text-[#00d4ff]'
            }`}
          >
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-all duration-300 ${
                isClicking ? 'opacity-50' : 'opacity-100'
              }`}
            />
          </svg>
          
          {/* Cursor text */}
          {cursorText && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-white whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {cursorText}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      
      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      
      {/* Cursor trail effect */}
      <CursorTrail cursorX={cursorX} cursorY={cursorY} />
    </>
  );
};

// Cursor trail component
const CursorTrail: React.FC<{ cursorX: any; cursorY: any }> = ({ cursorX, cursorY }) => {
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);
  
  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let trailId = 0;
    
    const unsubscribeX = cursorX.onChange((x: number) => {
      const distance = Math.sqrt(Math.pow(x - lastX, 2) + Math.pow(cursorY.get() - lastY, 2));
      
      if (distance > 30) {
        lastX = x;
        lastY = cursorY.get();
        
        setTrails(prev => [...prev, { x, y: cursorY.get(), id: trailId++ }].slice(-5));
        
        // Remove old trails
        setTimeout(() => {
          setTrails(prev => prev.slice(1));
        }, 500);
      }
    });
    
    return () => {
      unsubscribeX();
    };
  }, [cursorX, cursorY]);
  
  return (
    <>
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          initial={{ opacity: 0.6, scale: 0.8 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            x: trail.x,
            y: trail.y,
          }}
        >
          <div 
            className="w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              background: `radial-gradient(circle, ${
                index % 3 === 0 ? '#00d4ff' : index % 3 === 1 ? '#8b5cf6' : '#ff006e'
              } 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default CustomCursor;
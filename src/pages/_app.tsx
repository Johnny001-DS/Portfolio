// pages/_app.tsx
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import CustomCursor from '@/components/ui/CustomCursor';
import '@/styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {/* Custom cursor - only visible on desktop */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>
      
      {/* Page transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.5,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
        >
          {/* Noise texture overlay */}
          <div className="fixed inset-0 noise pointer-events-none z-50" />
          
          {/* Main content */}
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
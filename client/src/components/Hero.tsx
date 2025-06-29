import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Digital Experiences";

  useEffect(() => {
    let index = 0;
    const typewriter = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typewriter);
      }
    }, 100);

    return () => clearInterval(typewriter);
  }, [fullText]);

  // Generate particles for background effect
  const particles = Array.from({ length: 50 }, (_, i) => (
    <motion.div
      key={i}
      className="particle"
      initial={{ 
        x: Math.random() * window.innerWidth, 
        y: Math.random() * window.innerHeight,
        opacity: 0 
      }}
      animate={{
        y: [null, Math.random() * window.innerHeight],
        opacity: [0, 0.7, 0],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  ));

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-particles">
        {particles}
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.7), rgba(15, 15, 15, 0.7)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
        >
          <span className="block">We Craft</span>
          <span className="block gradient-text typing-text">
            {typewriterText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Innovative web solutions, stunning designs, and digital marketing strategies that elevate your brand
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={scrollToPortfolio}
            className="px-8 py-4 bg-gradient-to-r from-[#00DDEB] to-[#8B5CF6] text-white font-semibold rounded-full hover:scale-105 transform transition-all duration-300 animate-glow"
          >
            Explore Our Work
          </Button>
          <Button
            variant="outline"
            className="px-8 py-4 glass-effect text-white font-semibold rounded-full hover:scale-105 transform transition-all duration-300 border-white/20"
          >
            Get Started
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToPortfolio}
        >
          <ChevronDown className="w-8 h-8 text-[#00DDEB]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

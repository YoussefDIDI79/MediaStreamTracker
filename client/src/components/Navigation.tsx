import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = ["hero", "portfolio", "services", "skills", "team", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "portfolio", label: "Portfolio" },
    { id: "services", label: "Services" },
    { id: "skills", label: "Skills" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-40 transition-all duration-300 py-4 ${
          isScrolled ? "navbar-blur" : ""
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00DDEB] via-[#4F46E5] to-[#8B5CF6] rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">BM</span>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-[#FFD93D] to-[#FF6B6B] rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-[#00DDEB] via-[#4F46E5] to-[#8B5CF6] bg-clip-text text-transparent logo-shine">
                BoxMedia
              </span>
              <span className="text-xs text-gray-400 font-medium tracking-wide">
                Digital Agency
              </span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 text-white ${
                  activeSection === item.id
                    ? "text-[#00DDEB]"
                    : "hover:text-[#00DDEB]"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700 p-0"
            >
              <motion.div
                animate={{ x: theme === "dark" ? 24 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow flex items-center justify-center"
              >
                {theme === "dark" ? (
                  <Moon className="w-2 h-2 text-blue-400" />
                ) : (
                  <Sun className="w-2 h-2 text-yellow-500" />
                )}
              </motion.div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-64 bg-background shadow-2xl z-50 md:hidden"
        >
          <div className="p-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6"
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="mt-12 space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-lg text-white hover:text-[#00DDEB] transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

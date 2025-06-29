import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#0F0F0F] text-white relative">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[60px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 L1200,120 L1200,60 Q600,0 0,60 Z"
            className="fill-background"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-4"
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
            <p className="text-gray-400 mb-6">
              Creating exceptional digital experiences that inspire and engage audiences worldwide.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: "fab fa-linkedin-in", href: "#" },
                { icon: "fab fa-twitter", href: "#" },
                { icon: "fab fa-instagram", href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-gradient-to-r from-[#00DDEB] to-[#8B5CF6] rounded-full flex items-center justify-center"
                >
                  <i className={`${social.icon} text-white`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Portfolio", "Services", "Team", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#00DDEB] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "UI/UX Design", "Digital Marketing", "Brand Identity"].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#00DDEB] transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest projects and insights.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-800 border-gray-700 rounded-l-lg focus:border-[#00DDEB]"
              />
              <Button className="px-4 py-2 bg-gradient-to-r from-[#00DDEB] to-[#8B5CF6] text-white rounded-r-lg hover:scale-105 transition-transform">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 BoxMedia. All rights reserved. Crafted with ❤️ for digital excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}

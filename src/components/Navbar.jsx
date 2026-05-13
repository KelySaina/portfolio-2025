import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ["About", "Work", "Enterprise", "Projects", "Contact"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-primary/80 backdrop-blur-md border-b border-white/5"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-secondary font-bold text-xl font-mono"
          >
            <a href="#hero" className="flex items-center gap-2">
              <span className="w-8 h-8 border-2 border-secondary rounded-md flex items-center justify-center text-sm">
                TM
              </span>
              <span className="hidden sm:inline">Thierry Michaël</span>
            </a>
          </motion.div>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-textPrimary hover:text-secondary transition-colors px-4 py-2 rounded-lg hover:bg-secondary/5 text-sm font-mono"
                >
                  <span className="text-secondary mr-1 text-xs">
                    0{index + 1}.
                  </span>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-secondary p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary/95 backdrop-blur-md border-t border-white/5 overflow-hidden"
          >
            <ul className="flex flex-col p-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="block text-textPrimary hover:text-secondary transition-colors px-4 py-3 rounded-lg hover:bg-secondary/5 font-mono"
                  >
                    <span className="text-secondary mr-2 text-sm">
                      0{index + 1}.
                    </span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

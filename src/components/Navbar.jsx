import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = ["About", "Work", "Projects", "Contact"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-primary/90 backdrop-blur-sm"
    >
      <nav className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-secondary font-bold text-2xl"
          >
            Thierry Michaël
          </motion.div>

          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-textPrimary hover:text-secondary transition-colors"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}

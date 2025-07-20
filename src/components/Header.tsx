import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = ['About', 'Services', 'Testimonials', 'Contact'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-md
      `}
      // isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white/30 backdrop-blur-xl'
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold text-blue-600 tracking-tight">
            Andrey Kumov
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-600'
                    : 'text-gray-800 hover:text-blue-600'
                }`}
              >
                {item}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full bg-blue-600 transition-transform duration-300 origin-left scale-x-0 hover:scale-x-100 ${
                    activeSection === item.toLowerCase() ? 'scale-x-100' : ''
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-lg shadow-md border border-gray-200 divide-y divide-gray-100">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 transition-all duration-200 ${
                  activeSection === item.toLowerCase() ? 'bg-blue-50 text-blue-600 font-semibold' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;



// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
//         isScrolled ? 'bg-white/80 shadow-md' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo / Name */}
//           <div className="text-2xl font-extrabold tracking-tight text-blue-600">
//             Andrey Kumov
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {['About', 'Services', 'Testimonials', 'Contact'].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 className={`text-sm font-semibold transition-colors duration-200 ${
//                   isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
//                 }`}
//               >
//                 {item}
//               </button>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 focus:outline-none"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
//             ) : (
//               <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation Dropdown */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-200 rounded-b-lg shadow-md transition-all duration-300 ease-in-out">
//             <div className="py-4 space-y-2 px-4">
//               {['About', 'Services', 'Testimonials', 'Contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className="block w-full text-left text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };



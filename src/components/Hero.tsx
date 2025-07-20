import React from 'react';
import { Instagram, Linkedin, ArrowRight } from 'lucide-react';
// import logo from '../../public/andrey.jpg';
// import cover from '../../public/close-up-dumbbells-gym.jpg'
interface HeroProps {
  onGetStarted: (service?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-black text-white bg-[url('/close-up-dumbbells-gym.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">

          {/* Left Content */}
          <div className="space-y-8">
            <span className="inline-flex items-center px-4 py-1 bg-white text-black font-semibold text-sm rounded-full shadow-sm">
              Based in Luxembourg
            </span>

            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              Train with <span className="text-blue-400">Andrey Kumov</span>
            </h1>

            {/* <h2 className="text-2xl sm:text-3xl font-medium text-gray-300"> */}
            <h2 className="text-2xl sm:text-3xl font-medium text-white">
              Certified Fitness & Nutrition Coach
            </h2>

            <p className="text-xl text-gray-300 italic max-w-xl">
              “Transforming your body, mind & lifestyle — one rep at a time.”
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToServices}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg font-bold flex justify-center items-center"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => onGetStarted()}
                className="border border-gray-400 text-white px-6 py-4 rounded-xl hover:border-blue-500 hover:text-blue-300 transition-all duration-300 text-lg font-semibold"
              >
                Get Started Today
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-6">
              <span className="text-whitefont-medium">Follow me:</span>
              <a
                href="https://instagram.com/lux.kumov_"
                target="_blank"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <Instagram className="text-white w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/andrey-kumov-9b55b128b"
                target="_blank"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <Linkedin className="text-white w-5 h-5" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">5+</div>
                <div className="text-sm text-white">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">100+</div>
                <div className="text-sm text-white">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-white">Support</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <img
                // src={logo}
                src='/andrey.jpg'
                alt="Andrey Kumov"
                className="w-full h-full object-cover"
              />
              {/* Badge Top Left */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-lg px-3 py-2 text-xs font-semibold text-white">
                <div className="text-sm font-bold">Certified Coach</div>
                <div className="text-xs">Physical Education</div>
              </div>
              {/* Badge Bottom Right */}
              <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md rounded-lg px-3 py-2 text-xs font-semibold text-white">
                <div className="text-sm font-bold">Health & Nutrition</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Cue */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToServices}
          className="text-white text-sm animate-bounce opacity-80 hover:opacity-100"
        >
          ↓ Scroll to Services
        </button>
      </div>
    </section>
  );
};

export default Hero;

// import React from 'react';
// import { Instagram, Linkedin, ArrowRight } from 'lucide-react';
// import logo from '../../public/andrey.jpg'
// interface HeroProps {
//   onGetStarted: (service?: string) => void;
// }

// const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
//   const scrollToServices = () => {
//     const element = document.getElementById('services');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
// <section className="relative min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-50 overflow-hidden">
//   {/* Floating Background Orbs */}
//   <div className="absolute inset-0 overflow-hidden pointer-events-none">
//     <div className="absolute w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl top-[-10%] left-[-10%]"></div>
//     <div className="absolute w-80 h-80 bg-purple-200 opacity-30 rounded-full blur-3xl bottom-[-10%] right-[-10%]"></div>
//   </div>

//   <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28">
//     <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
//       {/* Left Content */}
//       <div className="space-y-8">
//         <span className="inline-flex items-center px-4 py-1 bg-blue-100 text-blue-700 font-semibold text-sm rounded-full shadow-sm">
//            Based in Luxembourg
//         </span>

//         <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
//           Andrey <span className="text-blue-600">Kumov</span>
//         </h1>

//         <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">
//           Personal Trainer & Nutrition Coach
//         </h2>

//         <p className="text-xl text-gray-600 italic">
//           "Transforming health, one rep at a time."
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 pt-4">
//           <button
//             onClick={scrollToServices}
//             className="bg-blue-600 text-white px-6 py-4 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-xl transition-all duration-300 text-lg font-semibold flex items-center"
//           >
//             Let's Work Together
//             <ArrowRight className="ml-2 w-5 h-5" />
//           </button>
//           <button
//             onClick={() => onGetStarted()}
//             className="border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-lg font-semibold"
//           >
//             Get Started Today
//           </button>
//         </div>

//         {/* Social Icons */}
//         <div className="flex items-center gap-4 pt-6">
//           <span className="text-gray-600 font-medium">Follow me:</span>
//           <a
//             href="https://instagram.com/lux.kumov_"
//             target="_blank"
//             className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
//           >
//             <Instagram className="text-gray-600 hover:text-pink-500 w-5 h-5" />
//           </a>
//           <a
//             href="https://linkedin.com/in/andrey-kumov-9b55b128b"
//             target="_blank"
//             className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
//           >
//             <Linkedin className="text-gray-600 hover:text-blue-500 w-5 h-5" />
//           </a>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 mt-8">
//           <div className="text-center">
//             <div className="text-2xl font-bold text-blue-600">5+</div>
//             <div className="text-sm text-gray-600">Years Experience</div>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold text-blue-600">100+</div>
//             <div className="text-sm text-gray-600">Happy Clients</div>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold text-blue-600">24/7</div>
//             <div className="text-sm text-gray-600">Support</div>
//           </div>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="relative flex justify-center">
//         <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-3xl overflow-hidden shadow-2xl border border-blue-100 bg-white/40 backdrop-blur-md">
//           <img
//             src={logo}
//             alt="Andrey Kumov"
//             className="w-full h-full object-cover"
//           />
//           {/* Badge */}
//           <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md px-3 py-2 text-xs font-semibold text-gray-700">
//             {/* Certified Coach */}
//             <div className="text-sm font-bold text-gray-900">Certified</div>
//                   <div className="text-xs text-gray-600">Physical Education</div>
//           </div>
//           <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md px-3 py-2 text-xs font-semibold text-gray-700">
//             {/* Health & Nutrition */}
//                             <div className="text-sm font-bold text-gray-900">Health</div>
//                 <div className="text-xs text-gray-600">& Wellness</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//   );
// };

// export default Hero;

import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Andrey Kumov</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Certified Personal Trainer and Nutrition Coach helping people in Luxembourg 
              achieve their health and fitness goals through personalized training and sustainable lifestyle changes.
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-1">Diploma of Physical Education</p>
              <p>Health, Motivation & Wellness Specialist</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <div className="text-gray-300">
                  <p>11 Rue de Luxembourg</p>
                  <p>Sandweiler, Luxembourg</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:+352621544052" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +352 621 544 052
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:kumov97@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                  kumov97@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect & Hours</h4>
            
            <div className="flex space-x-4 mb-6">
              <a
                href="https://instagram.com/lux.kumov_"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/andrey-kumov-9b55b128b"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:kumov97@gmail.com"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="text-sm text-gray-300">
              <h5 className="font-semibold mb-2">Available Hours:</h5>
              <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
              <p>Saturday: 8:00 AM - 6:00 PM</p>
              <p>Sunday: By appointment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Andrey Kumov Personal Training. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Transform your life through fitness • Luxembourg's trusted personal trainer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { User, Monitor, Apple, CheckCircle } from 'lucide-react';

interface ServicesProps {
  onGetStarted: (service: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onGetStarted }) => {
  const services = [
    {
      icon: User,
      title: "Personal Coaching",
      price: "From €80/session",
      description: "One-on-one training sessions tailored to your specific goals and fitness level.",
      features: [
        "Personalized workout plans",
        "Real-time form correction",
        "Motivational support",
        "Progress tracking",
        "Flexible scheduling"
      ],
      highlight: true
    },
    {
      icon: Monitor,
      title: "Online Training",
      price: "From €120/month",
      description: "Virtual training sessions and programs you can follow from anywhere in the world.",
      features: [
        "Live video sessions",
        "Custom workout videos",
        "Weekly check-ins",
        "Mobile app access",
        "24/7 support"
      ]
    },
    {
      icon: Apple,
      title: "Nutrition Plans",
      price: "From €100/month",
      description: "Comprehensive nutrition coaching to complement your fitness journey.",
      features: [
        "Personalized meal plans",
        "Macro tracking guidance",
        "Supplement recommendations",
        "Recipe suggestions",
        "Monthly consultations"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from a range of personalized services designed to help you achieve your health and fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.highlight ? 'ring-2 ring-blue-600 relative' : ''
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                  service.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
                onClick={() => onGetStarted(service.title)}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Not sure which service is right for you? Let's discuss your goals and find the perfect fit.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-100 text-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
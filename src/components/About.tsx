import React from 'react';
import { Award, Target, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Certified Professional",
      description: "Diploma of Physical Education with specialized training in fitness and nutrition"
    },
    {
      icon: Target,
      title: "Goal-Oriented Approach",
      description: "Customized training programs designed to achieve your specific fitness objectives"
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "One-on-one coaching focused on your individual needs and progress"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Evidence-based methods that deliver sustainable health and fitness improvements"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Andrey
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Your Partner in Health & Wellness
            </h3>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                With a Diploma of Physical Education and years of experience in the fitness industry, 
                I am passionate about helping individuals transform their lives through personalized 
                training and nutrition coaching.
              </p>
              <p>
                Based in Luxembourg, I specialize in creating comprehensive wellness programs that 
                focus not just on physical transformation, but on building sustainable healthy habits 
                that last a lifetime.
              </p>
              <p>
                My approach combines scientific training methods with motivational coaching to ensure 
                you not only reach your goals but maintain them long-term. Whether you're looking to 
                lose weight, build strength, or improve overall health, I'm here to guide you every step of the way.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Coaching Philosophy</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700">Health is a journey, not a destination - I'm here to guide you through every step</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700">Sustainable habits create lasting results - no quick fixes, just proven methods</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700">Every individual is unique - your program should be too</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700">Motivation comes and goes, but discipline and systems create success</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <highlight.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h4>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
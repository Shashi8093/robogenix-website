import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Saptarishi Banarjee',
    role: 'CO-ORDINATOR',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:john@robogenix.com',
    },
  },
  {
    name: 'Ananya Verma',
    role: 'DEPUTY CO-ORDINATOR',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:jane@robogenix.com',
    },
  },
  {
    name: 'Ankit Chodhury',
    role: 'CLUB SECERETARY',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:mike@robogenix.com',
    },
  },
  {
    name: 'Swayam Suresh Thripathy',
    role: 'DEPUTY CO-ORDINATOR',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:john@robogenix.com',
    },
  },
  {
    name: 'Abhishek Dash',
    role: 'EVENTS LEAD',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:john@robogenix.com',
    },
  },
  {
    name: 'Nilesh Patnaik',
    role: 'SPONSORSHIP LEAD',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:john@robogenix.com',
    },
  },
  {
    name: 'Soumya Sworupa Dash',
    role: 'MARKETING ASSOCIATE',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:john@robogenix.com',
    },
  },
  {
    name: 'Reetika Dash',
    role: 'SOCIAL MEDA TEAM',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:john@robogenix.com',
    },
  },
  {
    name: 'Sneha Grace Kujur',
    role: 'SOCIAL MEDA TEAM',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:john@robogenix.com',
    },
  },
  {
    name: 'Jessica Maria Ekka',
    role: 'TECH LEAD',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:john@robogenix.com',
    },
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Our <span className="text-blue-500">Team</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden text-center p-6"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-blue-500 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={member.socials.email}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
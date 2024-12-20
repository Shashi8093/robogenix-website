import { motion } from 'framer-motion';

const sponsors = [
  {
    name: 'Brand 247',
    logo: './Pictures/1.png',
    website: 'https://example.com',
  },
  {
    name: 'UTNT',
    logo: './Pictures/3.png',
    website: 'https://example.com',
  },
  {
    name: 'Vignaraj Infraventures',
    logo: './Pictures/4.png',
    website: 'https://example.com',
  },
  {
    name: 'Avishkar',
    logo: './Pictures/5.png',
    website: 'https://example.com',
  },
  {
    name: 'Monster Energy',
    logo: './Pictures/7.png',
    website: 'https://example.com',
  },
  {
    name: 'MCL',
    logo: './Pictures/8.png',
    website: 'https://example.com',
  },
  {
    name: 'Arkus Technology',
    logo: './Pictures/9.png',
    website: 'https://example.com',
  },
];

export default function Sponsors() {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Our <span className="text-blue-500">Sponsors</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{sponsor.name}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
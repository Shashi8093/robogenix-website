import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Image } from 'lucide-react';
import { useState } from 'react';
import { PastEventProps } from './types';
import ImageGallery from './ImageGallery';

export default function PastEventCard({ 
  title, 
  date, 
  location, 
  participants, 
  image,
  description,
  gallery
}: PastEventProps) {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden group"
      >
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
          <div className="space-y-2 mb-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <Calendar className="h-4 w-4 text-blue-500" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-4 w-4 text-blue-500" />
              <span>{location}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Users className="h-4 w-4 text-blue-500" />
              <span>{participants} Participants</span>
            </div>
          </div>
          <p className="text-gray-400 mb-4">{description}</p>
          <button 
            onClick={() => setShowGallery(true)}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            <Image className="h-5 w-5" />
            <span>View Gallery</span>
          </button>
        </div>
      </motion.div>

      {showGallery && (
        <ImageGallery 
          images={gallery.map(g => g.url)}
          captions={gallery.map(g => g.caption)}
          onClose={() => setShowGallery(false)} 
          title={title}
        />
      )}
    </>
  );
}
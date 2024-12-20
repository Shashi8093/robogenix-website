import { motion } from 'framer-motion';
import { Image } from 'lucide-react';
import { useState } from 'react';
import { UpcomingEventProps } from './types';
import ImageGallery from './ImageGallery';

export default function EventCard({ title, date, image, description, gallery }: UpcomingEventProps) {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-blue-500 mb-4">{date}</p>
          <p className="text-gray-300 mb-4">{description}</p>
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
          onClose={() => setShowGallery(false)} 
          title={title}
        />
      )}
    </>
  );
}
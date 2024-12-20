import { motion } from 'framer-motion';
import { Image } from 'lucide-react';
import { useState } from 'react';
import { UpcomingEventProps } from '../types';
import ImageGallery from '../ImageGallery';
import { CardContainer, ImageContainer, ContentContainer } from './styles';

export default function EventCard({ title, date, image, description, gallery }: UpcomingEventProps) {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      <CardContainer>
        <ImageContainer>
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </ImageContainer>
        <ContentContainer>
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
        </ContentContainer>
      </CardContainer>

      {showGallery && (
        <ImageGallery 
          images={gallery}
          onClose={() => setShowGallery(false)} 
          title={title}
        />
      )}
    </>
  );
}
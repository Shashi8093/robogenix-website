import { useState } from 'react';
import { PastEventProps } from '../types';
import ImageGallery from '../ImageGallery';
import EventInfo from './EventInfo';
import { CardContainer, ImageContainer, ContentContainer } from './styles';

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
      <CardContainer>
        <ImageContainer>
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </ImageContainer>
        
        <ContentContainer>
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
          <EventInfo date={date} location={location} participants={participants} />
          <p className="text-gray-400 mb-4">{description}</p>
          <button 
            onClick={() => setShowGallery(true)}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
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
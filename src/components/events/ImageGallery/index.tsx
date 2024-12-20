import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { GalleryImage as GalleryImageType } from '../types';
import GalleryImage from './GalleryImage';
import GalleryControls from './GalleryControls';

interface ImageGalleryProps {
  images: GalleryImageType[];
  onClose: () => void;
  title: string;
}

export default function ImageGallery({ images, onClose, title }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-blue-500 transition-colors"
        >
          <X className="h-8 w-8" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-4 text-center">{title} Gallery</h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <GalleryImage 
              key={currentIndex} 
              image={images[currentIndex]} 
              isActive={true} 
            />
          </AnimatePresence>

          <GalleryControls
            onPrevious={previousImage}
            onNext={nextImage}
            totalImages={images.length}
            currentIndex={currentIndex}
            onIndexChange={setCurrentIndex}
          />
        </div>
      </div>
    </motion.div>
  );
}
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  captions?: (string | undefined)[];
  onClose: () => void;
  title: string;
}

export default function ImageGallery({ images, captions, onClose, title }: ImageGalleryProps) {
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
            <div className="flex flex-col items-center">
              <motion.img
                key={`img-${currentIndex}`}
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="max-h-[70vh] mx-auto rounded-lg"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              />
              {captions?.[currentIndex] && (
                <motion.p
                  key={`caption-${currentIndex}`}
                  className="text-white mt-4 text-center max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {captions[currentIndex]}
                </motion.p>
              )}
            </div>
          </AnimatePresence>

          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-blue-500/50 transition-colors"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-blue-500/50 transition-colors"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
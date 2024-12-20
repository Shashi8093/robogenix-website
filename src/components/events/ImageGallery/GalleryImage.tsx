import { motion } from 'framer-motion';
import { GalleryImage as GalleryImageType } from '../types';

interface GalleryImageProps {
  image: GalleryImageType;
  isActive: boolean;
}

export default function GalleryImage({ image, isActive }: GalleryImageProps) {
  return (
    <div className="flex flex-col items-center">
      <motion.img
        src={image.url}
        alt={image.caption || 'Gallery image'}
        className="max-h-[70vh] mx-auto rounded-lg"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
      />
      {image.caption && (
        <motion.p
          className="text-white mt-4 text-center max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {image.caption}
        </motion.p>
      )}
    </div>
  );
}
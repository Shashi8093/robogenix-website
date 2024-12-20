import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  totalImages: number;
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export default function GalleryControls({
  onPrevious,
  onNext,
  totalImages,
  currentIndex,
  onIndexChange,
}: GalleryControlsProps) {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-blue-500/50 transition-colors"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-blue-500/50 transition-colors"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalImages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onIndexChange(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </>
  );
}
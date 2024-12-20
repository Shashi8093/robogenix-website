import { motion } from 'framer-motion';

export const CardContainer = motion.div.attrs({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
})`
  bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden 
  hover:transform hover:scale-105 transition-all duration-300
`;

export const ImageContainer = motion.div`
  relative overflow-hidden
`;

export const ContentContainer = motion.div`
  p-6
`;
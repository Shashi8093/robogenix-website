import { motion } from 'framer-motion';

export const CardContainer = motion.div.attrs({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
})`
  bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden group
`;

export const ImageContainer = motion.div`
  relative
`;

export const ContentContainer = motion.div`
  p-6
`;
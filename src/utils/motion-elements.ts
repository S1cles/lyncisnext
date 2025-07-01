// motion-elements.ts
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

export const MotionVideo = chakra(motion.video, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});
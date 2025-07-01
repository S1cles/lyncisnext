import React, { useEffect, useRef } from 'react';
import {
    Box,
    Button, Flex,
    Heading,
    IconButton,
    Text,
} from '@chakra-ui/react';
import {IoMdClose} from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';
import {MotionVideo} from "@/utils/motion-elements";

const MotionBox = motion(Box);

interface PosterCProps {
    image: string;
    title: string;
    desc: string;
    height: number;
    videoSrc?: string;
    isActive: boolean;
    onClick: () => void;
    onClose: () => void;
}

const PosterC: React.FC<PosterCProps> = ({
                                             image,
                                             title,
                                             desc,
                                             height,
                                             videoSrc,
                                             isActive,
                                             onClick,
                                             onClose,
                                         }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isActive) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
            if (videoRef.current) videoRef.current.currentTime = 0;
        }
    }, [isActive]);

    return (
        <>
            <AnimatePresence>
                {isActive && (
                    <MotionBox
                        key="expanded"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        position="absolute"
                        top={0}
                        left={0}
                        w="100%"
                        h="100%"
                        bg="black"
                        zIndex={999}
                        overflow="hidden"
                    >
                        {/* Видеофон */}
                        <MotionVideo
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                            as="video"
                            ref={videoRef}
                            src={videoSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            position="absolute"

                        />

                        {/* Блок описания */}
                        <MotionBox
                            position="absolute"
                            bottom={0}
                            w="100%"
                            p={8}
                            color="white"
                            bgGradient="linear(to-t, black, transparent)"
                            zIndex={2}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Heading>{title}</Heading>
                            <Text mt={2} maxW="600px">
                                {desc}
                            </Text>
                            <Button w={'100%'} variant={'solid'} mt={4} colorScheme="red" size="sm">
                                View here
                            </Button>
                        </MotionBox>

                        {/* Кнопка закрытия */}
                        <IconButton
                            icon={<IoMdClose />}
                            aria-label="Close"
                            position="absolute"
                            top={4}
                            right={4}
                            zIndex={3}
                            onClick={onClose}
                            colorScheme="whiteAlpha"
                        />

                    </MotionBox>
                )}
            </AnimatePresence>

            {/* Свёрнутая карточка */}
            {!isActive && (
                <MotionBox
                    w="250px"
                    h={`${height}px`}
                    borderRadius="14px"
                    backgroundImage={`url(${image})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    position="relative"
                    color="white"
                    overflow="hidden"
                    cursor="pointer"
                    onClick={onClick}
                    boxShadow="lg"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                >
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        w="100%"
                        h="100%"
                        bgGradient="linear(to-b, rgba(0,0,0,0.7), transparent)"
                        zIndex={1}
                    />
                    <Flex
                        position="relative"
                        zIndex={2}
                        p={4}
                        flexDirection="column"
                        justifyContent="space-between"
                        h="100%"
                        textAlign={'center'}
                    >
                        <Heading size="md">{title}</Heading>
                        <Box flex="1" />

                    </Flex>
                </MotionBox>
            )}
        </>
    );
};

export default PosterC;

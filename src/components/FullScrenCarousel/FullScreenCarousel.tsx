'use client';

import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { cards } from '@/utils/carousel';

const MotionBox = motion(Box);

export default function MotionSlider() {
    const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
    const [isLargerThan1000] = useMediaQuery('(min-width: 1070px)');

    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const paginate = (newDirection: number) => {
        setIndex(([prev]) => {
            const newIndex = (prev + newDirection + cards.length) % cards.length;
            return [newIndex, newDirection];
        });
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const delta = touchStartX.current - touchEndX.current;
        const threshold = 50; // минимальная длина свайпа

        if (delta > threshold) {
            paginate(1); // свайп влево
        } else if (delta < -threshold) {
            paginate(-1); // свайп вправо
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: dir < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const card = cards[index];

    return (
        <Flex
            w="100vw"
            h="89vh"
            pos="relative"
            overflow="hidden"
            align="center"
            justify="center"
            mt="80px"
            onTouchStart={!isLargerThan1000 ? handleTouchStart : undefined}
            onTouchMove={!isLargerThan1000 ? handleTouchMove : undefined}
            onTouchEnd={!isLargerThan1000 ? handleTouchEnd : undefined}
        >
            <AnimatePresence initial={false} custom={direction}>
                <MotionBox
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }} // можно убрать если не нужно ограничение
                    onDragEnd={(e, info) => {
                        if (info.offset.x > 50) paginate(-1); // свайп вправо
                        else if (info.offset.x < -50) paginate(1); // свайп влево
                    }}
                    key={card.id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.4 },
                    }}
                    position="absolute"
                    w="100%"
                    h="100%"
                    bgImage={`url(${card.image})`}
                    bgSize="cover"
                    bgPos="center"
                    display="flex"
                    alignItems="center"
                    justifyContent={
                        card.side === 'left'
                            ? 'flex-start'
                            : card.side === 'right'
                                ? 'flex-end'
                                : 'center'
                    }
                    fontSize="5xl"
                    color="white"
                    px={{ base: 6, md: 16 }}
                >
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        w="100%"
                        h="100%"
                        bg="blackAlpha.500"
                        zIndex={0}
                    />

                    <Flex
                        direction="column"
                        align={
                            card.side === 'center'
                                ? 'center'
                                : card.side === 'left'
                                    ? 'flex-start'
                                    : 'flex-end'
                        }
                        textAlign={card.side as 'left' | 'right' | 'center'}
                        gap={6}
                        zIndex={1}
                        maxW="800px"
                        p={10}
                    >
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} pb={2} lineHeight="1.2">
                            {card.title}
                        </Heading>
                        <Text fontWeight="600" fontSize={{ base: 'md', lg: 'lg' }} lineHeight="1.5">
                            {card.text}
                        </Text>
                        {card.btnText && (
                            <Button
                                mt={2}
                                colorScheme="red"
                                variant="solid"
                                size="md"
                                height="64px"
                                width="200px"
                                fontSize="24"
                            >
                                {card.btnText}
                            </Button>
                        )}
                    </Flex>
                </MotionBox>
            </AnimatePresence>

            {/* Стрелки показываются только если >1000px */}
            {isLargerThan1000 && (
                <Box>
                    <Button
                        border="hidden"
                        background="blackAlpha.700"
                        color="white"
                        fontSize="24"
                        pos="absolute"
                        left="4"
                        top="50%"
                        transform="translateY(-50%)"
                        onClick={() => paginate(-1)}
                        zIndex={2}
                    >
                        <IoIosArrowBack />
                    </Button>
                    <Button
                        border="hidden"
                        background="blackAlpha.700"
                        color="white"
                        fontSize="24"
                        pos="absolute"
                        right="4"
                        top="50%"
                        transform="translateY(-50%)"
                        onClick={() => paginate(1)}
                        zIndex={2}
                    >
                        <IoIosArrowForward />
                    </Button>
                </Box>
            )}
        </Flex>
    );
}

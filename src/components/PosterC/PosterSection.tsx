import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
// import PosterC from './PosterC';
import PosterC2 from "@/components/PosterC/PosterC2"; // путь к компоненту

const PosterSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const cards = [
        {
            title: 'Mining, Exploration',
            desc: 'Crushed ore grade sorting, Stockpiling\n' +
                'Blending raw materials from different sources\n' +
                'Drill core and dust analysis',
            image: '/Lyncis/1-Pica.png',
            videoSrc: '/video/1.mp4',
        },
        {
            title: 'Flotation, Leaching',
            desc: 'Optimal water and reagents dosage\n' +
                'Slurry, brine and liquor analysis',
            image: '/Lyncis/2-Pica.png',
            videoSrc: '/video/2.mp4',
        },
        {
            title: 'Burning, Smelting',
            desc: 'Optimal fluxes dosage\n' +
                'Basicity stabilization\n' +
                'Fuel, energy control\n' +
                'Slag/metal monitoring',
            image: '/Lyncis/3-Pica.png',
            videoSrc: '/video/3.mp4',
        },
        {
            title: 'Quality Control',
            desc: 'Concentrate quality monitoring\n' +
                'Metals analysis\n' +
                'Product grade sorting\n' +
                'Reject off-grade product',
            image: '/Lyncis/4-Pica.png',
            videoSrc: '/video/4.mp4',
        },
    ];

    return (
        <Box position="relative" minH="400px">
            <Flex gap={10} justify="center" wrap="wrap">
                {cards.map((card, index) => (
                    <PosterC2
                        key={index}
                        {...card}
                        height={400}
                        isActive={activeIndex === index}
                        onClick={() => setActiveIndex(index)}
                        onClose={() => setActiveIndex(null)}
                    />
                ))}
            </Flex>
        </Box>
    );
};

export default PosterSection;
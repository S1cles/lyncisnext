import React from 'react';
import {Box, Flex, useMediaQuery} from "@chakra-ui/react";
import CardC from "@/components/CardC/CardC";

type CardData = {
    text: string;
    image: string;
};

interface SliderCProps {
    cards: CardData[];
}

const SliderC: React.FC<SliderCProps> = ({ cards }) => {
    const [isLargerThan1000] = useMediaQuery('(min-width: 1070px)');
    return (

                <Box overflowX="auto" px={4} py={6} maxW={isLargerThan1000?'1200px':'100%'}>

                <Flex
                    gap={8}
                    w="max-content"
                    scrollSnapType="x mandatory"
                    // sx={{
                    //     '&::-webkit-scrollbar': { display: 'none' },
                    //     scrollbarWidth: 'none',
                    // }}

                >
                    {cards.map((card, index) => (
                        <CardC
                            height={200}
                            key={index}
                            text={card.text}
                            image={card.image}
                        />
                    ))}
                </Flex>
            </Box>

    );
};

export default SliderC;
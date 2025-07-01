import React from 'react';
import {Box, Flex} from "@chakra-ui/react";
import CardC from "@/components/CardC/CardC";

type CardData = {
    text: string;
    image: string;
};

interface SliderCProps {
    cards: CardData[];
}

const SliderC: React.FC<SliderCProps> = ({ cards }) => {
    return (

            <Box overflowX="auto" px={4} py={6}                  maxW={'1200px'}>

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
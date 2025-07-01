import React from 'react';
import {Box, Flex, Heading, Highlight} from "@chakra-ui/react";


type SectionTextProps = {
    text: string;
    highlight: string;
};

const SectionHeading = ({text,highlight}:SectionTextProps) => {



    return (
        <Flex  alignItems={'center'}>
            <Flex >
                <Box border={'4px solid red'} borderColor={'red.500'} borderRadius={'10px'} height={'5em'}
                     transform={'rotate(30deg)'} m={2}/>
                <Box border={'4px solid red'} borderColor={'red.500'} borderRadius={'10px'} height={'5em'}
                     transform={'rotate(30deg)'}/>
            </Flex>
            <Heading size="lg" letterSpacing="tight" maxW={'800px'} p={4} textTransform="uppercase">
                <Highlight query={highlight} styles={{color: "red.600", textTransform: "uppercase",}} >
                    {text}
                </Highlight>
            </Heading>
        </Flex>
    );
};

export default SectionHeading;
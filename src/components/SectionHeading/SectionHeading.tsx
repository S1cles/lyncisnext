import React from 'react';
import {Box, Flex, Heading, Highlight, useMediaQuery} from "@chakra-ui/react";


type SectionTextProps = {
    text: string;
    highlight: string;
};

const SectionHeading = ({text,highlight}:SectionTextProps) => {
    const [isLargerThan1000] = useMediaQuery('(min-width: 1070px)');



    return (
        <Flex  alignItems={'center'}>
            <Flex display={isLargerThan1000 ? 'flex' : 'none'}>
                <Box border={'4px solid red'} borderColor={'red.500'} borderRadius={'10px'} height={'5em'}
                     transform={'rotate(30deg)'} m={2}/>
                <Box border={'4px solid red'} borderColor={'red.500'} borderRadius={'10px'} height={'5em'}
                     transform={'rotate(30deg)'}/>
            </Flex>
            <Heading textAlign={isLargerThan1000 ? 'left' : 'center'}  size={isLargerThan1000?"lg":'md'} letterSpacing="tight" maxW={'800px'} p={isLargerThan1000 ?4 : 0} textTransform="uppercase">
                <Highlight query={highlight} styles={{color: "red.600", textTransform: "uppercase",}} >
                    {text}
                </Highlight>
            </Heading>
        </Flex>
    );
};

export default SectionHeading;
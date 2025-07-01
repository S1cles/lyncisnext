import React, {ReactNode} from 'react';
import {Box, Heading} from '@chakra-ui/react';


interface ParallaxProps {
    children?: ReactNode;
}

const Parallax = ({children}:ParallaxProps) => {
    return (
        <Box
            bgImage="url('/Lyncis/2-Pica.png')" // путь к картинке
            minH="500px"
            backgroundAttachment="fixed"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            className={'parallax-scroll'}
            flexDirection={'column'}
        >
            {/*<Box position="absolute" top={0} left={0} w="100%" h="100%" bg="blackAlpha.300" zIndex={0} />*/}
            <Heading color={'red.500'} fontWeight={'500'}>Our resources</Heading>
            {children}

        </Box>
    );
};

export default Parallax;
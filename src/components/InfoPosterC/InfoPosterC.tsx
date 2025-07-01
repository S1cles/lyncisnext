import React from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Center,
    Divider,
    Flex,
    Heading,
    Image,
    Text, useColorModeValue
} from "@chakra-ui/react";

interface CardCProps {
    image: string;
    title: string;
    desc: string;
    desc2: string;
    height: number;
}

const InfoPosterC: React.FC<CardCProps> = ({image, title,desc,desc2,height}) => {

    const borderColor = useColorModeValue('#C9CCDD', 'transparent');

    return (
        <Card h={height}
            //       _hover={{
            //     transform: 'scale(1.1)',
            // }}
            //       transition="all 0.3s ease"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              borderRadius={'14px'}
              justifyContent={'center'}
              alignItems={'center'}
              border={`1px solid ${borderColor}`}
              flex={1}
              // w={'350px'}
              w="100%"


        >
            <CardHeader textAlign={'center'}  borderRadius={'14px'}>
                <Image maxW={100} src={image}/>
            </CardHeader>
            <CardBody>
                <Heading  size={'md'}>{title}</Heading>

            </CardBody>
            <CardFooter justifyContent={'center'}>
                <Flex flexDirection={'column'}>
                    <Text  wordBreak="break-word" maxW={"100%"}>{desc}</Text>
                    <Divider
                        borderColor="red.300"
                        borderWidth="1px"
                        my={3}
                        opacity={0.8}
                        borderRadius={'50%'}
                    />


                    <Text wordBreak="break-word" maxW={"100%"}>{desc2}</Text>
                </Flex>
            </CardFooter>
        </Card>
    );
};

export default InfoPosterC;
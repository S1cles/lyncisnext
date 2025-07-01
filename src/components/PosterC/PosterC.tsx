import React from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Heading, Text} from "@chakra-ui/react";

interface CardCProps {
    image: string;
    title: string;
    desc: string;
    height: number;
}

const PosterC: React.FC<CardCProps> = ({image, title,desc,height}) => {
    return (
        <Card w={'250px'} h={height} backgroundImage={`url(${image})`}
        //       _hover={{
        //     transform: 'scale(1.1)',
        // }}
        //       transition="all 0.3s ease"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              borderRadius={'14px'}
              color={'white'}
        >
            <CardHeader textAlign={'center'} bgGradient="linear(to-b,  rgba(0, 0, 0, 0.9), transparent)"    borderRadius={'14px'}>

            </CardHeader>
            <CardBody>
                <Heading>{title}</Heading>
                <Text>{desc}</Text>
            </CardBody>
            <CardFooter justifyContent={'center'}>

                    <Button variant={'solid'}>View here</Button>

            </CardFooter>
        </Card>
    );
};

export default PosterC;
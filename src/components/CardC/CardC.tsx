import React from 'react';
import { Card, CardHeader, Heading} from "@chakra-ui/react";

interface CardCProps {
    image: string;
    text: string;
    height: number;
}

const CardC: React.FC<CardCProps> = ({image, text,height}) => {
    return (
        <Card w={'200px'} h={height} backgroundImage={`url(${image})`}  _hover={{
            transform: 'scale(1.1)',
        }}
              transition="all 0.3s ease"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              borderRadius={'14px'}
        >
            <CardHeader textAlign={'center'} bgGradient="linear(to-b,  rgba(0, 0, 0, 0.9), transparent)"    borderRadius={'14px'}>
                <Heading color={'white'} size='md'> {text}</Heading>
            </CardHeader>
        </Card>
    );
};

export default CardC;
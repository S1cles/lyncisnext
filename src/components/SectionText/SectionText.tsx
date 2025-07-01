import React from 'react';
import {Text} from "@chakra-ui/react";

type TextData = {
    text: string | number;
};

const SectionText = ({text}:TextData) => {
    return (
        <Text>
            {text}
        </Text>
    );
};

export default SectionText;
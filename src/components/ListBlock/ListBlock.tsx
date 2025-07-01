import React from 'react';
import {Box, Center, Flex, List, ListIcon, ListItem} from "@chakra-ui/react";
import {IoMdSettings} from "react-icons/io";
import SectionText from "@/components/SectionHeading/SectionHeading";

type SectionTextProps = {
    data1: {
        text: string;
        highlight: string;
    };
};

const ListBlock = ({ data1 }:SectionTextProps) => {

    // const highlight = data1?.highlight.toString();
    // console.log( typeof data1?.highlight === 'string');
    // console.log(highlight)
    return (
        <Box>
            <Center mt={'5em'} mb={'5em'} display={'flex'} flexDirection={'column'} >

                <SectionText text={data1.text} highlight={data1.highlight}/>
            <Flex gap={'20px'}>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={IoMdSettings } color='red.500' />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </ListItem>
                    <ListItem>
                        <ListIcon as={IoMdSettings } color='red.500' />
                        Assumenda, quia temporibus eveniet a libero incidunt suscipit
                    </ListItem>
                    <ListItem>
                        <ListIcon as={IoMdSettings } color='red.500' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                </List>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={IoMdSettings } color='red.500' />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </ListItem>
                    <ListItem>
                        <ListIcon as={IoMdSettings } color='red.500' />
                        Assumenda, quia temporibus eveniet a libero incidunt suscipit
                    </ListItem>
                    <ListItem>
                        <ListIcon as={IoMdSettings } color='red.500' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                </List>
            </Flex>

            </Center>
        </Box>
    );
};

export default ListBlock;
import React from 'react';
import {Button, Flex, Menu, MenuButton, MenuItem, MenuList, Portal, Text} from "@chakra-ui/react";
import Link from "next/link";
import { UrlObject } from 'url';
import { AiOutlineCaretDown } from "react-icons/ai";

type BurgerLink = {
    href: string | UrlObject;
    title?: string;
};

type BurgerButtonProps = {
    title: string;
    list: BurgerLink[];
};

const BurgerButton: React.FC<BurgerButtonProps> = ({ title, list }) => {
    return (
        <Menu isLazy>
            <MenuButton as={Button} border="none" bg="transparent" _hover={{ bg: 'transparent' }}>
                <Flex align="center" gap={1} whiteSpace="nowrap">
                    <Text>{title}</Text>
                    <AiOutlineCaretDown />
                </Flex>
            </MenuButton>

            <Portal>
                <MenuList zIndex="dropdown">
                    {list.map((link) => (
                        <MenuItem key={link.title} as={Link} href={link.href}>
                            <Text color="red.500">{link.title}</Text>
                        </MenuItem>
                    ))}
                </MenuList>
            </Portal>
        </Menu>
    );
};

export default BurgerButton;

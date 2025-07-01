import React from 'react';
import {Avatar, Box, Flex, Image, Link, Stack, Text} from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={20}>
            <hr/>

            <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>

                <Box flex={1}>
                    <Stack direction='row'>
                        <Link href={'/'}>
                            <Avatar name='Youtube' src='https://imgs.search.brave.com/Hk2lS_TWEKQq5br_poXpUw_VIxkRY7b63rJnng4_NgI/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS82YW0waTN3YWxZ/d05MYzA4UU9PaFJK/dHRRRU5OR2tobEth/alhTRVJmM0puUFZS/UWN6SXl4dzJ3M0R4/ZU1SVE9TZHNZ' />
                        </Link>
                        <Link href={'/'}>
                            <Avatar name='Instagram' src='https://imgs.search.brave.com/Mxh8zByS8POeT70A1aN3UEh3FzmM-qF4bQM-qwAoz6M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/c3RhZ3JhbV9sb2dv/XzIwMjIuc3ZnLzI1/MHB4LUluc3RhZ3Jh/bV9sb2dvXzIwMjIu/c3ZnLnBuZw' />
                        </Link>
                        <Link href={'/'}>
                            <Avatar name='LinkedIn' src='https://imgs.search.brave.com/qOtJZ8s0PHMP9hPJlvA4Xtmn6emP7x73eOSz_OtiN6A/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9rTW9mRUZMam9i/WnlfYkN1YWlEb2d6/QmNVVC1kejNCQmJP/cklFakotaHFPYWJq/SzhpZXVldkdlNnds/VEQxNVF6T3F3' />
                        </Link>
                    </Stack>
                </Box>
                <Image flex={1} filter={'contrast(0)'} margin={'0 auto'} maxH={100}   src='/Lyncis/logo.svg' alt='Lyncis' />
                <Box flex={1} textAlign={'end'}>
                    <Text>© 2025 Lyncis Corporation. All Rights Reserved.</Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default Footer;
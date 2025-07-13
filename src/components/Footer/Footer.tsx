import React, {useEffect, useState} from 'react';
import {Avatar, Box, Flex, Image, Link, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import axios from "axios";

type SocialItem = {
    id: number;
    social_link: string;
    social_img: {
        url: string;
    };
};

type FooterData = {
    social: SocialItem[];
    footer_logo: {
        url: string;
    };
    footer_corp: string;
};

const Footer = () => {

    const  [footerData,setFooterData] = useState<FooterData | null>(null);
    useEffect(() => {
        const fetchGlobalData = async () => {
            try {
                const res = await axios.get('http://localhost:1337/api/global', {
                    params: {
                        'populate[footer][populate][social][populate][social_img]': true,
                        'populate[footer][populate][logo_footer]': true,
                    },
                });
                setFooterData(res.data.data.footer);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchGlobalData();
    }, []);


    const [isLargerThan1000] = useMediaQuery('(min-width: 1070px)');
    return (
        <Box flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={20}>
            <hr/>

            <Flex flexDirection={ isLargerThan1000 ? 'row' : "column"} justifyContent={'space-between'} alignItems={'center'}>

                <Box flex={1}>
                    <Stack direction='row' mt={5}>
                        {footerData?.social?.map((item) => (
                            <Link
                                key={item.id}
                                href={`https://${item.social_link}`}
                                isExternal
                            >
                                <Avatar
                                    name={item.social_link}
                                    src={
                                        item.social_img?.url
                                            ? `http://localhost:1337${item.social_img.url}`
                                            : undefined
                                    }
                                />
                            </Link>
                        ))}


                        {/*<Link href={'/'}>*/}
                        {/*    <Avatar name='Instagram' src='https://imgs.search.brave.com/Mxh8zByS8POeT70A1aN3UEh3FzmM-qF4bQM-qwAoz6M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/c3RhZ3JhbV9sb2dv/XzIwMjIuc3ZnLzI1/MHB4LUluc3RhZ3Jh/bV9sb2dvXzIwMjIu/c3ZnLnBuZw' />*/}
                        {/*</Link>*/}
                        {/*<Link href={'/'}>*/}
                        {/*    <Avatar name='LinkedIn' src='https://imgs.search.brave.com/qOtJZ8s0PHMP9hPJlvA4Xtmn6emP7x73eOSz_OtiN6A/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9rTW9mRUZMam9i/WnlfYkN1YWlEb2d6/QmNVVC1kejNCQmJP/cklFakotaHFPYWJq/SzhpZXVldkdlNnds/VEQxNVF6T3F3' />*/}
                        {/*</Link>*/}
                    </Stack>
                </Box>
                <Image flex={1} filter={'contrast(0)'} margin={'0 auto'} maxH={100}
                       src={
                    footerData?.footer_logo?.url
                        ? `http://localhost:1337${footerData.footer_logo.url}`
                        : '/Lyncis/logo.svg'
                } alt='Lyncis' />
                <Box flex={1} textAlign={'end'}>
                    <Text>{footerData?.footer_corp}</Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default Footer;
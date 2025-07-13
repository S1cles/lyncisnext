'use client';
import React, { useEffect, useState } from 'react';
import {
    Box,
    Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay,
    Flex,
    HStack,
    Image,
    Stack,
    useColorMode, useDisclosure, useMediaQuery,
} from '@chakra-ui/react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import BurgerButton from '@/components/BurgerButton/BurgerButton';
// import {
//     linksIndustries,
//     linksProducts,
//     linksTechnology,
// } from '@/data/links';
import { motion, useScroll } from 'framer-motion';
import {IoMdMenu} from "react-icons/io";
import axios from "axios";
import Link from 'next/link';


const MotionFlex = motion(Flex);

type BurgerButton = {
    id: number;
    burger_btn: string;
    burger_link: string;
};

type MenuItem = {
    id: number;
    text_btn: string;
    link_btn: string | null;
    burger: boolean;
    burger_btn: BurgerButton[];
};

type Logo = {
    logo_link: string;
    logo_img: {
        url: string;
    };
};

type Contact = {
    contact_text: string;
    contact_link: string;
};

type Nav = {
    menu: MenuItem[];
    logo: Logo;
    contact: Contact;
};

const Header = () => {

    const [menuData, setMenuData] = useState<Nav | null>(null);

    useEffect(() => {
        const fetchGlobalData = async () => {
            try {
                const res = await axios.get('http://localhost:1337/api/global', {
                    params: {
                        'populate[nav][populate][menu][populate][burger_btn]': true,
                        'populate[nav][populate][logo][populate][logo_img]': true,
                        'populate[nav][populate][contact]': true,
                    },
                });
                setMenuData(res.data.data.nav);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchGlobalData();
    }, []);

    // if (!menuData) return <div>Загрузка меню...</div>;



    const { toggleColorMode, colorMode } = useColorMode();

    const { scrollY } = useScroll();
    const [prevScroll, setPrevScroll] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        return scrollY.on('change', (current) => {
            if (current > prevScroll && current > 100) {
                setVisible(false); // скролл вниз
            } else {
                setVisible(true); // скролл вверх
            }
            setPrevScroll(current);
        });
    }, [scrollY, prevScroll]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClick = () => {
        onOpen()
    }

    const [isLargerThan1000] = useMediaQuery('(min-width: 1070px)');
    return (
            <Box>
                {isLargerThan1000 ? (
                    <MotionFlex
                    position="fixed"
                    top={0}
                    left={0}
                    right={0}
                    zIndex={100}
                    justifyContent="space-between"
                    alignItems="center"
                    padding={3}
                    maxH="80px"
                    bg={colorMode ? "rgba(26, 32, 44, 0.2)" : "rgba(26, 32, 44, 0.9)"} // #1A202C с альфой
                    backdropFilter="blur(6px)"
                    initial={{ y: 0 }}
                    animate={{ y: visible ? 0 : -100 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <Stack direction="row" maxW="200px" maxH="80px" mt={2}>
                        <Link href={menuData?.logo?.logo_link as string || '/home'}>
                            <Image
                                width="100%"
                                height="auto"
                                objectFit="cover"
                                // src="/Lyncis/logo.svg"
                                src={
                                    menuData?.logo?.logo_img?.url
                                        ? `http://localhost:1337${menuData.logo.logo_img.url}`
                                        : '/Lyncis/logo2.svg'
                                }
                                alt="Lyncis light"
                            />
                        </Link>
                    </Stack>

                    <HStack
                        position="relative"
                        borderBottom="2px solid red"
                        borderLeft="2px solid red"
                        borderRight="2px solid red"
                        borderRadius="0 0 10px 10px"
                        overflow="hidden"
                        _before={{
                            content: `""`,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            h: '2px',
                            w: '100%',
                            bgGradient:
                                'linear(to-r, transparent 0%, red 20%, red 80%, transparent 100%)',
                        }}
                        p={1}
                    >
                        {menuData?.menu.map((item) => {
                            const hasSubmenu = item.burger && item.burger_btn?.length > 0;
                            const isValidLink =
                                typeof item.link_btn === 'string' && item.link_btn.trim() !== '';

                            if (hasSubmenu) {
                                return (
                                    <BurgerButton
                                        key={item.id}
                                        title={item.text_btn}
                                        list={item.burger_btn.map((btn) => ({
                                            title: btn.burger_btn,
                                            link: btn.burger_link,
                                        }))}
                                    />
                                );
                            }

                            if (isValidLink) {
                                return (
                                    <Link key={item.id} href={item.link_btn as string} passHref>
                                        <Button variant="ghost" border="none">
                                            {item.text_btn}
                                        </Button>
                                    </Link>
                                );
                            }

                            return (
                                <Button key={item.id} variant="ghost" border="none" isDisabled opacity={0.6}>
                                    {item.text_btn}
                                </Button>
                            );
                        })}
                    </HStack>

                    <Flex gap={2}>
                        <Link href={menuData?.contact.contact_link as string || '/'} passHref>
                            <Button as="a" variant="solid" bg="red.500" m={1}>
                                {menuData?.contact?.contact_text || 'Contact us'}
                            </Button>
                        </Link>
                        <Button
                            m={1}
                            color={colorMode === 'light' ? 'blackAlpha' : 'whiteAlpha'}
                            colorScheme={colorMode === 'light' ? 'blackAlpha' : 'whiteAlpha'}

                            onClick={toggleColorMode}
                        >
                            {colorMode === 'light' ? <FaRegSun /> : <FaRegMoon />}
                        </Button>
                    </Flex>
                </MotionFlex>

                    // ___________________________________________________________________________________________________________
                ):(

            <Flex w={'100%'} justifyContent="space-between" flexDirection={'row'} alignItems="center"  bg={colorMode ? "rgba(26, 32, 44, 0.2)" : "rgba(26, 32, 44, 0.9)"} position={'fixed'} zIndex={'200'}
                  backdropFilter="blur(6px)"
                  left={0}
                  top={0}>
                <Button
                    p={1}
                    color={colorMode === 'light' ? 'blackAlpha' : 'whiteAlpha'}
                    colorScheme={colorMode === 'light' ? 'blackAlpha' : 'whiteAlpha'}
                    m={1}
                    onClick={toggleColorMode}
                >
                    {colorMode === 'light' ? <FaRegSun /> : <FaRegMoon />}
                </Button>
                <Stack direction="row" maxW="130px" maxH="80px" mt={2}>
                    {colorMode === 'light' ? (
                        <Image
                            width="100%"
                            height="auto"
                            objectFit="cover"
                            // src="/Lyncis/logo.svg"
                            src="/Lyncis/logo2.svg"
                            alt="Lyncis light"
                        />
                    ) : (



                        <Image
                            width="100%"
                            height="auto"
                            objectFit="cover"
                            src="/Lyncis/logo2.svg"
                            alt="Lyncis dark"
                        />
                    )}
                </Stack>


                <Button onClick={() => handleClick()} m={2} p={0}><IoMdMenu /></Button>
                    <Drawer onClose={onClose} isOpen={isOpen} size={'full'}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>{`${'full'} drawer contents`}</DrawerHeader>
                        <DrawerBody>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Consequat nisl vel pretium lectus quam id. Semper quis lectus
                                nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                                quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
                                magna eget est lorem. Erat imperdiet sed euismod nisi porta.
                                Lectus vestibulum mattis ullamcorper velit.
                            </p>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
                 )}
            </Box>

    );
};

export default Header;

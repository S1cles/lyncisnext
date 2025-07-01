import React from 'react';
import {
    Box, Button,
    Card,
    CardBody,
    CardFooter,
    Center,
    Container,
    Divider,
    Flex,
    Heading,
    Image,
    Stack, Text
} from "@chakra-ui/react";
import FullscreenCarousel from "@/components/FullScrenCarousel/FullScreenCarousel";
import ParallaxBlock from "@/components/Parallax/Parallax";
import SliderC from "@/components/SliderC/SliderC";
import {data1, data2, data3, dataCards} from "@/data/text";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import SectionText from "@/components/SectionText/SectionText";
import ListBlock from "@/components/ListBlock/ListBlock";
import PosterC from "@/components/PosterC/PosterC";
import InfoPosterC from "@/components/InfoPosterC/InfoPosterC";
import PosterSection from "@/components/PosterC/PosterSection";



const Index = () => {
    return (
        <Box>

            <FullscreenCarousel/>
            <ListBlock data1={data1}/>
            <ParallaxBlock>
                <SliderC cards={dataCards} />
            </ParallaxBlock>
            <Container maxW={1270} mt={'5em'} mb={'5em'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

                    <Center flexDirection="column" justifyContent="center" alignItems="center">
                        <SectionHeading text={data2.text} highlight={data2.highlight}/>
                    </Center>
                    <SectionText text={data3.text}/>
                    <Divider
                        borderColor="red.500"
                        borderWidth="2px"
                        my={3}
                        opacity={0.8}
                        borderRadius={'50%'}
                    />
                    <SectionText text={data3.text2}/>
                    {/*<Flex gap={10} mt={'2em'}>*/}
                    {/*    <PosterC height={400} title={'123'} desc={'desc'} image={'/Lyncis/1-Pica.png'}/>*/}
                    {/*    <PosterC height={400} title={'123'} desc={'desc'} image={'/Lyncis/2-Pica.png'}/>*/}
                    {/*    <PosterC height={400} title={'123'} desc={'desc'} image={'/Lyncis/3-Pica.png'}/>*/}
                    {/*    <PosterC height={400} title={'123'} desc={'desc'} image={'/Lyncis/4-Pica.png'}/>*/}
                    {/*</Flex>*/}
                    <Box mt={'2em'} ></Box>
                    {/*<PosterSection />*/}

                        <Box mt={'5em'} ></Box>
                        <SectionHeading text={'Benefits for our clients'} highlight={'clients'}/>
                        <Flex mt={5} gap={10} justifyContent={'space-between'} textAlign={'center'} >
                            <InfoPosterC height={400} title={'FINANCIAL BENEFIT:'} desc={'Increased Revenue\n' +
                                'from higher quality product'} desc2={'Reduce Energy and Raw Material Consumption\n' +
                                'by applying prompt process control'} image={'/Lyncis/shesternia.svg'} />
                            <InfoPosterC height={400} title={'ENVIRONMENTAL BENEFIT:'} desc={'Decreased CO2 emission'} desc2={'Decreased environmental impact\n' +
                                'from less energy and fuel consumption\n' +
                                '\n' +
                                'No radiation materials used'} image={'/Lyncis/radiation.svg'} />
                            <InfoPosterC height={400} title={'PERSONNEL SAFETY:'} desc={'No hazardous environment\n' +
                                'No Gamma, Neutron, X-Ray Radiation'} desc2={'Automated solution\n' +
                                'Eliminate manual handling in grade sorting'} image={'/Lyncis/radiation.svg'} />
                        </Flex>
                        <Box mb={'5em'} ></Box>



                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    borderRadius={20}
                    maxW={'700px'}
                    color={'white'}
                    background={'red.500'}

                >
                    {/*<Image*/}
                    {/*    objectFit='cover'*/}
                    {/*    maxW={{ base: '100%', sm: '200px' }}*/}
                    {/*    src='/Lyncis/alex.jpg'*/}
                    {/*    alt='Caffe Latte'*/}
                    {/*/>*/}

                    <Stack>
                        <CardBody textAlign={'center'}>
                            <Heading size='md'>Let's start collaborating in the mining industry</Heading>

                            <Text py='2'>
                                We understand better than anyone how important it is for you to make things happen exactly as planned. That’s why we take the time to discuss every detail, every step — making sure nothing gets missed. Whether it’s coordination, adjustments, or just support, our team is always here to help. And if you ever need to talk, our managers are ready to call you whenever it’s convenient for you.
                            </Text>
                        </CardBody>

                        <CardFooter justifyContent={'center'}>
                            <Button variant='solid' colorScheme='light'background={'white'} color={'black'}>
                                Let`s connect
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            </Container >
        </Box>
    );
};

export default Index;
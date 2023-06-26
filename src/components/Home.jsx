import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
// import img5 from '../assets/5.png';

const Home = () => {
  return (
    <Box>
      <MyCarousel></MyCarousel>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    showThumbs={false}
    interval={1000}
    showStatus={false}
    showIndicators={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1}></Image>
      <Heading bgColor={'blackAlpha.600'} color={'white'}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2}></Image>
      <Heading bgColor={'blackAlpha.600'} color={'white'}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3}></Image>
      <Heading bgColor={'blackAlpha.600'} color={'white'}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4}></Image>
      <Heading bgColor={'blackAlpha.600'} color={'white'}>
        Watch The Future
      </Heading>
    </Box>
  </Carousel>
);

export default Home;

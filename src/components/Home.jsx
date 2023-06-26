import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: 4,
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel></MyCarousel>
      <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={2}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={img5}
            h={['40', '400']}
            filter={'hue-rotate(-130deg)'}
          ></Image>

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            textAlign={'center'}
            p={['4', '16']}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            eligendi consequatur tempora accusamus earum molestiae dolore.
            Officiis illo eius eos ad quaerat, obcaecati voluptatibus vitae
            distinctio! Obcaecati accusamus reiciendis esse doloribus
            repudiandae reprehenderit beatae delectus sapiente illo,
            repellendus, aliquam, nostrum incidunt rerum! Aperiam excepturi
            facere eum magnam sunt sed officia quia repellat suscipit aliquid
            minima deserunt nulla esse, laudantium totam, officiis est sapiente
            voluptate alias quibusdam natus. Impedit quasi officiis, sapiente
            doloribus, porro consequatur excepturi quas, debitis rerum
            laudantium harum pariatur sequi eos quo. Eaque deleniti, cupiditate
            magnam officiis voluptas, blanditiis libero omnis corrupti modi
            vitae excepturi harum odit repellat?
          </Text>
        </Stack>
      </Container>
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
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2}></Image>
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future Is Gaming
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3}></Image>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming On Console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4}></Image>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;

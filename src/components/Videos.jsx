import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import video1 from '../assets/video/butterfly_-_12060 (720p).mp4';
import video2 from '../assets/video/fall_-_23881 (1440p).mp4';
import video3 from '../assets/video/mountain_-_22512 (1080p).mp4';
import video4 from '../assets/video/mountain_-_34608 (1440p).mp4';
import video5 from '../assets/video/nature_-_31377 (1080p).mp4';
import video6 from '../assets/video/robin_-_21723 (720p).mp4';
import video7 from '../assets/video/sea_-_13704 (720p).mp4';
import video8 from '../assets/video/sunrise_-_83880 (720p).mp4';
import video9 from '../assets/video/trees_-_30222 (720p).mp4';

const Videos = () => {
  const videoArr = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
  ];

  const [videoSrc, setVideoSrc] = useState(videoArr[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          autoPlay
          style={{ width: '100%' }}
        ></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading> Sample Video</Heading>
          <Text>This is a sample video for testing demo.</Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {videoArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme="purple"
            onClick={() => {
              setVideoSrc(item);
            }}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;

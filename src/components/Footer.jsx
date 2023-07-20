import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineSend,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']} w={'full'}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            textTransform={'uppercase'}
            size={'md'}
            textAlign={['center', 'left']}
          >
            Subscribe to get all updates
          </Heading>
          <HStack borderBottom={'2px solid white'}>
            <Input
              placeholder="Enter email here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            ></Input>
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend></AiOutlineSend>
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Chakra Video hub
          </Heading>
          <Text>All right reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading textTransform={'uppercase'} textAlign={'center'} size={'md'}>
            Social Media
          </Heading>

          <Button variant={'link'} colorScheme="white">
            <a
              target="_blank"
              href="https://www.youtube.com/@jmsohelrana6232"
              rel="noreferrer"
            >
              <Text display={'flex'}>
                <AiOutlineYoutube></AiOutlineYoutube>YouTube
              </Text>
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a
              target="_blank"
              href="https://github.com/JMSohelRana"
              rel="noreferrer"
            >
              <Text display={'flex'}>
                <AiOutlineGithub></AiOutlineGithub>GitHubb
              </Text>
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jm-sohel-rana-4138bb229/"
              rel="noreferrer"
            >
              <Text display={'flex'}>
                <AiFillLinkedin></AiFillLinkedin>LinkedIn
              </Text>
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

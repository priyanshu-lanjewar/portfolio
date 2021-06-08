
import './App.css';
import React, { } from 'react';
import { IconButton } from '@chakra-ui/button';
import { Flex, Heading, Spacer, VStack } from '@chakra-ui/layout';
import {FaSun, FaMoon,FaGithub,FaTelegramPlane,FaWhatsapp,} from 'react-icons/fa';
import { useColorMode } from '@chakra-ui/color-mode';
import Programing from './components/Programing';
import Header from './components/Header';
import Stacks from './components/Stacks';
import {
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";


  return (
    
   <VStack p={5}>
     <Flex w="100%">
      <Heading ml = "0" mt="2"
      size="md"
      fontWeight="semibold"
      color="cyan.400">
        priyanshu-lanjewar
      </Heading>
     <Spacer/>
     &nbsp;<IconButton icon={<FaGithub/>} isRound = "true" onClick={()=> window.open("https://github.com/priyanshu-lanjewar")}/>
     &nbsp;<IconButton icon={<FaTelegramPlane/>} isRound = "true" onClick={()=> window.open("https://t.me/mr_weird_2")}/>
     &nbsp;<IconButton icon={<FaWhatsapp/>} isRound = "true" onClick={()=> window.open("https://chatwith.io/s/himanshu")}/>
     &nbsp;<IconButton icon={isDark ? <FaSun/>: <FaMoon/>} isRound = "true" onClick={toggleColorMode} />
     </Flex>
     <Header id="aa"></Header>
     <Stacks></Stacks>
     <Programing></Programing>
     <Box mt="25px"p="5px"
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')} >
     
        <Text>© 2021 Priyanshu Lanjewar</Text>
      
    </Box>
   </VStack>
     
  );
}

export default App;

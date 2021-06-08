import { Button , IconButton} from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Stack ,Flex,Box,Text} from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import {init } from 'ityped'
import React,{ useEffect, useRef } from 'react';
import Typewriter from "typewriter-effect";
import {} from '@chakra-ui/icon';
import { Avatar } from '@chakra-ui/react';
import {FaInstagram, FaGithub,FaLinkedin,FaFacebookF, FaEnvelope} from 'react-icons/fa';


function Header(){
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
   const textRef = useRef();
    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            strings:["n Engineer....."," Programmer.....","n Android Develover....."," React Developer....."],
        });
    },[]);
   
    return(
        <Stack align="center">
            <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={10}
            spacing="200px" p={isNotSmallerScreen ? "32" : "0"} bg={isNotSmallerScreen ? isDark ? "gray.700" : "gray.100" :""} borderRadius="10px"
            alignSelf="flex-start">

                <Box   mt={isNotSmallerScreen ?"0":16} align={!isNotSmallerScreen ?"center":"flex-start"}>
                <Image  alt="Waving Hi Text" width="90" height="90" src="https://hdsmileys.com/wp-content/uploads/2017/11/dabbing.gif"/>
                    <Text align={!isNotSmallerScreen ?"center":"left"} fontSize="5xl" fontWeight="semibold">Hello, I'm</Text>

                    
                    <Text height={!isNotSmallerScreen ?"220px":""} align={!isNotSmallerScreen ?"center":"left"} width={isNotSmallerScreen ?"720px":"400px"} fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' > <Typewriter 
                    onInit={(typewriter)=> {
                                typewriter
                                .typeString("Priyanshu Lanjewar")
                                 .start();
                             }}
                    /></Text>
                     <Text ml= "1px" height={!isNotSmallerScreen ?"24":"12"}><Typewriter 
                    onInit={(typewriter)=> {
                                typewriter
                                .typeString("Computer Science Student @ Institute of Technical Education and Research.<br>Programing Enthusiast but Theories of Computer fasinates me more.")
                                 .start();
                             }}
                    /></Text>
                    <hr></hr>
                    <Text ml= "1px" align={!isNotSmallerScreen ?"center":"left"} color={isDark ? 'gray.200' : 'gray.500'} fontSize="2xl" fontWeight="semibold" > I am a<span ref={textRef}></span></Text>
                   
                    <Button mt={4} colorScheme="blue" onClick={()=>{    alert("Field you are requesting is not yet updated. Please Contact on Contact details provided!")}}>Download Resume</Button> 
                    <Button ml={5} mt={4} colorScheme="blue" onClick={()=>{alert("Field you are requesting is not yet updated. Please Contact on Contact details provided!")}}>See my Projects</Button>

                </Box>
                <Flex mt={isNotSmallerScreen ? "8": "220px"} alignSelf={isNotSmallerScreen ? "" : "center"} rounded="xl" direction="column"  bg={isDark ? 'blue.200' : "blue.900"} h="45vh" w="30vh" justify="flex-end">
                <Avatar name="Priyanshu Lanjewar" padding="5" alignSelf="center" mt="12"
                mb={isNotSmallerScreen ? "0" : "0"} borderRadius='full'
                backgroundColor="transparent" boxShadow="lg"
                size="1xl" src="https://avatars.githubusercontent.com/u/61533257?s=400&u=fca07199754c102d5b680fab5bf14595bcf3b5ab&v=4"/>
                <Text mt="10px" mr="10px" color={isDark ? 'black' : 'white'} alignSelf="center"  onClick={()=> window.open("https://github.com/priyanshu-lanjewar")}>@priyanshu-lanjewar</Text>
                <Text mr="10px" color={isDark ? 'black' : 'white'} alignSelf="center">📍 Maharashtra,India</Text>
                <Flex mb="10px" padding="5px" alignSelf={isNotSmallerScreen ? "" : "center"} rounded="xl" direction="row" mt={4} bg={isDark ? 'blue.200' : 'blue.900'} h="30vh" w="30vh" justify="center">
                &nbsp;<IconButton  bg={isDark ?"blue.900":"white"} icon={<FaGithub/>} isRound = "true" onClick={()=> window.open("https://github.com/priyanshu-lanjewar")}/>
                &nbsp;<IconButton  bg={isDark ?"blue.900":"white"} icon={<FaLinkedin/>} isRound = "true" onClick={()=> window.open("https://www.linkedin.com/in/priyanshu-lanjewar-2092a51b1")}/>
                &nbsp;<IconButton  bg={isDark ?"blue.900":"white"} icon={<FaEnvelope/>} isRound = "true" onClick={()=> window.open("mailto:priyanshu.lanjewar@yahoo.com")}/>
                &nbsp;<IconButton  bg={isDark ?"blue.900":"white"} icon={<FaFacebookF/>} isRound = "true" onClick={()=> window.open("https://www.facebook.com/pwl22")}/>
                &nbsp;<IconButton  bg={isDark ?"blue.900":"white"} icon={<FaInstagram/>} isRound = "true" onClick={()=> window.open("https://instagram.com/_.dugggu._")}/>
                </Flex>
        </Flex>
        </Flex>
        </Stack>
    )
}

export default Header;
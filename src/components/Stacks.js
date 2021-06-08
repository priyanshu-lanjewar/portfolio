import React from 'react'
import { Flex,Box,Text} from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import Icon from '@chakra-ui/icon'; 
import {DiAndroid, DiReact,DiDatabase, DiCloud9} from 'react-icons/di'
import {BsClipboardData } from 'react-icons/bs'
import { useColorMode } from '@chakra-ui/color-mode';



function Stacks(){
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return(
        <Flex align="center" direction="column"  overflow="hidden" w="100%">
            <Flex align="center" direction="column" mt="100px">
            <Text color={isDark ? "cyan" : "blue"} mt={32} fontSize="2xl" fontWeight="semibold">
                   Technologies I'm familiar with ...
            </Text>
            </Flex>
        
            <Box alignSelf="center" px={isNotSmallerScreen ?"0":"32"} >
                
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}  overflow="hidden" w="100%" >
                <Box alignSelf="center">
                    <Flex direction="row">
                    <Flex rounded="xl" direction="column" mt={4} bg="cyan.400" _hover={{bg:"gray.500"}} h="22vh" w="19vh"  overflow="hidden">
                        <Icon color="white" p="4" as={DiAndroid} w="24" h="24"/> 
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Android App Development
                        </Text>

                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} bg="cyan.800" _hover={{bg:"gray.500"}} h="22vh" w="19vh" ml="4"  overflow="hidden" >
                        <Icon color="white" p="4" as={DiReact} w="24" h="24"/> 
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            React Native Development
                        </Text>

                    </Flex></Flex></Box>
                    <Box alignSelf="center" >
                    <Flex direction="row">
                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" _hover={{bg:"gray.500"}} h="22vh" w="19vh" ml={isNotSmallerScreen?"4":"0"}  overflow="hidden">
                        <Icon color="white" p="4" as={BsClipboardData} w="24" h="24"/> 
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Data<br/>Science
                        </Text>

                    </Flex><Flex rounded="xl" direction="column" mt={4} bg="blue.800" _hover={{bg:"gray.500"}} h="22vh" w="19vh" ml="4"  overflow="hidden">
                        <Icon color="white" p="4" as={DiDatabase} w="24" h="24"/> 
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Database Management
                        </Text>

                    </Flex></Flex></Box>
                    <Box alignSelf="center" >
                    <Flex direction="row">
                    <Flex rounded="xl" direction="column" mt={4} bg="purple.400" _hover={{bg:"gray.500"}} h="22vh" w="19vh" ml={isNotSmallerScreen?"4":"0"}  overflow="hidden">
                        <Icon color="white" p="4" as={DiCloud9} w="24" h="24"/> 
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Basic Cloud Computing
                        </Text>

                    </Flex><Flex rounded="xl" direction="column" mt={4} bg="purple.800" _hover={{bg:"gray.500"}} h="22vh" w="19vh" ml="4"   overflow="hidden">
                        <Icon color="white" p="4" as={DiAndroid} w="24" h="24"/> 
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Exploring More.....
                        </Text>

                    </Flex></Flex></Box>
                    
                    

                </Flex>

            </Box>

        </Flex>
        
    )
}

export default Stacks;
import React from 'react';
import { Heading,Flex,Box} from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Tooltip } from '@chakra-ui/tooltip';



function Programing(){
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return(
        <Flex align="center" mb="20px" direction="column" mt={isNotSmallerScreen ? "32":"5"} overflow="hidden" w='100%'>
            <Flex align="center" direction="column" mt="50px"  w="100%" overflow="hidden" maxWidth={{base:"100vh",md:"130vh",lg:"130vh", xl:"130vh"}}>
                <Heading color={isDark ? "cyan" : "blue"}  fontSize="5xl" fontWeight="bold">
                My Skills
                </Heading>
            </Flex>
            
          <Box align="center" borderWidth="3px" p="4" borderRadius="20" mt="10" borderColor="teal">
          <Heading color={isDark ? "yellow.300" : "yellow.700"}  fontSize="2xl" fontWeight="bold">
                Programming Languages
                </Heading>
            <Box  px={isNotSmallerScreen ?"0":"0"} >
                <Flex  direction={isNotSmallerScreen ? "row" : "column"} mt={2}  overflow="hidden" w="100%" >
                    <Box align="center">
                        <Flex direction="row">
                            <Flex rounded="xl" alignItems="center" mt={4} bg="cyan.400" _hover={{bg:"gray.500"}} h="10vh" w="10vh"  overflow="hidden">
                                <Image src="../programmingcons/c.svg" color="white" p="4" w="24" h="24"/>
                            </Flex>
                            <Flex rounded="xl" alignItems="center" mt={4} bg="cyan.400" _hover={{bg:"gray.500"}} h="10vh" w="10vh" ml="4"  overflow="hidden" >
                                <Image src="../programmingcons/cplusplus.svg" color="white" p="4" w="24" h="24"/>
                            </Flex>
                            <Flex rounded="xl" alignItems="center" mt={4} bg="cyan.400" _hover={{bg:"gray.500"}} h="10vh" w="10vh" ml="4"  overflow="hidden" >
                                <Image src="../programmingcons/csharp.svg" color="white" p="4" w="24" h="24"/>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box alignf="center">
                        <Flex direction="row">
                            <Flex rounded="xl" alignItems="center" mt={4} bg="cyan.400" _hover={{bg:"gray.500"}} h="10vh" w="10vh" ml={isNotSmallerScreen ? "4" : "0"}  overflow="hidden">
                                <Image src="../programmingcons/java.svg" color="white" p="4" w="24" h="24"/>
                            </Flex>
                            <Flex rounded="xl" alignItems="center" mt={4} bg="cyan.400" _hover={{bg:"gray.500"}} h="10vh" w="10vh" ml="4"  overflow="hidden" >
                                <Image src="../programmingcons/kotlin.svg" color="white" p="4" w="24" h="24"/>
                            </Flex>
                            <Flex rounded="xl" alignItems="center" mt={4} bg="cyan.400" _hover={{bg:"gray.500"}} h="10vh" w="10vh" ml="4"  overflow="hidden" >
                                <Image src="../programmingcons/r.svg" color="white" p="4" w="24" h="24"/>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box align="center">
                        <Flex direction="row">
                            <Flex rounded="xl" alignItems="center" mt={4} bg="cyan.400" _hover={{bg:"gray.500"}} h="10vh" w="10vh" ml={isNotSmallerScreen ? "4" : "0"}  overflow="hidden">
                                <Image src="../programmingcons/html.svg" color="white" p="4" w="24" h="24"/>
                            </Flex>
                            <Flex rounded="xl" alignItems="center" mt={4} bg="cyan.400" _hover={{bg:"gray.500"}} h="10vh" w="10vh" ml="4"  overflow="hidden" >
                                <Image src="../programmingcons/css.svg" color="white" p="4" w="24" h="24"/>
                            </Flex>
                            <Flex rounded="xl" alignItems="center" mt={4} bg="cyan.400" _hover={{bg:"gray.500"}} h="10vh" w="10vh" ml="4"  overflow="hidden" >
                                <Image src="../programmingcons/javascript.svg" color="white" p="4" w="24" h="24"/>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box alignSelf="center">
                        <Flex direction="row">
                            <Flex rounded="xl" alignItems="center" mt={4} bg="cyan.400" _hover={{bg:"gray.500"}} h="10vh" w="10vh" ml={isNotSmallerScreen ? "4" : "0"}  overflow="hidden">
                                <Image src="../programmingcons/php.svg" color="white" p="4" w="24" h="24"/>
                            </Flex>
                        </Flex>
                    </Box>
                    
                </Flex>
            </Box>
            </Box>
            <Flex mt={5} direction={isNotSmallerScreen ?"row":"column"}>
            <Box p="10px" align="center" borderWidth="3px" borderRadius="20"  borderColor="teal">
                    <Flex direction="column">
                    <Heading  color={isDark ? "yellow.300" : "yellow.700"}  fontSize="2xl" fontWeight="bold">
                Databases
                </Heading>
                    <Flex direction="row">
                            <Tooltip label="My SQL" bg="green" color="white" borderRadius="10px"><Flex rounded="xl" alignItems="center" mt={4} bg={isDark ? "gray.700" : "gray.200"} _hover={{bg:"gray.500"}} h="10vh" w="10vh"  overflow="hidden" onClick={()=> window.open("https://www.mysql.com/")}>
                              <Image src="../programmingcons/mysql.svg" color="white" p="4" w="24" h="24"/>
                            </Flex></Tooltip>
                            <Tooltip label="Firebase Firestore" bg="green" color="white" borderRadius="10px"><Flex rounded="xl" alignItems="center" mt={4} bg={isDark ? "gray.700" : "gray.200"} _hover={{bg:"gray.500"}} h="10vh" w="10vh" ml="4"  overflow="hidden" onClick={()=> window.open("https://firebase.google.com/docs/firestore")}>
                                <Image src="../programmingcons/fstore.svg" color="white" p="4" w="24" h="24"/>
                            </Flex></Tooltip>
                            <Tooltip label="Firebase Realtime Database" bg="green" color="white" borderRadius="10px"><Flex  rounded="xl" alignItems="center" mt={4} bg={isDark ? "gray.700" : "gray.200"} _hover={{bg:"gray.500"} } h="10vh" w="10vh" ml="4"  overflow="hidden" onClick={()=> window.open("https://firebase.google.com/docs/database/")} >
                                <Image  src="../programmingcons/fdbms.svg" color="white" p="4" w="24" h="24"/>
                            </Flex></Tooltip>
                        </Flex>
                        </Flex>
                </Box>
                <Box p="10px" align="center" ml={isNotSmallerScreen ? "15px" : "0px"} mt={isNotSmallerScreen ? "0px" : "20px"} borderWidth="3px" borderRadius="20" borderColor="teal">
                    <Flex direction="column">
                    <Heading  color={isDark ? "yellow.300" : "yellow.700"}  fontSize="2xl" fontWeight="bold">
                Frameworks
                </Heading>
                    <Flex direction="row">
                    <Tooltip label="Manjarisoft Aneka" bg="green" color="white" borderRadius="10px" >
                            <Flex rounded="xl" alignItems="center" mt={4} bg={isDark ? "gray.700" : "gray.200"} _hover={{bg:"gray.500"}} h="10vh" w="10vh"  overflow="hidden">
                                <Image src="../programmingcons/aneka.svg" color="white" p="4" w="24" h="24"/>
                            </Flex></Tooltip>
                            <Tooltip label="React" bg="green" color="white" borderRadius="10px" >
                            <Flex rounded="xl" alignItems="center" mt={4} bg={isDark ? "gray.700" : "gray.200"} _hover={{bg:"gray.500"}} h="10vh" w="10vh" ml="4"  overflow="hidden" >
                                <Image src="../programmingcons/logo.svg" color="white" p="4" w="24" h="24"/>
                            </Flex></Tooltip>
                            <Tooltip label="Chakra UI" bg="green" color="white" borderRadius="10px" >
                            <Flex rounded="xl" alignItems="center" mt={4} bg={isDark ? "gray.700" : "gray.200"} _hover={{bg:"gray.500"}} h="10vh" w="10vh" ml="4"  overflow="hidden" >
                                <Image src="../programmingcons/chakra.svg" color="white" p="4" w="24" h="24"/>
                            </Flex></Tooltip>
                        </Flex>
                        </Flex>
                </Box>
                <Box p="10px" align="center" ml={isNotSmallerScreen ? "15px" : "0px"} mt={isNotSmallerScreen ? "0px" : "20px"} borderWidth="3px" borderRadius="20" borderColor="teal">
                    <Flex direction="column">
                    <Heading  color={isDark ? "yellow.300" : "yellow.700"}  fontSize="2xl" fontWeight="bold">
                IDE's / Editors
                </Heading>
                    <Flex direction="row">
                    <Tooltip label="Android Studio" bg="green" color="white" borderRadius="10px" >
                            <Flex rounded="xl" alignItems="center" mt={4} bg={isDark ? "gray.700" : "gray.200"} _hover={{bg:"gray.500"}} h="10vh" w="10vh"  overflow="hidden">
                                <Image src="../programmingcons/androidStudio.svg" color="white" p="4" w="24" h="24"/>
                            </Flex></Tooltip>
                            <Tooltip label="Sublime TextEditor" bg="green" color="white" borderRadius="10px" >
                            <Flex rounded="xl" alignItems="center" mt={4} bg={isDark ? "gray.700" : "gray.200"} _hover={{bg:"gray.500"}} h="10vh" w="10vh" ml="4"  overflow="hidden" >
                                <Image src="../programmingcons/sublime.svg" color="white" p="4" w="24" h="24"/>
                            </Flex></Tooltip>
                            <Tooltip label="Visual Studio Code" bg="green" color="white" borderRadius="10px" >
                            <Flex rounded="xl" alignItems="center" mt={4} bg={isDark ? "gray.700" : "gray.200"} _hover={{bg:"gray.500"}} h="10vh" w="10vh" ml="4"  overflow="hidden" >
                                <Image src="../programmingcons/vs.svg" color="white" p="4" w="24" h="24"/>
                            </Flex></Tooltip>
                        </Flex>
                        </Flex>
                </Box>

            </Flex>
            
        </Flex>
        

    )
}

export default Programing;
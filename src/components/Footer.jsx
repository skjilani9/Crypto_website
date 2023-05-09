import React from 'react'
import { VStack, Box, Stack, Text, Avatar } from "@chakra-ui/react"
import src from '../assets/4B5.jpeg'

const Footer = () => {
    return (
        <Box bgColor={"blackAlpha.900"}
            color={"whiteAlpha.700"}
            minH={"48"}
            px={"16"}
            py={["16", "8"]}>
                
            <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
                <VStack w={"full"} alignItems={["center", "flex-start"]}>
                    <Text fontWeight={"bold"}>About Us</Text>
                    <Text
                        fontSize={"sm"}
                        letterSpacing={"widest"}
                        textAlign={["center", "left"]}
                    >
                        We are the best crypto trading app and we provide our guidance
                        at a very cheap price.!Enjoy the app
                    </Text>
                </VStack>
                <VStack>
                    <Avatar boxSize={"28"} mt={["4", "0"]} src={src} />
                    <Text>Our Founder</Text>
                    <a href="https://wa.me/918309857097" target={"blank"}>What's app</a>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer

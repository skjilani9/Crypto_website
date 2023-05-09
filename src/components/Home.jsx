import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} >
            <motion.div style={{ height: "80vh" }} animate={{ translateY: "20px" }} transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
            }}>
                <Image
                    w={"full"}
                    h={"full"}
                    objectFit={"contain"}
                    src={"https://www.freepnglogos.com/uploads/bitcoin-png/bitcoinpaygate-bitcoin-payment-gateway-payment-processor-7.png"}
                    filter={"grayscale(0.5)"}
                />
            </motion.div>
            <Text
                fontSize={"6xl"}
                textAlign={"center"}
                fontWeight={"thin"}
                color={"whiteAlpha.700"}
                mt={"-20"}
            >
                crypto market
            </Text>
        </Box>
    )
}

export default Home

import React, { useEffect, useState } from 'react'
import Loader from "./Loader"
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import axios from 'axios'
import { server } from '../index'
import Coincard from './Coincard';
import Error from './Error';



const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState("inr");

    const currencySymbol =
        currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

        
    const changepage = (page) => {
        setPage(page);
        setLoading(true);
    };

    const btn = new Array(100).fill(1);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
                setCoins(data)
                setLoading(false)
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }

        fetchdata()

    }, [currency, page])

    if(error){
        return <Error message={"Error while fetching the coin"} />
    }

    return (
        <Container maxW={"container.xl"}>
            {loading ? (<Loader />) : (
                <>
                    <RadioGroup value={currency} onChange={setCurrency} p="8">
                        <HStack spacing="4">
                            <Radio value='inr'>₹ INR</Radio>
                            <Radio value='usd'>$ USD</Radio>
                            <Radio value='eur'>€ EUR</Radio>
                        </HStack>
                    </RadioGroup>

                    <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                        {coins.map((i) => (
                            <Coincard
                                id={i.id}
                                key={i.id}
                                name={i.name}
                                price={i.current_price}
                                img={i.image}
                                symbol={i.symbol}
                                currencySymbol={currencySymbol}
                            />
                        ))}
                    </HStack>
                    <HStack w={"full"} overflowX={"auto"} p={"8"}>
                        {btn.map((item, index) => (
                            <Button
                                key={index}
                                bgColor={"blackAlpha.900"}
                                color={"orangered"}
                                onClick={() => changepage(index + 1)}
                            >
                                {index + 1}
                            </Button>
                        ))}
                    </HStack>
                </>
            )}
        </Container>
    )
}

export default Coins

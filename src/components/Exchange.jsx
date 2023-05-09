import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import { server } from '../index'
import Error from './Error'
import axios from 'axios'
import {
    Container,
    HStack,
    Button
} from "@chakra-ui/react";
import Exchangecard from './Exchangecard'

const Exchange = () => {

    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges?page=${page}`)
                setExchanges(data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(true)
            }
        }
        fetchdata();
    }, [page])

    if (error) {
        return <Error message={"Error while fetching Exchange coins"} />
    }

    const changepage = (page) => {
        setPage(page);
        setLoading(true);
    };

    const btn = new Array(100).fill(1);


    return (
        <Container maxW={"container.xl"}>
            {loading ? (<Loader />) : (
                <>
                    <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                        {exchanges.map((i) => (
                            <Exchangecard
                                key={i.id}
                                name={i.name}
                                img={i.image}
                                rank={i.trust_score_rank}
                                url={i.url}
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

export default Exchange

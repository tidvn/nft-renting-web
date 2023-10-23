import {
    Box,
    Collapse,
    Flex,
    IconButton,
    Image,
    Link,
    Popover,
    PopoverTrigger,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';

import { Grid, GridItem } from '@chakra-ui/react'

import Item from './item';
import { Item2 } from './item';


export default function Marketplace() {
    return (
        <>
            {/* <Box width={1248} mt={30}> */}
            <Stack>
                <Text fontSize={30} fontWeight={"bold"}>Rent a NFT!</Text>
                <Grid mt={10} templateColumns='repeat(5, 1fr)' gap={4}>
                    <GridItem  >
                        <Item2 price={1000} />
                    </GridItem>
                    <GridItem  >
                        <Item2 price={1000} />
                    </GridItem>
                    <GridItem  >
                        <Item2 price={1000} />
                    </GridItem>
                    <GridItem  >
                        <Item2 price={1000} />
                    </GridItem>
                    <GridItem  >
                        <Item2 price={1000} />
                    </GridItem>
                    <GridItem   >
                        <Item2 price={1000} />
                    </GridItem>
                    <GridItem >
                        <Item2 price={1000} />
                    </GridItem>
                    <GridItem  >
                        <Item2 price={1000} />
                    </GridItem>
                    <GridItem  >
                        <Item2 price={1000} />
                    </GridItem>
                </Grid>
            </Stack>
            {/* </Box> */}
        </>
    );
}

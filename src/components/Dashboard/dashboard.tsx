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

import Item from '../Marketplace/item';



export default function DashboardComponent() {
    return (
        <>
            {/* <Box width={1248} mt={30}> */}
            <Stack>
                <Text fontSize={30} fontWeight={"bold"}>Your NFT</Text>
                <Grid mt={10} templateColumns='repeat(5, 1fr)' gap={4}>
                    <GridItem  >
                        <Item></Item>
                    </GridItem>
                    <GridItem  >
                        <Item></Item>
                    </GridItem>
                    <GridItem  >
                        <Item></Item>
                    </GridItem>
                    <GridItem  >
                        <Item></Item>
                    </GridItem>
                    <GridItem  >
                        <Item></Item>
                    </GridItem>
                    <GridItem   >
                        <Item></Item>
                    </GridItem>
                    <GridItem >
                        <Item></Item>
                    </GridItem>
                    <GridItem  >
                        <Item></Item>
                    </GridItem>
                    <GridItem  >
                        <Item></Item>
                    </GridItem>
                </Grid>
            </Stack>


            <Stack>
                <Text fontSize={30} fontWeight={"bold"}>Rented</Text>
                <Grid mt={10} templateColumns='repeat(5, 1fr)' gap={4}>
                    <GridItem  >
                        <Item></Item>
                    </GridItem>
                    <GridItem  >
                        <Item></Item>
                    </GridItem>
                    <GridItem  >
                        <Item></Item>
                    </GridItem>
                </Grid>
            </Stack>



            <Stack>
                <Text fontSize={30} fontWeight={"bold"}>Leased</Text>
                <Grid mt={10} templateColumns='repeat(5, 1fr)' gap={4}>
                    <GridItem  >
                        <Item></Item>
                    </GridItem>
                    <GridItem  >
                        <Item></Item>
                    </GridItem>
                </Grid>
            </Stack>
            {/* </Box> */}
        </>
    );
}

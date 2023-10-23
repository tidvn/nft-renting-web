
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Grid,
    GridItem,
    Flex,
    Button,
    List,
    UnorderedList,
    ListItem
} from '@chakra-ui/react'

const IMAGE =
    'https://lh3.googleusercontent.com/Co4UTaW4JG3IQcXFjtzRScrBrxKPq6vDxmM8COLJ-NB-GOmc0HPkJMgX4-QfezWvGHPo4AgSBeicqLh5msCdCi9qMkDcKu8wyG5jtA=w600'

// image_url: string, price: number

export default function NFTDetails() {
    return (
        <>
            <Stack>

                <Grid
                    h='800px'
                    templateRows='repeat(3, 1fr)'
                    templateColumns='2fr 1fr 1fr'
                    gap={4}
                    mt={30}
                    mb={30}
                >
                    <GridItem rowSpan={3} colSpan={1} bg='tomato'>
                        <Image
                            rounded={'lg'}
                            height={"100%"}
                            width={"100%"}
                            src={IMAGE}
                            alt="#"
                        />
                    </GridItem>
                    <GridItem colSpan={2} bg='' >

                        <Text fontSize={16} fontWeight={500}>
                            The Walking Ape
                        </Text>

                        <Text fontSize={30} fontWeight={500}>
                            The Walking Ape #999
                        </Text>

                        <Box w='100%' h="80%" mt={5} p={4} color='black' borderWidth='4px' borderRadius='lg'>
                            Current Price
                            <Text fontSize={35}> 10000 CMST</Text>

                            <Center mt={4}>
                                <Flex alignItems={"center"} gap={"5%"} >
                                    <Button colorScheme='teal' w="100%">
                                        Rent Now
                                    </Button>
                                    <Button colorScheme='teal' w="100%">
                                        Make Offer
                                    </Button>
                                </Flex>
                            </Center>

                        </Box>
                    </GridItem>


                    <GridItem colSpan={2} mt={2} >
                        <Box w='100%' h="100%" mt={5} p={4} color='black' borderWidth='4px' borderRadius='lg'>
                            Traits
                            <UnorderedList>
                                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                                <ListItem>Consectetur adipiscing elit</ListItem>
                                <ListItem>Integer molestie lorem at massa</ListItem>
                                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                            </UnorderedList>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={2} bg='' >
                        <Box w='100%' h="100%" mt={5} p={4} color='black' borderWidth='4px' borderRadius='lg'>
                            Price History
                            <UnorderedList>
                                {/* <ListItem>Lorem ipsum dolor sit amet</ListItem>
                                <ListItem>Consectetur adipiscing elit</ListItem>
                                <ListItem>Integer molestie lorem at massa</ListItem>
                                <ListItem>Facilisis in pretium nisl aliquet</ListItem> */}
                            </UnorderedList>
                        </Box>
                    </GridItem>
                </Grid >
            </Stack >
        </>


    )
}
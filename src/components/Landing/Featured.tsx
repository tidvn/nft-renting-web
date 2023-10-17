import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, chakra, Text, Stack, Flex, Heading, Button } from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'
import NFTCard from './NFTCard'

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function Featured() {
  return (
    <Box p={4}>
      <Stack spacing={0} align={'left'}>

        <chakra.h3
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          fontSize={20}
          textTransform={'uppercase'}
        >
          FEATURED
        </chakra.h3>
        <chakra.h1
          fontWeight={'bold'}
          fontSize={40}
          textTransform={'uppercase'}>New Listings</chakra.h1>
        <Text>Let’s find a collectible that is perfect for you.</Text>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
      </SimpleGrid>
      <Stack
        direction={'column'}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}>
        <Button
          colorScheme={'green'}
          bg={'green.400'}
          rounded={'full'}
          px={6}
          _hover={{
            bg: 'green.500',
          }}>
          Explore More
        </Button>


      </Stack>
    </Box>
  )
}
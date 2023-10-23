import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import Avatar from 'boring-avatars';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { StargateClient } from "@cosmjs/stargate"

import { useSigningClient } from '../../contexts/client';



interface UserInfoProps {
  isMobile?: boolean;
}

export default function UserInfo({ children, isMobile }: { children: ReactNode, isMobile: UserInfoProps }) {

  let client: StargateClient;

  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [initialStep, setInitialStep] = useState<number>(1);
  const [isLessthan768] = useMediaQuery('(max-width: 768px)');
  const [balance, setBalance] = useState(0);

  const {
    walletAddress,
    loading: clientLoading,
    error,
    connectWallet,
    disconnect,
  } = useSigningClient()

  const displayValue = isMobile
    ? { base: 'block', md: 'none' }
    : { base: 'none', md: 'block' };

  async function setClient() {
    // client = await StargateClient.connect(process.env.NEXT_PUBLIC_CHAIN_RPC_ENDPOINT as string)
  }

  async function queryBalance() {
    if (walletAddress != "" && client != null) {
      const data = await client.getAllBalances(walletAddress);
      console.log(walletAddress)
      setBalance(data[1]["amount"] as unknown as number / 1000000)
    }
  }
  useEffect(() => {
    setClient();
  })

  useEffect(() => {
    const interval = setInterval(() => {
      queryBalance();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Menu>
        <MenuButton
          display={isMobile ? 'none' : 'flex'}
          minW={0}
          cursor={'pointer'}
          rounded={'full'}
          onClick={connectWallet}
        >
          <Flex align="center">

            <Box display={displayValue} ml={2} mr={5}>
              <Text color="brand.slate.800" fontSize="sm">
                {balance} CMST
              </Text>
            </Box>


            <Avatar
              name={`tidvn`}
              colors={['#92A1C6', '#F0AB3D', '#C271B4']}
              size={32}
              variant="marble"
            />

            <Box display={displayValue} ml={2}>

              <Text color="brand.slate.800" fontSize="sm">
                {walletAddress == "" ? "Connect Wallet" : walletAddress}
              </Text>
            </Box>


          </Flex>
        </MenuButton>
        <MenuList display={walletAddress == "" ? "none" : ""}>

          {/* <MenuItem
                color="brand.slate.500"
                fontSize="sm"
                fontWeight={600}
                onClick={() => {
                  router.push(`/`);
                }}
              >
                Profile
              </MenuItem>


              <MenuItem
                color="brand.slate.500"
                fontSize="sm"
                fontWeight={600}
                onClick={() => {
                  router.push(`/`);
                }}
              >
                Edit Profile
              </MenuItem>



              <MenuItem
                color="brand.slate.500"
                fontSize="sm"
                fontWeight={600}
                onClick={() => {
                  router.push('/dashboard/bounties');
                }}
              >
                Sponsor Dashboard
              </MenuItem>


              <MenuDivider />
              <MenuGroup
                ml={3}
                color="brand.slate.700"
                fontSize="xs"
                fontWeight={700}
                title="God Mode"
              >
                <MenuItem
                  color="brand.slate.500"
                  fontSize="sm"
                  fontWeight={600}
                  onClick={() => {
                    router.push('/new/sponsor');
                  }}
                >
                  Create New Sponsor
                </MenuItem>
              </MenuGroup> */}

          {/* <MenuDivider /> */}
          <MenuItem
            color="red.500"
            fontSize="sm"
            fontWeight={600}
            onClick={disconnect}
          >
            Logout

          </MenuItem>

        </MenuList>
      </Menu>
    </>
  );
}
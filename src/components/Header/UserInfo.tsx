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
  import { useEffect, useState } from 'react';
  

  
  interface UserInfoProps {
    isMobile?: boolean;
  }
  
  export default function UserInfo({ isMobile }: UserInfoProps) {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [initialStep, setInitialStep] = useState<number>(1);
    const [isLessthan768] = useMediaQuery('(max-width: 768px)');
  

  

  

  
    const displayValue = isMobile
      ? { base: 'block', md: 'none' }
      : { base: 'none', md: 'block' };
  
    return (
      <>
        
        {true ? (
          <>
            
              {/* <Button
                display={displayValue}
                fontSize="xs"
                onClick={() => {
                  setInitialStep(2);
                  onOpen();
                }}
                size="sm"
                variant={{ base: 'solid', md: 'ghost' }}
              >
                Verify your Email
              </Button> */}
            
            
                {/* <Button
                  display={displayValue}
                  fontSize="xs"
                  onClick={() => {
                    router.push('/new');
                  }}
                  size="sm"
                  variant={{ base: 'solid', md: 'ghost' }}
                >
                  Complete your Profile
                </Button> */}
              
            <Menu>
              <MenuButton
                display={isMobile ? 'none' : 'flex'}
                minW={0}
                cursor={'pointer'}
                rounded={'full'}
              >
                <Flex align="center">
                  
                    <Avatar
                      name={`tidvn`}
                      colors={['#92A1C6', '#F0AB3D', '#C271B4']}
                      size={32}
                      variant="marble"
                    />
                  
                  <Box display={displayValue} ml={2}>
                    
                      <Text color="brand.slate.800" fontSize="sm">
                        New User
                      </Text>
                    
                   
                    
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList>
                
                  <MenuItem
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
                    </MenuGroup>
                 
                <MenuDivider />
                <MenuItem
                  color="red.500"
                  fontSize="sm"
                  fontWeight={600}
                  
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </>
        ) : (
          <>
            <HStack flexDir={{ base: 'column', md: 'row' }} gap={2}>
              <HStack gap={0} w={{ base: '100%', md: 'auto' }}>
                <Button
                  display={isMobile ? 'none' : { base: 'none', md: 'block' }}
                  fontSize="xs"
                  onClick={() => {
                    router.push('/sponsor');
                  }}
                  size="sm"
                  variant={{ base: 'solid', md: 'ghost' }}
                >
                  Create A Bounty
                </Button>
                <Button
                  display={displayValue}
                  w={{ base: '100%', md: 'auto' }}
                  fontSize="xs"
                  onClick={() => {
                    onOpen();
                  }}
                  size="sm"
                  variant={{ base: 'solid', md: 'ghost' }}
                >
                  Login
                </Button>
              </HStack>
              <Button
                display={displayValue}
                w={{ base: '100%' }}
                px={4}
                fontSize="xs"
                onClick={() => {
                  onOpen();
                }}
                size="sm"
                variant="solid"
              >
                Sign Up
              </Button>
            </HStack>
          </>
        )}
      </>
    );
  }
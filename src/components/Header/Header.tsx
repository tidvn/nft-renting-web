import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Image,
  Popover,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  // Link,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link'

import UserInfo from './UserInfo';
import { Url } from 'next/dist/shared/lib/router/router';

interface NavItem {
  label: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [

  {
    label: 'All Opportunities',
    href: '/',
  },
  {
    label: 'Marketplace',
    href: '/marketplace',
  },
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
  // {
  //   label: 'Content',
  //   href: '/content/',
  // },
  // {
  //   label: 'Frontend',
  //   href: '/all/Frontend/',
  // },
  // {
  //   label: 'Backend',
  //   href: '/all/Backend/',
  // },
  // {
  //   label: 'Blockchain',
  //   href: '/all/Blockchain/',
  // },
  // {
  //   label: 'HYPERDRIVE',
  //   href: '/all/Hyperdrive/',
  // },
]

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack onClick={children && onToggle} spacing={4}>
      <Flex
        as={Link}
        align={'center'}
        justify={'space-between'}
        py={2}
        _hover={{
          textDecoration: 'none',
        }}
        href={href ?? '#'}
      >
        <Text color={'brand.slate.500'} fontSize="sm" fontWeight={400}>
          {label}
        </Text>
        {children && (
          <ChevronDownIcon
            w={6}
            h={6}
            color={'brand.slate.500'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            transition={'all .25s ease-in-out'}
          />
        )}
      </Flex>

      <Collapse animateOpacity in={isOpen} style={{ marginTop: '0!important' }}>
        <Stack
          align={'start'}
          mt={2}
          pl={4}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          borderLeft={1}
        >
          {children &&
            children.map((child) => (

              <Box
                key={child.label}
                mt={0}
                py={1}
                color={'brand.slate.800'}
                fontSize="sm"

              >
                <Link href={child.href as Url}>
                  {child.label}
                </Link>
              </Box>

            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const MobileNav = () => (
  <Stack
    display={{ md: 'none' }}
    p={4}
    bg={'white'}
    borderBottom={'1px solid'}
    borderBottomColor={'blackAlpha.200'}
  >
    {NAV_ITEMS.map((navItem) => (
      <MobileNavItem key={navItem.label} {...navItem} />
    ))}
  </Stack>
);

const DesktopNav = () => {
  const router = useRouter();

  return (
    <Stack direction={'row'} h="full" spacing={8}>
      {NAV_ITEMS.map((navItem) => {
        const isCurrent = `${navItem.href}` === router.asPath;
        return (
          <Box key={navItem.label}>
            <Popover placement={'bottom-start'} trigger={'hover'}>
              <PopoverTrigger>
                <Box
                  alignItems="center"
                  display="flex"
                  h="full"
                  py={2}
                  color={isCurrent ? 'brand.slate.800' : 'brand.slate.500'}
                  fontSize={'md'}
                  fontWeight={isCurrent ? 500 : 400}
                  borderBottom="1px solid"
                  borderBottomColor={isCurrent ? 'brand.purple' : 'transparent'}
                  _hover={{
                    textDecoration: 'none',
                    color: 'brand.slate.800',
                  }}
                // href={navItem.href ?? '#'}
                >
                  <Link href={navItem.href ?? '#'}>
                    {navItem.label}
                  </Link>
                </Box>
              </PopoverTrigger>
            </Popover>
          </Box>
        );
      })}
    </Stack>
  );
};

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  return (
    <Box pos="sticky" zIndex="sticky" top={0}>
      <Flex
        align={'stretch'}
        px={{ base: 4, md: 6 }}
        py={{ base: 2, md: 0 }}
        color="brand.slate.500"
        bg="white"
        borderBottom="1px solid"
        borderBottomColor="blackAlpha.200"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}
          ml={{ base: -2 }}
        >
          <IconButton
            aria-label={'Toggle Navigation'}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            onClick={onToggle}
            variant={'ghost'}
          />
        </Flex>
        <Flex align="center" justify={{ base: 'center', md: 'start' }}>
          <Image
            h={5}
            cursor="pointer"
            objectFit={'contain'}
            alt={'Superteam Earn'}
            onClick={() => {
              router.push('/');
            }}
            src={'/images/logo/default.png'}
          />
          {/* <Flex
            align="center"
            display={{ base: 'none', md: 'flex' }}
            h="full"
            ml={10}
          >
            <Search />
          </Flex> */}

          <Flex
            align="center"
            justify="center" // Đặt giữa theo cả chiều ngang và chiều dọc
            display={{ base: 'none', md: 'flex' }}
            h="full"
            ml={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          align="center"
          justify={'flex-end'}
          direction={'row'}
          flex={{ base: 1, md: 1 }}
          py={{ base: 0, md: 2 }}
          spacing={4}
        >
          <UserInfo />
        </Stack>
      </Flex>
      <Box bg="white">
        <Collapse animateOpacity in={isOpen}>
          <Flex direction="column" w="96%" mt={5} mx={'auto'}>
            <UserInfo isMobile={true} />
          </Flex>
          <MobileNav />
        </Collapse>
      </Box>
    </Box>
  );
}
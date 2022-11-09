import React, { ReactNode } from 'react';
import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  useDisclosure,
  BoxProps,
  FlexProps,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {AiOutlineTwitter} from 'react-icons/ai'
import {RiDirectionFill} from 'react-icons/ri'
import {TfiLayoutGrid2} from 'react-icons/tfi'
import {CiBrightnessUp,CiBookmark} from 'react-icons/ci'


interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Explore', icon: RiDirectionFill },
  { name: 'Topics', icon: TfiLayoutGrid2 },
  { name: 'Digest', icon: CiBrightnessUp },
  { name: 'Bookmarks', icon: CiBookmark },
];

const Sidebar=()=> {
  const { onClose } = useDisclosure();
  return (
    <Box>

      <Flex direction="column" justify-content="between">
<Box minH="70vh" bg={useColorModeValue('#f5f7f9', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
    </Box>
    <Box className='sidebarfooter'>
      <UnorderedList>
  <ListItem><Link href="/" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>Blog</Link></ListItem>
  <ListItem><Link href="/" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>About</Link></ListItem>
  <ListItem><Link href="/" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>Join the beta group</Link></ListItem>
</UnorderedList>
      <Flex direction="row" justify-content="between" className='sidebarFooterLogo' alignItems="center">
        <Box className='footer-logo'>Curated</Box> <AiOutlineTwitter />
</Flex>
    </Box>  
</Flex>
</Box>

  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('#f5f7f9', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      >
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
}
const NavItem = ({ icon, children}: NavItemProps) => {
  return (
    <Link href="/" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} className="menusLink">
      <Flex
        align="center"
        p="2"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color='#959595'
        _hover={{
          bg: '#e9e9e9',
          color: '#000',
        }}
        >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: '#000',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};



export default Sidebar
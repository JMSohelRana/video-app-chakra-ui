import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  return (
    <div>
      <Button>
        <BiMenuAltLeft></BiMenuAltLeft>
      </Button>
    </div>
  );
};

export default Header;

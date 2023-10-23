import { Image, Text, VStack } from '@chakra-ui/react';

import { Default } from '@/layouts/Default';
import { Meta } from '@/layouts/Meta';
import Hero from '../components/Landing/Hero'
export default function Custom404() {
  return (
    <>
      <Default
        meta={
          <Meta title="NFT" description="" />
        }
      >
      </Default>
    </>
  );
}
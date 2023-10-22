// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// // Styles
import 'degen/styles';
import '../styles/globals.scss';
// Fonts
import '@fontsource/inter/';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
// import "@fontsource/domine/"
import '@fontsource/domine/400.css';
import '@fontsource/domine/500.css';
import '@fontsource/domine/600.css';
import '@fontsource/domine/700.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import theme from '../config/chakra.config';

import { Default } from '@/layouts/Default';
import { Meta } from '@/layouts/Meta';
import { SigningClientProvider } from '../contexts/client';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <ChakraProvider theme={theme}>
        <SigningClientProvider>
          <Default
            meta={
              <Meta title="NFT" description="" />
            }
          >
            <Component {...pageProps} />
          </Default>
        </SigningClientProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
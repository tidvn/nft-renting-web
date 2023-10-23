import { Image, Text, VStack, Grid, GridItem } from '@chakra-ui/react';

import { Default } from '@/layouts/Default';
import { Meta } from '@/layouts/Meta';
import CallToActionWithVideo from '../../components/Landing/Hero'
import Marketplace from '@/components/Marketplace';


export default function index() {
    return (
        <>
            <Marketplace />
        </>
    );
}

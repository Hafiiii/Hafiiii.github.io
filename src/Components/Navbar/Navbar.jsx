import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// sections
import MegaMenuDesktopHorizon from './MenuDesktop';
import MegaMenuMobile from './MenuMobile';
// components
import Iconify from '../iconify/Iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(() => ({
    position: 'fixed',
    bottom: 50,
    left: 40,
    zIndex: 99,
}));

// ----------------------------------------------------------------------

export default function Navbar() {
    const isMdUp = useResponsive('up', 'md');

    const [openMenuMobile, setOpenMenuMobile] = useState(false);

    return (
        <StyledRoot>
            {isMdUp ? (
                <MegaMenuDesktopHorizon />
            ) : (
                // <MegaMenuMobile
                //     open={openMenuMobile}
                //     onOpen={() => setOpenMenuMobile(true)}
                //     onClose={() => setOpenMenuMobile(false)}
                //     action={
                //         <Button
                //             color="inherit"
                //             onClick={() => setOpenMenuMobile(true)}
                //             startIcon={<Iconify icon="carbon:menu" />}
                //         />
                //     }
                // />
                <></>
            )}
        </StyledRoot >
    );
}
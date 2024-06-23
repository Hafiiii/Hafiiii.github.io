import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
//hooks
import useResponsive from '../hooks/useResponsive';
// sections
import MegaMenuDesktopHorizon from './MenuDesktop';
import MegaMenuMobile from './MenuMobile';
// components
import Iconify from '../iconify/Iconify';

// ----------------------------------------------------------------------

const DesktopStyledRoot = styled('div')(() => ({
    position: 'fixed',
    bottom: 50,
    left: 40,
    zIndex: 99,
}));

const MobileStyledRoot = styled('div')(() => ({
    backgroundColor: "rgb(255, 255, 255, 0.3)",
    position: 'fixed',
    top: 0,
    left: "50%",
    transform: 'translateX(-50%)',
    width: '100%',
    zIndex: 99,
    transition: 'background 2s ease-in',
    WebkitTransition: 'background 2s ease-in',
    MozTransition: 'background 2s ease-in',
    OTransition: 'background 2s ease-in',
    // boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 10px;',
}));

// ----------------------------------------------------------------------

export default function Navbar() {
    const isMdUp = useResponsive('up', 'md');

    const [openMenuMobile, setOpenMenuMobile] = useState(false);

    return (
        <>
            {
                isMdUp ? (
                    <DesktopStyledRoot>
                        <MegaMenuDesktopHorizon />
                    </DesktopStyledRoot >
                ) : (
                    <MobileStyledRoot>
                        <MegaMenuMobile
                            open={openMenuMobile}
                            onOpen={() => setOpenMenuMobile(true)}
                            onClose={() => setOpenMenuMobile(false)}
                            action={
                                <Button
                                    color="inherit"
                                    onClick={() => setOpenMenuMobile(true)}
                                    startIcon={<Iconify icon="carbon:menu" />}
                                />
                            }
                        />
                    </MobileStyledRoot>
                )
            }
        </>
    );
}
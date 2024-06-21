import { useState, useEffect } from 'react';
import PropTypes from "prop-types"
// @mui
import { styled } from '@mui/material/styles';
import { Badge, Box, Button, Container, Grid, Link, Stack, Tooltip } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// sections
import MegaMenuDesktopHorizon from './MenuDesktop';
import MegaMenuMobile from './MenuMobile';
// components
import { LogoWord } from '../logo/Logo';
import Iconify from '../iconify/Iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ isColorChange, isSticky, isMdUp }) => ({
    backgroundColor: "white",
    position: isSticky ? 'fixed' : 'none',
    top: 0,
    left: "50%",
    transform: isSticky ? 'translateX(-50%)' : 'none',
    width: '100%',
    zIndex: 99,
    transition: 'background 2s ease-in',
    WebkitTransition: 'background 2s ease-in',
    MozTransition: 'background 2s ease-in',
    OTransition: 'background 2s ease-in',
    boxShadow: isMdUp && isSticky && isColorChange ? 'rgba(0, 0, 0, 0.05) 0px 0px 10px;' : 'none',
}));

// ----------------------------------------------------------------------

Navbar.propTypes = {
    value: PropTypes.string,
    isSticky: PropTypes.bool,
};

export default function Navbar({ value, isSticky }) {
    const isMdUp = useResponsive('up', 'md');

    const [isColorChange, setIsColorChange] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 30) {
            setIsColorChange(true);
        } else {
            setIsColorChange(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Box
                sx={{
                    marginBottom: { xs: 10, md: 20 },
                }}
            >
                <StyledRoot isColorChange={isColorChange} isSticky={isSticky} isMdUp={isMdUp}>
                    <Container>
                        <Grid container spacing={0} alignItems="center">
                            <Grid item xs={12}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    width={1}
                                    height={{ xs: 64, md: 80 }}
                                >
                                    {isMdUp ? (
                                        <>
                                            <MegaMenuDesktopHorizon />
                                            <LogoWord />
                                        </>
                                    ) : (
                                        <>
                                            <MegaMenuMobile
                                                isStyled={isColorChange}
                                                data={categorizedData}
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

                                        </>
                                    )}

                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </StyledRoot >
            </Box >
        </>
    );
}
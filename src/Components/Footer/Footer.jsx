import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import { Container, Divider, Link, Stack, Tooltip, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import { LogoWord } from '../logo/Logo';
import Iconify from '../iconify/Iconify';

// ----------------------------------------------------------------------

export const _socials = [
    {
        value: 'instagram',
        label: 'Instagram',
        icon: 'ph:instagram-logo-light',
        color: '#E02D69',
        URL: 'https://www.instagram.com/selenagomez/',
        shortURL: 'instagram.com/selenagomez',
    },
];

export const StyledLink = styled((props) => <Link component={RouterLink} {...props} underline='hover' />)(
    ({ theme }) => ({
        ...theme.typography.caption,
        color: theme.palette.text.secondary,
        '&:hover': {
            color: theme.palette.text.primary,
        },
    })
);

export const navConfig = [
    { title: 'Home', path: '/' },
];

// ----------------------------------------------------------------------

export default function Footer() {
    const isMdUp = useResponsive('up', 'md');

    const informationLinks = [
        { title: "About", url: "/About" },
        { title: "Contact Us", url: "/site/contactUs" },
        { title: "Terms & Conditions", url: "/site/termsAndCondition" },
        { title: "Privacy Policy", url: "/site/privacyPolicy" },
    ];

    const otherInformationLinks = [
        { title: "Help Center", url: "/site/helpCenter" },
        { title: "Size Guide", url: "/site/sizeGuide" },
        { title: "Shipping & Delivery", url: "/site/shippingDelivery" },
        { title: "FAQs", url: "/site/faq" },
    ];

    const mainFooter = (
        <>
            <Divider sx={{ bgcolor: '#9f694f', opacity: '0.3' }} />

            <Container
                sx={{
                    overflow: 'hidden',
                    backgroundColor: 'primary.lighter',
                    my: 2,
                }}
            >
                <Grid container justifyContent={{ md: 'space-between' }}>
                    <Grid xs={12} md={6} mt={{ xs: 3 }}>
                        <Masonry columns={{ xs: 1, sm: 3, md: 3 }} spacing={{ xs: 3, md: 2 }} defaultColumns={3} defaultSpacing={2}>
                            <Stack spacing={1.5} alignItems="flex-start">
                                <Typography variant="body1">COMPANY</Typography>

                                {informationLinks?.map((link, index) => (
                                    <StyledLink key={index} to={link.url}>
                                        {link.title}
                                    </StyledLink>
                                ))}
                            </Stack>

                            <Stack spacing={1.5} alignItems="flex-start">
                                <Typography variant="body1">OTHER</Typography>

                                {otherInformationLinks?.map((link, index) => (
                                    <StyledLink key={index} to={link.url}>
                                        {link.title}
                                    </StyledLink>
                                ))}
                            </Stack>

                            <Stack spacing={1.5} alignItems="flex-start">
                                <Typography variant="body1">SOCIAL</Typography>

                                <Stack direction="row" alignItems="center" spacing={1}>
                                    {_socials.map((social) => (
                                        <Tooltip title={social.shortURL} key={social.value} >
                                            <Link component={RouterLink} onClick={() => { window.open(social.URL, '_blank') }}>
                                                <Iconify icon={social.icon} sx={{ color: 'text.secondary', m: 0 }} />
                                            </Link>
                                        </Tooltip>
                                    ))}
                                </Stack>
                            </Stack>
                        </Masonry>
                    </Grid>

                </Grid>
            </Container>

            <Divider sx={{ bgcolor: '#9f694f', opacity: '0.3' }} />

            <Container>
                <Stack sx={{ py: 1, textAlign: 'center' }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        © Build and Designed by Hafizah. All Rights Reserved.
                    </Typography>
                </Stack>
            </Container>
        </>
    );
    return <footer> {mainFooter}</footer>;
}
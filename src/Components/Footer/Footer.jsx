import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Container, Link, Stack, Tooltip, Typography } from '@mui/material';
// components
import Iconify from '../iconify/Iconify';

// ----------------------------------------------------------------------

export const _socials = [
    {
        value: 'linkedin',
        label: 'Linkedin',
        icon: 'ph:linkedin-logo',
        URL: 'https://www.linkedin.com/in/hfzhrmli/',
        shortURL: 'in/hfzhrmli',
    },
    {
        value: 'github',
        label: 'Github',
        icon: 'ph:github-logo',
        URL: 'https://github.com/Hafiiii',
        shortURL: 'github.com/Hafiiii',
    },
    {
        value: 'email',
        label: 'Email',
        icon: 'carbon:email',
        URL: 'mailto:hafizah.rmli@gmail.com',
        shortURL: 'hafizah.rmli@gmail.com',
    },
];

// ----------------------------------------------------------------------

export default function Footer() {
    const mainFooter = (
        <Container sx={{ mb: 3, mt: 10 }}>
            <Stack direction="column" alignItems="center" spacing={1.5}>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    {_socials.map((social) => (
                        <Tooltip title={social.shortURL} key={social.value} >
                            <Link component={RouterLink} onClick={() => { window.open(social.URL, '_blank') }}>
                                <Iconify icon={social.icon} sx={{ color: '#000', m: 0 }} />
                            </Link>
                        </Tooltip>
                    ))}
                </Stack>

                <Typography variant="caption">
                    © Build and Designed by Hafizah.
                </Typography>

            </Stack>
        </Container>
    );
    return <footer> {mainFooter}</footer>;
}
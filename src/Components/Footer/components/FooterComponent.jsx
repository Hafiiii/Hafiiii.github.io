import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
// @mui
import { Link, Stack, Tooltip, Typography } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Iconify from '../../iconify/Iconify';
import CollapseBlock from '../../collapse-block/CollapseBlock';

export function Contact() {
    return (
        <>
            <Typography variant="body2" mb={1}>CONTACT</Typography>

            <Typography variant="caption" textAlign="justify">Having an issue? You can reach out to us via email, give us a call, or visit the Contact Us page to directly send us a message.</Typography>

            <Stack spacing={1} direction="row" mt={2} alignItems="center">
                <Tooltip title="hafizah.rmli@gmail.com">
                    <Link
                        href="mailto:hafizah.rmli@gmail.com"
                        target="_blank"
                        color="inherit"
                        border="1px solid #9f694f"
                        p={1.5}
                    >
                        <Iconify icon="ant-design:mail-outlined" color="#9f694f" sx={{ m: 0 }} />
                    </Link>
                </Tooltip>

                <Tooltip title="hafizah">
                    <Link
                        // href="tel:"
                        target="_blank"
                        color="inherit"
                        border="1px solid #9f694f"
                        p={1.5}
                    >
                        <Iconify icon="mingcute:phone-line" color="#9f694f" sx={{ m: 0 }} />
                    </Link>
                </Tooltip>

                <Link
                    component={RouterLink}
                    to="/site/contactUs"
                    color="inherit"
                    p={1.5}
                >
                    <Typography variant="body2" sx={{ '&:hover': { color: 'text.secondary' } }}>Contact Us</Typography>
                </Link>
            </Stack>
        </>
    );
}

export function LinkItem({ href, title }) {
    return (
        <ScrollLink
            activeClass="active"
            to={href.substring(1)}
            spy={true}
            smooth={true}
            offset={-30}
            duration={300}
        >
            <Typography variant="body2" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
                {title}
            </Typography>
        </ScrollLink>
    );
}

LinkItem.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
};

export function Separator() {
    const isMdUp = useResponsive('up', 'md');

    return (
        <>
            {isMdUp &&
                <Typography variant="body2" color="text.secondary">|</Typography>
            }
        </>
    );
}

export function CaptionText({ children, ...props }) {
    return (
        <Typography variant="caption" textAlign="justify" {...props}>
            {children}
        </Typography>
    );
}

CaptionText.propTypes = {
    children: PropTypes.node,
};

export function CollapseBox({ title, children }) {
    return (
        <Stack borderTop='1px solid #000' px={1}>
            <CollapseBlock title={title} sx={{ textTransform: 'unset', typography: 'body2', py: 2 }}>
                <CaptionText mb={2}>{children}</CaptionText>
            </CollapseBlock>
        </Stack>
    );
}

CollapseBox.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};
import PropTypes from 'prop-types';
import { useEffect, } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// @mui
import { Link, Stack } from '@mui/material';
// components
import Iconify from '../iconify/Iconify';
import { _socials } from '../Footer/Footer';

// ----------------------------------------------------------------------

export default function MegaMenuMobile({ data, open, action, onOpen, onClose }) {
    const { pathname } = useLocation();

    useEffect(() => {
        if (open) {
            onClose();
        }
    }, [pathname]);

    return (
        <Stack direction="row" justifyContent="space-between" spacing={2} px={1.5}>
            <Stack direction="row" spacing={1}>
                <ParentItem title="Hello" path="#hello" />
                <ParentItem title="About" path="#about" />
                <ParentItem title="Education" path="#education" />
                <ParentItem title="Creation" path="#creation" />
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
                {_socials.map((social) => (
                    <Link key={social.value} component={RouterLink} onClick={() => { window.open(social.URL, '_blank') }}>
                        <Iconify icon={social.icon} width={15} sx={{ color: '#000', m: 0 }} />
                    </Link>
                ))}
            </Stack>
        </Stack>
    );
}

MegaMenuMobile.propTypes = {
    action: PropTypes.node,
    data: PropTypes.array,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    open: PropTypes.bool,
};

// ----------------------------------------------------------------------

function ParentItem({ title, path = '', icon, open, hasSub, isNew = false, ...other }) {
    const activeStyle = {
        color: 'primary.dark',
    };

    return (
        <Link
            component={HashLink}
            to={path}
            underline="none"
            color="inherit"
            variant="body2"
            smooth
            sx={{
                fontSize: 11,
                letterSpacing: 0.5,
                display: 'flex',
                cursor: 'pointer',
                height: 55,
                lineHeight: '55px',
                alignItems: 'center',
                textTransform: 'uppercase',
                transition: (theme) => theme.transitions.create('all'),
                '&:hover': {
                    activeStyle,
                    ...(open && activeStyle),
                    color: 'text.secondary',
                },
                position: 'relative',
            }}
            {...other}
        >
            {title}
        </Link>
    );
}

ParentItem.propTypes = {
    hasSub: PropTypes.bool,
    icon: PropTypes.node,
    open: PropTypes.bool,
    path: PropTypes.string,
    title: PropTypes.string,
    isNew: PropTypes.bool,
};

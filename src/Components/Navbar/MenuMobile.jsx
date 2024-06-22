import PropTypes from 'prop-types';
import { useState, useEffect, forwardRef } from 'react';
import { NavLink as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// @mui
import { Button, Divider, Drawer, IconButton, List, Link, ListItemText, ListItemIcon, ListItemButton, Stack, Typography } from '@mui/material';
// config
import { NAV } from '../../config-global';
// components
import Iconify from '../iconify/Iconify';
import Scrollbar from '../scrollbar/Scrollbar';

// ----------------------------------------------------------------------

export default function MegaMenuMobile({ data, open, action, onOpen, onClose }) {
    const { pathname } = useLocation();

    useEffect(() => {
        if (open) {
            onClose();
        }
    }, [pathname]);

    return (
        <>
            {action || (
                <Button variant="contained" onClick={onOpen} startIcon={<Iconify icon="carbon:menu" />}>
                    Menu
                </Button>
            )}

            <Drawer
                open={open}
                onClose={onClose}
                ModalProps={{ keepMounted: true }}
                PaperProps={{ sx: { pb: 5, width: NAV.W_BASE } }}
            >
                <Scrollbar>
                    <Stack direction='row' sx={{ justifyContent: 'space-evenly' }} >
                    </Stack>

                    <Link component={RouterLink} color="inherit" underline="none" to="/" >
                        <ParentItem title="Home" />
                    </Link>

                    <Link component={RouterLink} color="inherit" underline="none" to="/Men" >
                        <SubMenu title="Men" categories={data} />
                    </Link>

                    <Link component={RouterLink} color="inherit" underline="none" to="/Women" >
                        <SubMenu title="Women" categories={data} />
                    </Link>

                    <Link component={RouterLink} color="inherit" underline="none" to="/Collection" >
                        <ParentItem title="Collection" />
                    </Link>

                    <Link component={RouterLink} color="inherit" underline="none" to="/NewIn" >
                        <ParentItem title="New&nbsp;In" />
                    </Link>

                    <Link component={RouterLink} color="inherit" underline="none" to="/About">
                        <ParentItem title="About" />
                    </Link>

                </Scrollbar>
            </Drawer>
        </>
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

const ParentItem = forwardRef(({ icon, title, hasSub, ...other }, ref) => (
    <ListItemButton ref={ref} sx={{ height: 44 }} {...other}>
        <ListItemIcon
            sx={{
                minWidth: 0,
                width: 24,
                height: 24,
            }}
        >
            {icon}
        </ListItemIcon>

        <ListItemText primaryTypographyProps={{ typography: 'body2', fontFamily: 'Playfair Display', textTransform: 'uppercase' }}>{title}</ListItemText>
        {hasSub && <Iconify icon="carbon:chevron-right" width={16} sx={{ m: 0 }} />}
    </ListItemButton>
));

ParentItem.propTypes = {
    hasSub: PropTypes.bool,
    icon: PropTypes.node,
    title: PropTypes.string,
};

// ----------------------------------------------------------------------

function SubMenu({ parent, pathname, categories, title }) {
    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {
        if (openDrawer) {
            handleCloseDrawer();
        }
    }, [pathname]);

    const handleOpenDrawer = () => {
        setOpenDrawer(true);
    };

    const handleCloseDrawer = () => {
        setOpenDrawer(false);
    };

    return (
        <>
            <ParentItem title={title} onClick={handleOpenDrawer} hasSub />

            <Drawer
                open={openDrawer}
                onClose={handleCloseDrawer}
                BackdropProps={{ invisible: true }}
                ModalProps={{ keepMounted: true }}
            >
                <Stack direction="row" alignItems="center" px={1} py={1.5}>
                    <IconButton onClick={handleCloseDrawer}>
                        <Iconify icon="carbon:chevron-left" width={16} />
                    </IconButton>

                    <Typography variant="subtitle1" sx={{ ml: 1, textTransform: 'uppercase' }}>
                        {title}
                    </Typography>
                </Stack>
                <Divider />

                <Scrollbar>
                    <Stack spacing={5} py={3}>
                        {categories.map((list) => {
                            const { ProductCategory, children } = list;
                            return (
                                <List key={ProductCategory} disablePadding>
                                    <Typography
                                        component={RouterLink}
                                        // to={paths.eCommerce.products("Category", list.ProductCategoryID)}
                                        variant="overline"
                                        sx={{
                                            px: 1.5,
                                            mb: 1,
                                            textDecoration: 'none',
                                            fontWeight: 600
                                        }}
                                        noWrap
                                    >
                                        {ProductCategory}
                                    </Typography>

                                    {children.map((link) => (
                                        <Link
                                            key={link.ProductCategoryID}
                                            component={RouterLink}
                                            //   to={paths.eCommerce.products("Category", link.ProductCategoryID)}
                                            color="inherit"
                                            underline="none"
                                        >
                                            <ListItemButton sx={{ px: 1.5 }}>
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 0,
                                                        width: 24,
                                                        height: 24,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                </ListItemIcon>

                                                <ListItemText
                                                    primary={link.ProductCategory}
                                                    primaryTypographyProps={{ noWrap: true, typography: 'body2' }}
                                                />
                                            </ListItemButton>
                                        </Link>
                                    ))}
                                </List>
                            );
                        })}
                    </Stack>
                </Scrollbar>
            </Drawer>
        </>
    );
}

SubMenu.propTypes = {
    parent: PropTypes.shape({
        children: PropTypes.array,
        icon: PropTypes.node,
        path: PropTypes.string,
        title: PropTypes.string,
    }),
    pathname: PropTypes.string,
    categories: PropTypes.array,
    title: PropTypes.string,
};

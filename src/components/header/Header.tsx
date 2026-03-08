'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    Box,
    IconButton,
    Badge,
    Container,
    Button,
    Fade,
    Paper,
    Stack,
    Popper,
    ClickAwayListener,
    Chip
} from '@mui/material';
import {
    Search as SearchIcon,
    ShoppingCart,
    Menu as MenuIcon,
    Camera,
    QrCode,
    ChevronDown,
    User
} from 'lucide-react';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import AccountDropdown from './AccountDropdown';
import GlobalSettingsDropdown from './GlobalSettingsDropdown';

const SearchCapsule = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 50,
    backgroundColor: '#fff',
    border: '2px solid #111820',
    display: 'flex',
    alignItems: 'center',
    padding: '2px 2px 2px 16px',
    width: '100%',
    transition: 'all 0.2s ease',
    '&:hover': {
        borderColor: '#000',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    flexGrow: 1,
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        width: '100%',
        fontWeight: 500,
        fontSize: '14px',
    },
}));

export default function Header() {
    const [accountAnchor, setAccountAnchor] = useState<null | HTMLElement>(null);
    const router = useRouter();

    const [globalSettingsAnchor, setGlobalSettingsAnchor] = useState<null | HTMLElement>(null);

    const handleAccountOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAccountAnchor(event.currentTarget);
    };

    const handleAccountClose = () => {
        setAccountAnchor(null);
    };

    const handleGlobalSettingsOpen = (event: React.MouseEvent<HTMLElement>) => {
        setGlobalSettingsAnchor(event.currentTarget);
    };

    const handleGlobalSettingsClose = () => {
        setGlobalSettingsAnchor(null);
    };

    const isAccountOpen = Boolean(accountAnchor);
    const isGlobalSettingsOpen = Boolean(globalSettingsAnchor);

    return (
        <AppBar position="sticky" elevation={0} sx={{
            bgcolor: '#fff',
            color: 'text.primary',
            borderBottom: '1px solid #eee'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ height: 80, gap: 2 }}>
                    {/* Logo & Category Menu */}
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Box
                            onClick={() => router.push('/')}
                            sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', mr: 1 }}
                        >
                            <Box sx={{
                                width: 32,
                                height: 32,
                                bgcolor: '#111820',
                                borderRadius: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 900, lineHeight: 1 }}>N</Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: '-0.5px', display: { xs: 'none', lg: 'block' } }}>
                                NexusMart
                            </Typography>
                        </Box>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <IconButton size="small" sx={{ bgcolor: '#f5f5f5', p: 1 }}>
                                <MenuIcon size={20} />
                            </IconButton>
                            <Chip
                                label="FEATURED"
                                size="small"
                                sx={{
                                    bgcolor: '#0061FF',
                                    color: '#fff',
                                    fontSize: '0.6rem',
                                    fontWeight: 900,
                                    height: 18,
                                    borderRadius: 0.5,
                                    display: { xs: 'none', md: 'flex' }
                                }}
                            />
                        </Stack>
                    </Stack>

                    {/* Capsule Search Bar */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}>
                        <SearchCapsule sx={{ maxWidth: 800 }}>
                            <StyledInputBase
                                placeholder="Search here"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <Stack direction="row" alignItems="center" spacing={1} sx={{ mr: 1 }}>
                                <IconButton size="small" sx={{ color: '#666' }}>
                                    <Camera size={20} />
                                </IconButton>
                                <Box
                                    sx={{
                                        bgcolor: '#0061FF',
                                        color: '#fff',
                                        width: 44,
                                        height: 44,
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        '&:hover': { bgcolor: '#0046B8' }
                                    }}
                                >
                                    <SearchIcon size={20} />
                                </Box>
                            </Stack>
                        </SearchCapsule>
                    </Box>

                    {/* Right Utilities */}
                    <Stack direction="row" alignItems="center" spacing={1}>
                        {/* Download App */}
                        <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 1, cursor: 'pointer', px: 1 }}>
                            <QrCode size={24} />
                            <Box>
                                <Typography variant="caption" sx={{ fontWeight: 700, display: 'block', lineHeight: 1 }}>Download the</Typography>
                                <Typography variant="caption" sx={{ color: 'text.secondary' }}>NexusMart app</Typography>
                            </Box>
                        </Box>

                        {/* Language/Ship to */}
                        <Box
                            onMouseEnter={handleGlobalSettingsOpen}
                            onMouseLeave={handleGlobalSettingsClose}
                            sx={{ display: 'flex', alignItems: 'center', gap: 0.5, px: 1, cursor: 'pointer', position: 'relative' }}
                        >
                            <Box
                                component="img"
                                src="https://flagcdn.com/w20/lk.png"
                                sx={{ width: 22, height: 16, objectFit: 'cover', borderRadius: '2px' }}
                            />
                            <Stack>
                                <Typography variant="caption" sx={{ fontWeight: 700, lineHeight: 1 }}>EN/</Typography>
                                <Stack direction="row" alignItems="center">
                                    <Typography variant="caption" sx={{ fontWeight: 700 }}>LKR</Typography>
                                    <ChevronDown size={12} />
                                </Stack>
                            </Stack>

                            <Popper
                                open={isGlobalSettingsOpen}
                                anchorEl={globalSettingsAnchor}
                                placement="bottom-end"
                                transition
                                sx={{ zIndex: 1300 }}
                            >
                                {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={200}>
                                        <Box sx={{ pt: 1 }}>
                                            <GlobalSettingsDropdown />
                                        </Box>
                                    </Fade>
                                )}
                            </Popper>
                        </Box>

                        {/* Account */}
                        <Box
                            onMouseEnter={handleAccountOpen}
                            sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1, cursor: 'pointer', height: 80 }}
                        >
                            <User size={28} />
                            <Box>
                                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', lineHeight: 1 }}>Welcome</Typography>
                                <Typography variant="caption" sx={{ fontWeight: 800 }}>Sign in / Register</Typography>
                            </Box>

                            <Popper
                                open={isAccountOpen}
                                anchorEl={accountAnchor}
                                placement="bottom-end"
                                transition
                                sx={{ zIndex: 1300 }}
                                onMouseLeave={handleAccountClose}
                            >
                                {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={200}>
                                        <Box sx={{ pt: 1 }}>
                                            <AccountDropdown />
                                        </Box>
                                    </Fade>
                                )}
                            </Popper>
                        </Box>

                        {/* Featured Link */}
                        <Box sx={{ display: { xs: 'none', xl: 'flex' }, alignItems: 'center', gap: 0.5, px: 2, cursor: 'pointer', borderLeft: '1px solid #eee', height: 40 }}>
                            <Typography variant="caption" sx={{ fontWeight: 1000, color: '#0061FF' }}>WEEKLY</Typography>
                            <Typography variant="caption" sx={{ fontWeight: 1000, color: '#fff', bgcolor: '#0061FF', px: 1, borderRadius: 0.5 }}>FEATURED</Typography>
                        </Box>

                        {/* Cart */}
                        <IconButton
                            onClick={() => router.push('/cart')}
                            sx={{ color: '#111820', p: 1 }}
                        >
                            <Badge
                                badgeContent={0}
                                sx={{
                                    '& .MuiBadge-badge': {
                                        bgcolor: '#111820',
                                        color: '#fff',
                                        fontWeight: 800,
                                        minWidth: 18,
                                        height: 18,
                                        fontSize: '0.65rem'
                                    }
                                }}
                            >
                                <ShoppingCart size={28} strokeWidth={1.5} />
                            </Badge>
                            <Typography variant="caption" sx={{ fontWeight: 800, ml: 1, display: { xs: 'none', md: 'block' } }}>Cart</Typography>
                        </IconButton>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

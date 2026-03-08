"use client";

import React, { useState } from 'react';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    IconButton
} from '@mui/material';
import {
    LayoutDashboard,
    ShoppingBag,
    Users,
    Settings,
    BarChart3,
    Package,
    ChevronLeft,
    ChevronRight,
    LogOut
} from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const DRAWER_WIDTH = 280;
const COLLAPSED_DRAWER_WIDTH = 88;

const MENU_ITEMS = [
    { label: 'Dashboard', icon: <LayoutDashboard size={22} />, path: '/dashboard' },
    { label: 'Orders', icon: <ShoppingBag size={22} />, path: '/dashboard/orders' },
    { label: 'Products', icon: <Package size={22} />, path: '/dashboard/products' },
    { label: 'Customers', icon: <Users size={22} />, path: '/dashboard/customers' },
    { label: 'Analytics', icon: <BarChart3 size={22} />, path: '/dashboard/analytics' },
    { label: 'Settings', icon: <Settings size={22} />, path: '/dashboard/settings' },
];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const toggleSidebar = () => setCollapsed(!collapsed);

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: collapsed ? COLLAPSED_DRAWER_WIDTH : DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: collapsed ? COLLAPSED_DRAWER_WIDTH : DRAWER_WIDTH,
                    boxSizing: 'border-box',
                    borderRight: '1px solid rgba(0,0,0,0.08)',
                    bgcolor: 'background.paper',
                    transition: (theme) => theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                    overflowX: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                },
            }}
        >
            <Box>
                {/* Logo Section */}
                <Box sx={{
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: collapsed ? 'center' : 'space-between'
                }}>
                    {!collapsed && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <div style={{
                                width: 32,
                                height: 32,
                                backgroundColor: '#0061FF',
                                borderRadius: 8,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 800
                            }}>N</div>
                            <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -0.5 }}>
                                NexusMart
                            </Typography>
                        </Box>
                    )}
                    {collapsed && (
                        <div style={{
                            width: 32,
                            height: 32,
                            backgroundColor: '#0061FF',
                            borderRadius: 8,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 800
                        }}>N</div>
                    )}
                    <IconButton onClick={toggleSidebar} size="small" sx={{
                        display: { xs: 'none', md: 'flex' },
                        position: collapsed ? 'relative' : 'static',
                    }}>
                        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </IconButton>
                </Box>

                <Divider sx={{ opacity: 0.5, mx: 2 }} />

                {/* Navigation Items */}
                <List sx={{ px: 2, py: 2 }}>
                    {MENU_ITEMS.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <ListItem key={item.label} disablePadding sx={{ display: 'block', mb: 0.5 }}>
                                <ListItemButton
                                    onClick={() => router.push(item.path)}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: collapsed ? 'center' : 'initial',
                                        px: 2.5,
                                        borderRadius: 2,
                                        bgcolor: isActive ? 'primary.main' : 'transparent',
                                        color: isActive ? 'white' : 'text.secondary',
                                        '&:hover': {
                                            bgcolor: isActive ? 'primary.dark' : 'rgba(0, 97, 255, 0.05)',
                                            color: isActive ? 'white' : 'primary.main',
                                            '& svg': { color: isActive ? 'white' : 'primary.main' }
                                        },
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: collapsed ? 0 : 3,
                                            justifyContent: 'center',
                                            color: isActive ? 'white' : 'inherit',
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    {!collapsed && (
                                        <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 14, fontWeight: isActive ? 600 : 500 }} />
                                    )}
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>

            {/* Logout / User Info */}
            <Box sx={{ p: 2 }}>
                <Divider sx={{ mb: 2, opacity: 0.5 }} />
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: collapsed ? 'center' : 'initial',
                            px: 2.5,
                            borderRadius: 2,
                            color: 'error.main',
                            '&:hover': { bgcolor: 'error.lighter' }
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: 0, mr: collapsed ? 0 : 3, justifyContent: 'center', color: 'inherit' }}>
                            <LogOut size={22} />
                        </ListItemIcon>
                        {!collapsed && <ListItemText primary="Logout" primaryTypographyProps={{ fontSize: 14, fontWeight: 600 }} />}
                    </ListItemButton>
                </ListItem>
            </Box>
        </Drawer>
    );
}

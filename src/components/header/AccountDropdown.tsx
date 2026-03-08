'use client';

import React from 'react';
import { Box, Typography, Button, Stack, Divider, Paper } from '@mui/material';
import {
    ClipboardList,
    CircleDollarSign,
    MessageSquare,
    CreditCard,
    Heart,
    TicketPercent,
    Settings,
    Briefcase,
    HelpCircle,
    FileText,
    ShieldAlert,
    Info
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AccountDropdown() {
    const router = useRouter();

    const menuItems = [
        { icon: <ClipboardList size={18} />, label: 'My Orders' },
        { icon: <CircleDollarSign size={18} />, label: 'My Coins' },
        { icon: <MessageSquare size={18} />, label: 'Message Center' },
        { icon: <CreditCard size={18} />, label: 'Payment' },
        { icon: <Heart size={18} />, label: 'Wish List' },
        { icon: <TicketPercent size={18} />, label: 'My Coupons' },
    ];

    const secondaryItems = [
        'Settings',
        'Help Center',
        'Buyer Protection',
        'Seller Center',
        'Report an Issue',
        'Privacy Policy',
        'Terms of Service',
        'NexusMart for Business'
    ];

    return (
        <Paper
            elevation={8}
            sx={{
                width: 280,
                borderRadius: 1.5,
                overflow: 'hidden',
                border: '1px solid #e5e5e5',
                bgcolor: '#fff'
            }}
        >
            <Box sx={{ p: 2 }}>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        bgcolor: '#111820',
                        color: '#fff',
                        borderRadius: 10,
                        py: 1.5,
                        fontWeight: 800,
                        textTransform: 'none',
                        '&:hover': { bgcolor: '#000' }
                    }}
                >
                    Sign in
                </Button>
                <Typography
                    variant="caption"
                    sx={{
                        display: 'block',
                        textAlign: 'center',
                        mt: 1,
                        color: 'text.secondary',
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' }
                    }}
                >
                    Register
                </Typography>
            </Box>

            <Divider sx={{ mx: 2 }} />

            <Box sx={{ py: 1 }}>
                {menuItems.map((item, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            px: 2.5,
                            py: 1.2,
                            cursor: 'pointer',
                            '&:hover': { bgcolor: '#f5f5f5' }
                        }}
                    >
                        <Box sx={{ color: '#444' }}>{item.icon}</Box>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: '#111820' }}>
                            {item.label}
                        </Typography>
                    </Box>
                ))}
            </Box>

            <Divider sx={{ mx: 2 }} />

            <Box sx={{ py: 1, maxHeight: 300, overflowY: 'auto' }}>
                {secondaryItems.map((item, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            px: 2.5,
                            py: 1,
                            cursor: 'pointer',
                            '&:hover': { bgcolor: '#f5f5f5' }
                        }}
                    >
                        <Typography variant="body2" sx={{ color: '#666', fontSize: '0.85rem' }}>
                            {item}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Paper>
    );
}

"use client";

import React from 'react';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    Stack,
    Button,
    Avatar,
    IconButton,
    Chip
} from '@mui/material';
import {
    TrendingUp,
    Users,
    ShoppingBag,
    DollarSign,
    MoreVertical,
    ArrowUpRight,
    ArrowDownRight,
    Package
} from 'lucide-react';

const STATS = [
    { label: 'Total Revenue', value: '$128,430', change: '+12.5%', isUp: true, icon: <DollarSign />, color: '#0061FF' },
    { label: 'Active Users', value: '1,240', change: '+18.2%', isUp: true, icon: <Users />, color: '#27C7FF' },
    { label: 'New Orders', value: '456', change: '-4.3%', isUp: false, icon: <ShoppingBag />, color: '#7B61FF' },
    { label: 'Avg. Order Val', value: '$282', change: '+5.7%', isUp: true, icon: <Package />, color: '#FF61C7' },
];

const RECENT_ORDERS = [
    { id: '#ORD-7234', customer: 'Alex Rivera', product: 'NeuralLink Z1', amount: '$899', status: 'Delivered', date: '2 mins ago' },
    { id: '#ORD-7235', customer: 'Sarah Chen', product: 'Quantum Pro Audio', amount: '$349', status: 'Processing', date: '15 mins ago' },
    { id: '#ORD-7236', customer: 'James Wilson', product: 'OmniWatch X', amount: '$449', status: 'Shipped', date: '45 mins ago' },
    { id: '#ORD-7237', customer: 'Elena Rodriguez', product: 'Lumina S1', amount: '$129', status: 'Delivered', date: '3 hours ago' },
];

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <Container maxWidth="xl" sx={{ py: 4, flex: 1 }}>
                {/* Header */}
                <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
                            Insight Dashboard
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Welcome back! Here's what's happening with your marketplace today.
                        </Typography>
                    </Box>
                    <Button variant="contained" startIcon={<ArrowUpRight size={18} />} sx={{ borderRadius: 2 }}>
                        Download Report
                    </Button>
                </Box>

                {/* Stats Grid */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                    {STATS.map((stat) => (
                        <Grid key={stat.label} size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card sx={{ p: 3, position: 'relative', overflow: 'hidden' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                    <Box sx={{
                                        p: 1.5,
                                        borderRadius: 3,
                                        bgcolor: `${stat.color}10`,
                                        color: stat.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {stat.icon}
                                    </Box>
                                    <Chip
                                        label={stat.change}
                                        size="small"
                                        icon={stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                        sx={{
                                            bgcolor: stat.isUp ? 'success.lighter' : 'error.lighter',
                                            color: stat.isUp ? 'success.main' : 'error.main',
                                            fontWeight: 700,
                                            '& .MuiChip-icon': { color: 'inherit' }
                                        }}
                                    />
                                </Box>
                                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 0.5 }}>
                                    {stat.label}
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: 800 }}>
                                    {stat.value}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Grid container spacing={3}>
                    {/* Revenue Chart Placeholder */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Card sx={{ p: 3, height: '100%' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                <Typography variant="h6" sx={{ fontWeight: 700 }}>Revenue Analytics</Typography>
                                <IconButton size="small"><MoreVertical size={20} /></IconButton>
                            </Box>
                            <Box sx={{
                                height: 300,
                                bgcolor: 'rgba(0, 97, 255, 0.02)',
                                borderRadius: 4,
                                border: '1px dashed rgba(0, 97, 255, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Stack alignItems="center" spacing={1}>
                                    <TrendingUp size={48} color="#0061FF" opacity={0.3} />
                                    <Typography color="text.secondary" variant="body2">Interactive Chart Visualization Coming Soon</Typography>
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Recent Orders */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card sx={{ p: 3, height: '100%' }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>Recent Orders</Typography>
                            <Stack spacing={3}>
                                {RECENT_ORDERS.map((order) => (
                                    <Box key={order.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                            <Avatar sx={{ bgcolor: 'rgba(0,0,0,0.05)', color: 'text.primary', fontSize: 14 }}>
                                                {order.customer.split(' ').map(n => n[0]).join('')}
                                            </Avatar>
                                            <Box>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{order.customer}</Typography>
                                                <Typography variant="caption" color="text.secondary">{order.product} • {order.date}</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ textAlign: 'right' }}>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{order.amount}</Typography>
                                            <Chip
                                                label={order.status}
                                                size="small"
                                                variant="outlined"
                                                color={order.status === 'Delivered' ? 'success' : 'warning'}
                                                sx={{ height: 20, fontSize: 10, fontWeight: 800 }}
                                            />
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>
                            <Button fullWidth variant="outlined" sx={{ mt: 4, borderRadius: 2 }}>
                                View All Orders
                            </Button>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </DashboardLayout>
    );
}

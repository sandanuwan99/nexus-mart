import React from 'react';
import { Card, Box, Typography, Button, Divider, Chip, Stack } from '@mui/material';
import Image from 'next/image';
import { OrderData, OrderStatus } from '@/data/orders';
import { format } from 'date-fns';

interface OrderCardProps {
    order: OrderData;
}

const getStatusColor = (status: OrderStatus) => {
    switch (status) {
        case 'Delivered': return 'success';
        case 'Shipped': return 'info';
        case 'Processing': return 'warning';
        case 'Cancelled': return 'error';
        case 'Pending':
        default: return 'default';
    }
};

export const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
    return (
        <Card sx={{ mb: 3, overflow: 'hidden', border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
            {/* Header */}
            <Box sx={{
                bgcolor: 'rgba(0,0,0,0.02)',
                p: { xs: 2, sm: 3 },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 2,
                borderBottom: '1px solid',
                borderColor: 'divider'
            }}>
                <Box sx={{ display: 'flex', gap: { xs: 3, md: 6 }, flexWrap: 'wrap' }}>
                    <Box>
                        <Typography variant="caption" color="text.secondary" fontWeight={600} display="block">
                            ORDER PLACED
                        </Typography>
                        <Typography variant="body2" fontWeight={600}>
                            {format(new Date(order.date), 'MMM dd, yyyy')}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" fontWeight={600} display="block">
                            TOTAL
                        </Typography>
                        <Typography variant="body2" fontWeight={600}>
                            LKR {order.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" fontWeight={600} display="block">
                            SHIP TO
                        </Typography>
                        <Typography variant="body2" fontWeight={600} color="primary.main" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                            {order.customer.name}
                        </Typography>
                    </Box>
                </Box>
                <Box textAlign={{ xs: 'left', sm: 'right' }}>
                    <Typography variant="caption" color="text.secondary" fontWeight={600} display="block">
                        ORDER ID
                    </Typography>
                    <Typography variant="body2" fontWeight={600}>
                        {order.id}
                    </Typography>
                </Box>
            </Box>

            {/* Body */}
            <Box sx={{ p: { xs: 2, sm: 3 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h6" fontWeight={800}>
                        {order.status === 'Delivered' ? 'Delivered successfully' : `Arriving soon`}
                    </Typography>
                    <Chip
                        label={order.status}
                        color={getStatusColor(order.status)}
                        size="small"
                        sx={{ fontWeight: 800, borderRadius: 1 }}
                    />
                </Box>

                <Stack spacing={3}>
                    {order.items.map((item) => (
                        <Box key={item.id} sx={{ display: 'flex', gap: 3, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                            <Box sx={{
                                width: 80,
                                height: 80,
                                flexShrink: 0,
                                borderRadius: 2,
                                overflow: 'hidden',
                                border: '1px solid',
                                borderColor: 'divider',
                                position: 'relative',
                                bgcolor: 'background.default'
                            }}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Box>
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 0.5 }}>
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    Qty: {item.quantity}
                                </Typography>
                                <Typography variant="subtitle2" fontWeight={800} color="error.main">
                                    LKR {item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 140 }}>
                                <Button variant="contained" color="primary" size="small" fullWidth sx={{ borderRadius: 2 }}>
                                    Track Package
                                </Button>
                                <Button variant="outlined" size="small" fullWidth sx={{ borderRadius: 2 }}>
                                    View Item
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Card>
    );
};

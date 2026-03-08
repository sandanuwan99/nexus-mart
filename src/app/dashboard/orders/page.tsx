"use client";

import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import { OrdersFilter } from '@/components/Orders/OrdersFilter';
import { OrderCard } from '@/components/Orders/OrderCard';
import { mockOrders, OrderStatus } from '@/data/orders';

export default function OrdersPage() {
    const [filter, setFilter] = useState<OrderStatus | 'All'>('All');

    // Filter orders based on the selected tab
    const filteredOrders = mockOrders.filter(order =>
        filter === 'All' ? true : order.status === filter
    );

    return (
        <DashboardLayout>
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                        Order Management
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Keep track of all your customer orders, recent shipments, and delivery statuses.
                    </Typography>
                </Box>

                <OrdersFilter currentStatus={filter} onStatusChange={setFilter} />

                <Box sx={{ mt: 3, maxWidth: 1000 }}>
                    {filteredOrders.length > 0 ? (
                        filteredOrders.map(order => (
                            <OrderCard key={order.id} order={order} />
                        ))
                    ) : (
                        <Box sx={{ py: 8, textAlign: 'center' }}>
                            <Typography variant="h6" color="text.secondary" fontWeight={600}>
                                No orders found for "{filter}" status.
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Container>
        </DashboardLayout>
    );
}

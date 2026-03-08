import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { OrderStatus } from '@/data/orders';

interface OrdersFilterProps {
    currentStatus: OrderStatus | 'All';
    onStatusChange: (status: OrderStatus | 'All') => void;
}

const TABS: { label: string; value: OrderStatus | 'All' }[] = [
    { label: 'All Orders', value: 'All' },
    { label: 'Pending', value: 'Pending' },
    { label: 'Processing', value: 'Processing' },
    { label: 'Shipped', value: 'Shipped' },
    { label: 'Delivered', value: 'Delivered' },
    { label: 'Cancelled', value: 'Cancelled' },
];

export const OrdersFilter: React.FC<OrdersFilterProps> = ({ currentStatus, onStatusChange }) => {
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs
                value={currentStatus}
                onChange={(_, newValue) => onStatusChange(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                    '& .MuiTab-root': {
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: 15,
                        minHeight: 56,
                    },
                }}
            >
                {TABS.map((tab) => (
                    <Tab key={tab.value} label={tab.label} value={tab.value} />
                ))}
            </Tabs>
        </Box>
    );
};

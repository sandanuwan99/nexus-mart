"use client";

import React, { useState } from 'react';
import { Box, Typography, Switch, List, ListItem, ListItemText, ListItemSecondaryAction, Divider, Button } from '@mui/material';

export default function NotificationSettings() {
    const [notifications, setNotifications] = useState({
        orderUpdates: true,
        promotions: false,
        newsletter: true,
        securityAlerts: true
    });

    const handleToggle = (key: keyof typeof notifications) => {
        setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h6" fontWeight={700} mb={3}>
                Email Notifications
            </Typography>

            <List disablePadding>
                <ListItem sx={{ py: 2 }}>
                    <ListItemText
                        primary={<Typography fontWeight={600}>Order Updates</Typography>}
                        secondary="Receive notifications about recent orders and their status."
                    />
                    <ListItemSecondaryAction>
                        <Switch
                            edge="end"
                            checked={notifications.orderUpdates}
                            onChange={() => handleToggle('orderUpdates')}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem sx={{ py: 2 }}>
                    <ListItemText
                        primary={<Typography fontWeight={600}>Promotional Offers</Typography>}
                        secondary="Get updates about new products, discounts and sales events."
                    />
                    <ListItemSecondaryAction>
                        <Switch
                            edge="end"
                            checked={notifications.promotions}
                            onChange={() => handleToggle('promotions')}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem sx={{ py: 2 }}>
                    <ListItemText
                        primary={<Typography fontWeight={600}>Newsletter</Typography>}
                        secondary="Weekly digest of what's happening."
                    />
                    <ListItemSecondaryAction>
                        <Switch
                            edge="end"
                            checked={notifications.newsletter}
                            onChange={() => handleToggle('newsletter')}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem sx={{ py: 2 }}>
                    <ListItemText
                        primary={<Typography fontWeight={600}>Security Alerts</Typography>}
                        secondary="Notifies you about critical events related to your account security."
                    />
                    <ListItemSecondaryAction>
                        <Switch
                            edge="end"
                            checked={notifications.securityAlerts}
                            onChange={() => handleToggle('securityAlerts')}
                            disabled // usually not optional
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                <Button variant="contained" size="large">
                    Save Preferences
                </Button>
            </Box>
        </Box>
    );
}

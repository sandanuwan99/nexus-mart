"use client";

import React, { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab, Card, useTheme } from '@mui/material';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import { User, Store, Bell, Shield } from 'lucide-react';

import ProfileSettings from '@/components/Settings/ProfileSettings';
import StoreSettings from '@/components/Settings/StoreSettings';
import NotificationSettings from '@/components/Settings/NotificationSettings';
import SecuritySettings from '@/components/Settings/SecuritySettings';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{ width: '100%' }}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 4, height: '100%' }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function SettingsPage() {
    const [value, setValue] = useState(0);
    const theme = useTheme();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <DashboardLayout>
            <Container maxWidth="xl" sx={{ py: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                        Account Settings
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Manage your account preferences, store details, and security configurations.
                    </Typography>
                </Box>

                <Card sx={{ flexGrow: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, overflow: 'hidden' }}>
                    {/* Vertical Tabs */}
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        sx={{
                            borderRight: 1,
                            borderColor: 'divider',
                            minWidth: { xs: '100%', md: 240 },
                            bgcolor: 'background.paper',
                            '& .MuiTabs-indicator': {
                                width: 3,
                                borderRadius: '3px 0 0 3px',
                            },
                            '& .MuiTab-root': {
                                alignItems: 'flex-start',
                                textAlign: 'left',
                                py: 2.5,
                                px: 3,
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: 15,
                                minHeight: 64,
                                gap: 2,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                            }
                        }}
                    >
                        <Tab icon={<User size={18} />} label="Public Profile" {...a11yProps(0)} />
                        <Tab icon={<Store size={18} />} label="Store Details" {...a11yProps(1)} />
                        <Tab icon={<Bell size={18} />} label="Notifications" {...a11yProps(2)} />
                        <Tab icon={<Shield size={18} />} label="Security" {...a11yProps(3)} />
                    </Tabs>

                    {/* Tab Content Panels */}
                    <Box sx={{ flexGrow: 1, overflowY: 'auto', bgcolor: 'background.paper' }}>
                        <TabPanel value={value} index={0}>
                            <ProfileSettings />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <StoreSettings />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <NotificationSettings />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <SecuritySettings />
                        </TabPanel>
                    </Box>
                </Card>
            </Container>
        </DashboardLayout>
    );
}

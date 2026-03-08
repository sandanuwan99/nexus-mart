"use client";

import React from 'react';
import { Box, Typography, TextField, Button, Avatar, IconButton, Divider } from '@mui/material';
import { Camera } from 'lucide-react';

export default function ProfileSettings() {
    return (
        <Box>
            <Typography variant="h6" fontWeight={700} mb={3}>
                Public Profile
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4, mb: 4 }}>
                <Box sx={{ position: 'relative' }}>
                    <Avatar sx={{ width: 100, height: 100, bgcolor: 'primary.main', fontSize: 32 }}>JS</Avatar>
                    <IconButton
                        size="small"
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: 'divider',
                            '&:hover': { bgcolor: 'background.default' }
                        }}
                    >
                        <Camera size={16} />
                    </IconButton>
                </Box>
                <Box>
                    <Typography variant="subtitle2" fontWeight={600} mb={1}>
                        Profile Picture
                    </Typography>
                    <Typography variant="body2" color="text.secondary" maxWidth={300}>
                        Upload a picture to make your profile stand out. PNG or JPG under 5MB.
                    </Typography>
                </Box>
            </Box>

            <Divider sx={{ mb: 4 }} />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 600 }}>
                <Box sx={{ display: 'flex', gap: 3 }}>
                    <TextField
                        fullWidth
                        label="First Name"
                        defaultValue="Janitha"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        label="Last Name"
                        defaultValue="Sandaruwan"
                        variant="outlined"
                    />
                </Box>
                <TextField
                    fullWidth
                    label="Email Address"
                    defaultValue="janitha@nexusmart.com"
                    type="email"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Phone Number"
                    defaultValue="+94 77 123 4567"
                    variant="outlined"
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button variant="contained" size="large">
                        Save Changes
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

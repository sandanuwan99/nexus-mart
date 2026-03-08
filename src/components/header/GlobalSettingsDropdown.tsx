'use client';

import React from 'react';
import {
    Box,
    Typography,
    Button,
    Paper,
    FormControl,
    Select,
    MenuItem,
    Stack,
    Divider
} from '@mui/material';
import { ChevronDown } from 'lucide-react';

export default function GlobalSettingsDropdown() {
    return (
        <Paper
            elevation={8}
            sx={{
                width: 340,
                borderRadius: 1.5,
                overflow: 'hidden',
                border: '1px solid #e5e5e5',
                bgcolor: '#fff',
                p: 2.5
            }}
        >
            <Stack spacing={2.5}>
                {/* Ship to Section */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5, fontSize: '1.25rem' }}>
                        Ship to
                    </Typography>
                    <FormControl fullWidth variant="outlined" size="small">
                        <Select
                            value="LK"
                            sx={{
                                borderRadius: 1.5,
                                '& .MuiSelect-select': {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    py: 1.25
                                }
                            }}
                        >
                            <MenuItem value="LK">
                                <Box
                                    component="img"
                                    src="https://flagcdn.com/w20/lk.png"
                                    sx={{ width: 22, borderRadius: '2px' }}
                                />
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>Sri Lanka</Typography>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Language Section */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5, fontSize: '1.25rem' }}>
                        Language
                    </Typography>
                    <FormControl fullWidth variant="outlined" size="small">
                        <Select
                            value="EN"
                            sx={{
                                borderRadius: 1.5,
                                '& .MuiSelect-select': {
                                    py: 1.25
                                }
                            }}
                        >
                            <MenuItem value="EN">
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>English</Typography>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Currency Section */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5, fontSize: '1.25rem' }}>
                        Currency
                    </Typography>
                    <FormControl fullWidth variant="outlined" size="small">
                        <Select
                            value="LKR"
                            sx={{
                                borderRadius: 1.5,
                                '& .MuiSelect-select': {
                                    py: 1.25
                                }
                            }}
                        >
                            <MenuItem value="LKR">
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>LKR ( Sri Lankan Rupee )</Typography>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Save Button */}
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        bgcolor: '#111820',
                        color: '#fff',
                        fontWeight: 800,
                        py: 1.5,
                        borderRadius: 10,
                        mt: 1,
                        textTransform: 'none',
                        fontSize: '1rem',
                        '&:hover': {
                            bgcolor: '#222'
                        }
                    }}
                >
                    Save
                </Button>
            </Stack>
        </Paper>
    );
}

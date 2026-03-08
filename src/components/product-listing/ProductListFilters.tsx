'use client';

import React from 'react';
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Divider,
    Stack,
    Link
} from '@mui/material';

const FILTER_SECTIONS = [
    {
        title: 'Form',
        options: ['Fine', 'Flake', 'Granulated', 'Ground', 'Leaf, Dried', 'Pods', 'Powder', 'Whole']
    },
    {
        title: 'Type',
        options: ['Bay Leaves', 'Black Pepper', 'Cayenne Pepper', 'Ceylon Cinnamon', 'Chilli', 'Cinnamon', 'Garlic', 'Himalayan Pink Salt']
    },
    {
        title: 'Food Specifications',
        options: ['Caffeine Free', 'Fat Free', 'Gluten Free', 'GMO Free', 'Organic', 'Vegan']
    }
];

export default function ProductListFilters() {
    return (
        <Box sx={{ width: '100%', pr: 2 }}>
            <Stack spacing={3}>
                <Box>
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 1.5 }}>Postage to <Link href="#" sx={{ color: '#0053a0', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Sri Lanka</Link></Typography>
                </Box>

                <Divider />

                <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        Delivery and collection
                        <Typography component="span" variant="caption" sx={{ color: 'text.secondary', fontWeight: 400 }}>—</Typography>
                    </Typography>
                    <FormGroup>
                        {['Arrives in 1-3 days', 'Free international postage', 'Collection in person'].map((opt) => (
                            <FormControlLabel
                                key={opt}
                                control={<Checkbox size="small" sx={{ '&.Mui-checked': { color: 'text.primary' } }} />}
                                label={<Typography variant="body2" sx={{ fontSize: '0.85rem' }}>{opt}</Typography>}
                            />
                        ))}
                    </FormGroup>
                </Box>

                {FILTER_SECTIONS.map((section) => (
                    <Box key={section.title}>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {section.title}
                            <Typography component="span" variant="caption" sx={{ color: 'text.secondary', fontWeight: 400 }}>—</Typography>
                        </Typography>
                        <FormGroup>
                            {section.options.map((opt) => (
                                <FormControlLabel
                                    key={opt}
                                    control={<Checkbox size="small" sx={{ '&.Mui-checked': { color: 'text.primary' } }} />}
                                    label={<Typography variant="body2" sx={{ fontSize: '0.85rem' }}>{opt}</Typography>}
                                />
                            ))}
                        </FormGroup>
                        <Link href="#" sx={{ mt: 1, display: 'inline-block', fontSize: '0.85rem', color: '#0053a0', textDecoration: 'none' }}>see all</Link>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}

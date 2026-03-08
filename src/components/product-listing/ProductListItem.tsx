'use client';

import React from 'react';
import { Box, Typography, Stack, Chip, Divider, Link } from '@mui/material';
import Image from 'next/image';
import { SpiceProduct } from '@/data/spices';
import { useRouter } from 'next/navigation';
import { Info, Globe } from 'lucide-react';

interface Props {
    product: SpiceProduct;
    onQuickView?: (product: SpiceProduct) => void;
}

export default function ProductListItem({ product, onQuickView }: Props) {
    const router = useRouter();

    const handleSelect = () => {
        if (onQuickView) {
            onQuickView(product);
        } else {
            router.push(`/products/${product.id}`);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 3,
                py: 3,
                borderBottom: '1px solid #e5e5e5',
                '&:last-child': { borderBottom: 'none' },
                transition: 'background-color 0.2s',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.01)' }
            }}
        >
            {/* Image Container */}
            <Box
                onClick={handleSelect}
                sx={{
                    width: 240,
                    height: 240,
                    flexShrink: 0,
                    borderRadius: 2,
                    overflow: 'hidden',
                    bgcolor: '#f7f7f7',
                    cursor: 'pointer',
                    position: 'relative'
                }}
            >
                <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {product.form === 'Whole' && (
                    <Box sx={{ position: 'absolute', top: 12, left: 12, bgcolor: 'white', px: 1, py: 0.5, borderRadius: 1, boxShadow: 1 }}>
                        <Typography variant="caption" sx={{ fontWeight: 800 }}>{product.form}</Typography>
                    </Box>
                )}
            </Box>

            {/* Content Container */}
            <Box sx={{ flexGrow: 1 }}>
                <Typography
                    variant="h6"
                    onClick={handleSelect}
                    sx={{
                        fontSize: '1.25rem',
                        fontWeight: 400,
                        lineHeight: 1.2,
                        mb: 0.5,
                        color: '#111820',
                        cursor: 'pointer',
                        '&:hover': { color: '#0053a0', textDecoration: 'underline' }
                    }}
                >
                    {product.name}
                </Typography>

                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1.5 }}>
                    {product.condition}
                </Typography>

                <Stack direction="row" spacing={0.5} alignItems="flex-end" sx={{ mb: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        £{product.priceRange.min.toFixed(2)} to £{product.priceRange.max.toFixed(2)}
                    </Typography>
                </Stack>

                <Typography variant="body2" sx={{ fontWeight: 700, color: '#111820', mb: 0.5 }}>
                    Buy It Now
                </Typography>

                <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mb: 0.5 }}>
                    <Typography variant="body2" color="text.secondary">
                        + £{product.shipping.toFixed(2)} postage estimate
                    </Typography>
                    <Info size={14} color="#707070" style={{ cursor: 'help' }} />
                </Stack>

                {product.soldCount && (
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#111820', mb: 0.5 }}>
                        {product.soldCount}+ sold
                    </Typography>
                )}

                {product.promotions && product.promotions.map((promo) => (
                    <Typography key={promo} variant="body2" sx={{ fontWeight: 700, color: '#dd1e31', mb: 0.5 }}>
                        {promo}
                    </Typography>
                ))}

                <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mb: 1, color: '#007600' }}>
                    <Globe size={14} />
                    <Typography variant="caption" sx={{ fontWeight: 700 }}>
                        Ships from Sri Lanka • International Priority Shipping
                    </Typography>
                </Stack>

                <Box sx={{ mt: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Typography variant="caption" color="text.secondary" sx={{ bgcolor: '#f1f1f1', px: 1, py: 0.5, borderRadius: 1 }}>
                        Worldwide Shipping
                    </Typography>
                </Box>

                <Box sx={{ mt: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                        Customs services and international tracking provided
                    </Typography>
                </Box>

                <Box sx={{ mt: 1 }}>
                    <Typography variant="caption" sx={{ fontWeight: 400 }}>
                        <Link href="#" sx={{ color: '#111820', textDecoration: 'none', fontWeight: 700 }}>{product.seller.name}</Link>
                        {' '}{product.seller.positiveFeedback}% positive ({product.seller.totalRatings})
                    </Typography>
                </Box>

                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                    Sponsored
                </Typography>
            </Box>
        </Box>
    );
}

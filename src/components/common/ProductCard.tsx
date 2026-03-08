'use client';

import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, IconButton, Badge, Chip, Button, Stack } from '@mui/material';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    isNew?: boolean;
    category?: string;
}

export default function ProductCard({ product }: { product: Product }) {
    const router = useRouter();

    return (
        <Card
            sx={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    '& .product-overlay': { opacity: 1 }
                }
            }}
        >
            {product.isNew && (
                <Chip
                    label="NEW"
                    size="small"
                    color="primary"
                    sx={{ position: 'absolute', top: 12, left: 12, fontWeight: 700, borderRadius: 1.5, zIndex: 2 }}
                />
            )}

            <IconButton
                sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    backgroundColor: 'white',
                    zIndex: 2,
                    '&:hover': { backgroundColor: '#fff', color: 'error.main' },
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
                size="small"
            >
                <Heart size={18} />
            </IconButton>

            <Box sx={{ position: 'relative', cursor: 'pointer' }} onClick={() => router.push(`/products/${product.id}`)}>
                <CardMedia
                    component="img"
                    height="240"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: 'cover' }}
                />
                <Box className="product-overlay" sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                }}>
                    <Button variant="contained" size="small" startIcon={<Eye size={16} />} sx={{ borderRadius: 2, bgcolor: 'white', color: 'text.primary', '&:hover': { bgcolor: 'primary.main', color: 'white' } }}>
                        Quick View
                    </Button>
                </Box>
            </Box>

            <CardContent sx={{ flexGrow: 1, px: 2, py: 2 }}>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {product.category || 'Category'}
                </Typography>
                <Typography
                    variant="subtitle1"
                    onClick={() => router.push(`/products/${product.id}`)}
                    sx={{
                        fontWeight: 700,
                        mb: 1,
                        lineHeight: 1.3,
                        height: 44,
                        overflow: 'hidden',
                        cursor: 'pointer',
                        '&:hover': { color: 'primary.main' }
                    }}
                >
                    {product.name}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 0.5 }}>
                    <Star size={14} color="#FFB01F" fill="#FFB01F" />
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>{product.rating}</Typography>
                    <Typography variant="body2" color="text.secondary">({product.reviews})</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                        <Stack direction="row" alignItems="baseline" spacing={1}>
                            <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary' }}>
                                ${product.price}
                            </Typography>
                            {product.originalPrice && (
                                <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.secondary', fontWeight: 500 }}>
                                    ${product.originalPrice}
                                </Typography>
                            )}
                        </Stack>
                    </Box>
                    <IconButton sx={{ bgcolor: 'rgba(0, 97, 255, 0.05)', color: 'primary.main', borderRadius: 2, '&:hover': { bgcolor: 'primary.main', color: 'white' } }}>
                        <ShoppingCart size={20} />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
}

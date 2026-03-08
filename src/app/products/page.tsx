"use client";

import React, { useState } from 'react';
import Header from "@/components/header/Header";
import ProductListFilters from "@/components/product-listing/ProductListFilters";
import ProductListItem from "@/components/product-listing/ProductListItem";
import ProductListFooter from "@/components/product-listing/ProductListFooter";
import ProductQuickView from "@/components/product-listing/ProductQuickView";
import { SPICES, SpiceProduct } from "@/data/spices";
import {
    Container,
    Grid,
    Typography,
    Box,
    Stack,
    Breadcrumbs,
    Link,
    IconButton,
    Menu,
    MenuItem
} from "@mui/material";
import { ChevronRight, MoreVertical } from "lucide-react";

export default function ProductsPage() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedProduct, setSelectedProduct] = useState<SpiceProduct | null>(null);
    const [quickViewOpen, setQuickViewOpen] = useState(false);

    const handleQuickView = (product: SpiceProduct) => {
        setSelectedProduct(product);
        setQuickViewOpen(true);
    };

    return (
        <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>
            <Header />

            <Container maxWidth="xl" sx={{ py: 2 }}>
                {/* Breadcrumbs */}
                <Breadcrumbs
                    separator={<ChevronRight size={14} />}
                    sx={{ mb: 2, '& .MuiTypography-root': { fontSize: '0.75rem', fontWeight: 400 } }}
                >
                    <Link underline="hover" color="inherit" href="/">Home</Link>
                    <Link underline="hover" color="inherit" href="/products">Products</Link>
                    <Typography color="text.primary">Sri Lankan Spices</Typography>
                </Breadcrumbs>

                <Grid container spacing={4}>
                    {/* Filters Sidebar */}
                    <Grid size={{ xs: 12, md: 2.5 }}>
                        <ProductListFilters />
                    </Grid>

                    {/* Product List Content */}
                    <Grid size={{ xs: 12, md: 9.5 }}>
                        <Box sx={{ borderBottom: '1px solid #e5e5e5', pb: 1, mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <Typography variant="h5" sx={{ fontWeight: 400, fontSize: '1.5rem' }}>
                                {SPICES.length} results for <Box component="span" sx={{ fontWeight: 700 }}>Sri Lankan spices</Box>
                            </Typography>
                            <IconButton size="small" onClick={(e) => setAnchorEl(e.currentTarget)}>
                                <MoreVertical size={20} />
                            </IconButton>
                            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                                <MenuItem onClick={() => setAnchorEl(null)}>Best Match</MenuItem>
                                <MenuItem onClick={() => setAnchorEl(null)}>Price + Postage: lowest first</MenuItem>
                                <MenuItem onClick={() => setAnchorEl(null)}>Price + Postage: highest first</MenuItem>
                            </Menu>
                        </Box>

                        <Stack divider={<Box sx={{ height: 1, bgcolor: '#e5e5e5' }} />}>
                            {SPICES.map((product) => (
                                <ProductListItem
                                    key={product.id}
                                    product={product}
                                    onQuickView={handleQuickView}
                                />
                            ))}
                        </Stack>

                        <Box sx={{ py: 8, textAlign: 'center', color: 'text.secondary' }}>
                            <Typography variant="body2">End of search results.</Typography>
                        </Box>

                        <ProductListFooter />
                    </Grid>
                </Grid>
            </Container>

            <ProductQuickView
                product={selectedProduct}
                open={quickViewOpen}
                onClose={() => setQuickViewOpen(false)}
            />
        </Box>
    );
}

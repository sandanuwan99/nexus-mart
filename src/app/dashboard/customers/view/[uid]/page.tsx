"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";

export default function CustomerViewPage({ params }: { params: { uid: string } }) {
    const router = useRouter();

    return (
        <DashboardLayout>
            <Box p={3}>
                <Button
                    size="small"
                    onClick={() => router.push("/dashboard/customers")}
                    variant="contained"
                    startIcon={<KeyboardReturnIcon />}
                    sx={{ mb: 3 }}
                >
                    Back to Customers
                </Button>
                <Typography variant="h4">Viewing Customer Detail</Typography>
                <Typography variant="body1">UID: {params.uid}</Typography>
                <Typography mt={2}>
                    This page is currently a placeholder. Form components will be populated here.
                </Typography>
            </Box>
        </DashboardLayout>
    );
}

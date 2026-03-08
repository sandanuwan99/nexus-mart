"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ReactNode } from "react";

type DashboardLayoutProps = {
    children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <Box display="flex" height="100vh" sx={{ overflow: 'hidden' }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <Box
                component="main"
                flex={1}
                sx={{
                    height: '100vh',
                    overflow: 'auto',
                    bgcolor: 'background.default',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    {children}
                </LocalizationProvider>
            </Box>
        </Box>
    );
}

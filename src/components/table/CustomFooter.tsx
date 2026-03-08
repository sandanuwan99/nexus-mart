import { GridFooterContainer, GridPagination, useGridApiContext } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

export function CustomFooter() {
    const apiRef = useGridApiContext();

    // Get pagination state
    const page = apiRef.current.state.pagination.paginationModel.page; // zero-based
    const pageSize = apiRef.current.state.pagination.paginationModel.pageSize;
    const rowCount = apiRef.current.state.pagination.rowCount ?? 0;

    const from = rowCount === 0 ? 0 : page * pageSize + 1;
    const to = Math.min((page + 1) * pageSize, rowCount);

    return (
        <GridFooterContainer sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
            {/* Left side: pagination details */}
            <Typography variant="body2">
                {`${to - from + 1} of ${rowCount} row(s) shown`}
            </Typography>

            {/* Right side: pagination */}
            <GridPagination />
        </GridFooterContainer>
    );
}

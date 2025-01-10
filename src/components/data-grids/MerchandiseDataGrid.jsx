import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useMemo } from "react";
import { Button, IconButton } from "@mui/material";
import { Edit } from "lucide-react";
import Table from "../tables/templates/Table";
import { getMerchandiseImage } from "../../utilities/imageHelpers";

const MerchandiseDataGrid = React.memo(
  ({ rows = [], loading = false, onImageClick = () => {} }) => {
    // Define columns using useMemo to prevent re-renders
    const columns = useMemo(
      () => [
        { field: "id", headerName: "SKU", width: 150 },
        { field: "image_url", headerName: "Image", width: 150 },
        { field: "name", headerName: "Name", width: 220 },
        { field: "category", headerName: "Category", width: 220 },
        { field: "size", headerName: "Size", width: 220 },
        { field: "color", headerName: "Color", width: 220 },
        { field: "price", headerName: "Price", width: 220 },
        { field: "quantity", headerName: "Quantity", width: 220 },
        { field: "updated_at", headerName: "Last Updated", width: 220 },
        { field: "description", headerName: "Description", width: 220 },
        { field: "actions", headerName: "Actions", width: 150 },
      ],
      [] // Empty dependency array ensures this is only created once
    );

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <>
        <Table columns={columns} loading={loading}>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => {
                const value = row[column.field];
                return (
                  <td
                    key={column.field}
                    style={{
                      padding: "8px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    {column.field === "image_url" ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                        onClick={() => onImageClick(row.image_url)}
                      >
                        <img
                          src={getMerchandiseImage(row.image_url)}
                          alt={row.name}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    ) : column.field === "color" ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: value,
                          }}
                        ></span>
                      </div>
                    ) : column.field === "actions" ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button>
                          <IconButton color="primary" aria-label="edit">
                            <Edit />
                          </IconButton>
                        </Button>
                      </div>
                    ) : (
                      value
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </Table>
      </>
    );
  },
  (prevProps, nextProps) =>
    prevProps.rows === nextProps.rows &&
    prevProps.loading === nextProps.loading &&
    prevProps.onImageClick === nextProps.onImageClick
);

export default MerchandiseDataGrid;

// import "./style.scss";
import React from "react";
import { Table as SemanticTable } from "semantic-ui-react";
import {
  useTable,
  Column,
  useSortBy,
  HeaderGroup,
  Row,
  Cell,
} from "react-table";
// import { TableSortLabel } from "@material-ui/core";

type TableProps = {
  /** Make sure you have accessor propety for your columns for sort to work. */
  columns: Column[];
  data: any[];
  tableProps?: any;
  className?: string;
  hooks?: any[];
};

function Table({
  columns,
  data,
  tableProps = {},
  className = "",
  hooks = [],
}: TableProps) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    ...hooks
  );

  // Render the UI for your table
  return (
    <TableUI
      getTableProps={getTableProps}
      className={className}
      tableProps={tableProps}
      headerGroups={headerGroups}
      prepareRow={prepareRow}
      rows={rows}
    />
  );
}

export default Table;

export const TableUI = ({
  getTableProps,
  className,
  tableProps = {},
  headerGroups,
  prepareRow,
  page,
  rows,
}: {
  getTableProps: (props?: object | undefined) => object;
  className: string;
  tableProps?: object;
  headerGroups: HeaderGroup<object>[];
  prepareRow: (row: Row<object>) => void;
  page?: any[];
  rows: Row<object>[];
}) => {
  return (
    <div className="DMRTableWrapper">
      <SemanticTable
        fixed
        {...getTableProps()}
        className={`DMRTable ${className}`}
        {...tableProps}
      >
        <SemanticTable.Header>
          {headerGroups.map((headerGroup, idx) => (
            <SemanticTable.Row key={idx} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, idx2) => (
                <SemanticTable.HeaderCell
                  key={idx2}
                  className={`header-${idx}`}
                  style={{
                    width: column.width,
                  }}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  title={
                    column.Header && !column.disableSortBy
                      ? `Sort By ${column.Header}`
                      : ""
                  }
                  sorted={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "descending"
                        : "ascending"
                      : undefined
                  }
                >
                  {/* <TableSortLabel
                    active={column.isSorted}
                    direction={column.isSortedDesc ? "desc" : "asc"}
                    hideSortIcon={!column.isSorted}
                    disabled={column.disableSortBy}
                  > */}
                  {column.render("Header")}
                  {/* </TableSortLabel> */}
                </SemanticTable.HeaderCell>
              ))}
            </SemanticTable.Row>
          ))}
        </SemanticTable.Header>
        <SemanticTable.Body>
          {(page ? page : rows).map((row, i) => {
            prepareRow(row);
            return (
              <SemanticTable.Row {...row.getRowProps()}>
                {row.cells.map((cell: Cell) => {
                  return (
                    <SemanticTable.Cell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </SemanticTable.Cell>
                  );
                })}
              </SemanticTable.Row>
            );
          })}
        </SemanticTable.Body>
      </SemanticTable>
    </div>
  );
};

import { TableUI } from "../../components/Table";
import { useTable, useSortBy, usePagination } from "react-table";
import { Pagination } from "semantic-ui-react";
import { useMemo } from "react";
const Results = () => {
  const data = useMemo(() => [{ test: "hello" }, { test: "world" }], []);

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    // pagination only
    page,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: [
        {
          id: "NoHeader",
          columns: [
            {
              Header: "test",
              accessor: "test",
            },
          ],
        },
      ],
      data,
    },
    useSortBy,
    usePagination
  );
  return (
    <div className="Results">
      <h1>Results</h1>
      <div>Table here</div>
      {/* <TableUI
        getTableProps={getTableProps}
        className="POF-table"
        headerGroups={headerGroups}
        prepareRow={prepareRow}
        page={page}
        rows={rows}
      /> */}
      <Pagination totalPages={data.length} />
    </div>
  );
};

export default Results;

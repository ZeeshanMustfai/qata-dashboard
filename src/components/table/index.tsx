import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
	Box,
	Button,
	Card,
	InputLabel,
	Pagination,
	TextField,
	Typography,
} from "@mui/material";
import { usePagination, useTable } from "react-table";

interface TReactTable {
	data: any;
	columns: any;
	title?: string;
	name?: string;
}
const ReactTable = ({ data, columns, title, name }: TReactTable) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow, // @ts-ignore
		page, // @ts-ignore
		canPreviousPage, // @ts-ignore
		canNextPage, // @ts-ignore
		pageOptions, // @ts-ignore
		pageCount, // @ts-ignore
		gotoPage, // @ts-ignore
		nextPage, // @ts-ignore
		previousPage, // @ts-ignore
		setPageSize, // @ts-ignore
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data, // @ts-ignore
			initialState: { pageSize: 10 },
		},
		usePagination
	);

	return (
		<Card sx={{ overflow: "auto" }}>
			<Typography className="totalVisitors">{title}</Typography>
			<Table {...getTableProps()} style={{ overflowX: "auto" }}>
				<TableHead>
					{headerGroups.map((headerGroup: any) => (
						<TableRow {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column: any) => (
								<TableCell {...column.getHeaderProps()}>
									{column.render("Header")}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableHead>
				<TableBody {...getTableBodyProps()}>
					{page.map((row: any) => {
						prepareRow(row);
						return (
							<TableRow {...row.getRowProps()}>
								{row.cells.map((cell: any) => {
									return (
										<TableCell {...cell.getCellProps()}>
											{cell.render("Cell")}
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
			{name === "visitors" ? (
				""
			) : (
				<Box className="pagination">
					<Button
						className="page-item"
						onClick={() => gotoPage(0)}
						disabled={!canPreviousPage}
						variant="outlined"
						color="secondary"
						sx={{ display: { xs: "none", sm: "block" } }}
					>
						First
					</Button>
					<Button
						className="page-item"
						onClick={() => previousPage()}
						disabled={!canPreviousPage}
						color="secondary"
						sx={{ ml: 1 }}
					>
						{"<"}
					</Button>
					<Button
						className="page-item"
						onClick={() => nextPage()}
						disabled={!canNextPage}
						color="secondary"
						sx={{ ml: 1 }}
					>
						{">"}
					</Button>
					<Button
						className="page-item"
						onClick={() => gotoPage(pageCount - 1)}
						disabled={!canNextPage}
						color="secondary"
						sx={{ ml: 1, display: { xs: "none", sm: "block" } }}
					>
						Last
					</Button>
					<InputLabel sx={{ ml: 1 }}>
						<a className="page-link">
							Page{" "}
							<strong>
								{pageIndex + 1} of {pageOptions.length}
							</strong>{" "}
						</a>
					</InputLabel>

					<TextField
						className="form-control"
						type="number"
						defaultValue={pageIndex + 1}
						onChange={(e) => {
							const page = e.target.value ? Number(e.target.value) - 1 : 0;
							gotoPage(page);
						}}
						style={{ width: "100px", height: "20px" }}
						size="small"
						sx={{ ml: 1, display: { xs: "none", sm: "block" } }}
					/>
				</Box>
			)}
		</Card>
	);
};

export default ReactTable;

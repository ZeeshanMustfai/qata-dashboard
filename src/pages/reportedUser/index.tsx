import React, { useState } from "react";
import { PageHeader } from "../../components/header/inext";
import ReportCard from "../../components/card/ReportCard";
import {
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";

const ReportedUser = () => {
	const [day, setDay] = useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setDay(event.target.value);
	};
	return (
		<div>
			<PageHeader title="Reported User">
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Button>Completed</Button>
					<FormControl
						sx={{
							m: 1,
							minWidth: 120,
							background: "#233F35",
							borderRadius: "8px",
						}}
						variant="outlined"
						size="small"
					>
						<InputLabel id="demo-select-small-label" sx={{ color: "#fff" }}>
							All
						</InputLabel>
						<Select
							labelId="demo-select-small-label"
							id="demo-select-small"
							value={day}
							label="Age"
							onChange={handleChange}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Yesterday</MenuItem>
							<MenuItem value={20}>Last 7 days</MenuItem>
							<MenuItem value={30}>Last 30 days</MenuItem>
							<MenuItem value={40}>Last 60 days</MenuItem>
							<MenuItem value={50}>Last 90 days</MenuItem>
							<MenuItem value={60}>Last Year</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</PageHeader>
			<Grid container spacing={3}>
				{[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
					<ReportCard key={item} />
				))}
			</Grid>
		</div>
	);
};

export default ReportedUser;

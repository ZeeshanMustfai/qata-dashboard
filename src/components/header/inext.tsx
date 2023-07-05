import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";
import styles from "../../styles/components/header.module.scss";

interface TPageHeader {
	title: string;
	children?: ReactNode;
}

interface TSlideHeader {
	title: string;
}
const PageHeader = ({ title, children }: TPageHeader) => {
	return (
		<Box className={styles.headerMain}>
			<Typography className={styles.headerTitle}>{title}</Typography>
			<Box>{children}</Box>
		</Box>
	);
};

const LineSliderHeader = ({ title }: TSlideHeader) => {
	const [day, setDay] = useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setDay(event.target.value);
	};
	return (
		<Box className={styles.headerMain}>
			<Typography className={"totalVisitors"}>{title}</Typography>
			<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
				<InputLabel id="demo-select-small-label">Today</InputLabel>
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
	);
};

export { PageHeader, LineSliderHeader };

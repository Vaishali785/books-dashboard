"use client"
import { ResponsiveBar } from "@nivo/bar"

const BarChart = ({ data /* see data tab */ }) => (
	<ResponsiveBar /* or Bar for fixed dimensions */
		data={data}
		indexBy="day"
		groupMode="grouped"
		labelSkipWidth={12}
		labelSkipHeight={12}
		// legends={[
		// 	{
		// 		dataFrom: "keys",
		// 		anchor: "bottom-right",
		// 		direction: "column",
		// 		// translateX: 120,
		// 		itemsSpacing: 3,
		// 		itemWidth: 100,
		// 		itemHeight: 16,
		// 	},
		// ]}
		keys={["pages"]}
		colors="#1d108f"
		padding={0.5}
		axisBottom={{ legend: "Days", legendOffset: 32 }}
		// axisLeft={{ legend: "food", legendOffset: -40 }}
		axisLeft={{ legend: "Pages Read", legendOffset: -40, tickValues: 5 }}
		margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
		theme={{
			text: {
				fill: "#fff",
			},
			axis: {
				domain: {
					line: {
						stroke: "#1d108f", // 👈 this shows the axis lines
						strokeWidth: 1,
					},
				},
				ticks: {
					line: {
						stroke: "#1d108f",
						strokeWidth: 1,
					},
					text: {
						fill: "#1d108f",
					},
				},
				legend: {
					text: {
						fill: "#1d108f",
					},
				},
			},
			grid: {
				line: {
					stroke: "#1d108f11",
				},
			},
			tooltip: {
				container: {
					background: "#1d108f8f",
					color: "white",
				},
			},
		}}
		animate={true}
		enableLabel={true}
		// tooltip={({ id, value, color }) => (
		// 	<div
		// 		className="bg-light-primary/74 text-light-secondary w-full p-4 rounded-xl"
		// 		// style={{
		// 		// 	padding: "8px 12px",
		// 		// 	background: "white",
		// 		// 	color: "#333",
		// 		// 	border: `1px solid ${color}`,
		// 		// 	borderRadius: "4px",
		// 		// 	fontSize: 12,
		// 		// 	width: "fit-content",
		// 		// }}
		// 	>
		// 		{id}:{value}
		// 	</div>
		// )}
	/>
)

export default BarChart

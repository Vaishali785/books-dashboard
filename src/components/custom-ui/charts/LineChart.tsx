"use client"
import { ResponsiveLine } from "@nivo/line"
import { Container } from "lucide-react"

const LineChart = ({ data /* see data tab */ }) => (
	<ResponsiveLine /* or Line for fixed dimensions */
		data={data}
		curve="monotoneX"
		margin={{ bottom: 50, left: 50, top: 20, right: 20 }}
		// yScale={{
		// 	type: "linear",
		// 	min: "auto",
		// 	max: "auto",
		// 	stacked: true,
		// 	reverse: false,
		// }}
		axisBottom={{ legend: "Transportation", legendOffset: 36 }}
		axisLeft={{ legend: "Count", legendOffset: -40, tickValues: 5 }}
		// pointSize={10}
		// pointColor={{ theme: "background" }}
		// pointBorderWidth={2}
		// pointBorderColor={{ from: "seriesColor" }}
		enableGridX={false} // ❌ Hide vertical grid lines
		enableGridY={false}
		// colors="#1d108f"
		colors={{ scheme: "purple_red" }}
		theme={{
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
			tooltip: {
				container: {
					background: "#1d108f8f",
					color: "white",
				},
			},
		}}
		// pointLabelYOffset={-12}
		enableTouchCrosshair={true}
		useMesh={true}
		// legends={[
		// 	{
		// 		anchor: "bottom-right",
		// 		direction: "column",
		// 		// translateX: 100,
		// 		itemWidth: 80,
		// 		itemHeight: 22,
		// 		symbolShape: "circle",
		// 	},
		// ]}
	/>
)

export default LineChart

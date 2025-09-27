"use client"
import { ResponsivePie } from "@nivo/pie"

const PieChart = ({ data /* see data tab */ }) => (
	<ResponsivePie /* or Pie for fixed dimensions */
		data={data}
		margin={{ top: 10, right: 80, bottom: 80, left: 80 }}
		innerRadius={0.5}
		padAngle={0.6}
		cornerRadius={2}
		enableArcLabels={false}
		activeOuterRadiusOffset={8}
		arcLinkLabel={(d) => `${d.id} (${d.value})`}
		arcLinkLabelsSkipAngle={10}
		arcLinkLabelsTextColor="#333"
		arcLinkLabelsThickness={2}
		arcLinkLabelsColor={{ from: "color" }}
		arcLabelsSkipAngle={10}
		// arcLabelsTextColor={{ from: "color", modifiers: [["brighter", 3]] }}
		colors={{ scheme: "purpleRed_green" }}
		legends={[
			{
				anchor: "bottom",
				direction: "row",
				translateY: 56,
				itemWidth: 100,
				itemHeight: 18,
				symbolShape: "circle",
			},
		]}
		theme={{
			tooltip: {
				container: {
					background: "#1d108fae",
				},
			},
		}}
	/>
)

export default PieChart

import KPICard from "../components/ui/KPICard"

function KPIs() {
	// tab: one line - 640 -1024
	//
	return (
		// <div className="flex gap-4 max-md:flex-wrap">
		// 	<div className="flex gap-4  flex-col ">
		// 		<KPICard cardCount="4" cardTitle={"Reading Streak"} />
		// 		<KPICard cardCount="345" cardTitle={"Total Pages Read"} />
		// 	</div>
		// 	<div className="flex gap-4 flex-col ">
		// 		<KPICard cardCount="1" cardTitle={"Books Read This Month"} />
		// 		<KPICard cardCount="10 / 12" cardTitle={"Annual Goal"} />
		// 	</div>
		// </div>
		<div className="grid grid-cols-2 gap-4 md:max-lg:grid-cols-4">
			{/* <div className="flex gap-4  flex-col "> */}
			<KPICard cardCount="4" cardTitle={"Reading Streak"} />
			<KPICard cardCount="1" cardTitle={"Books Read This Month"} />
			{/* </div>
			<div className="flex gap-4 flex-col "> */}
			<KPICard cardCount="345" cardTitle={"Total Pages Read"} />
			<KPICard cardCount="10 / 12" cardTitle={"Annual Goal"} />
			{/* </div> */}
		</div>
	)
}

export default KPIs

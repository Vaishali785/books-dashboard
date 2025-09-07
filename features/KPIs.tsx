import KPICard from "../components/ui/KPICard"

function KPIs() {
	return (
		<div className="flex gap-4">
			<div className="flex gap-4 flex-col">
				<KPICard cardCount="4" cardTitle={"Reading Streak"} />
				<KPICard cardCount="345" cardTitle={"Total Pages Read"} />
			</div>
			<div className="flex gap-4 flex-col">
				<KPICard cardCount="1" cardTitle={"Books Read This Month"} />
				<KPICard cardCount="10 / 12" cardTitle={"Annual Goal"} />
			</div>
		</div>
	)
}

export default KPIs

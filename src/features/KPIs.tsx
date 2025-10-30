"use client"
import {
	calculateBooksReadThisMonth,
	calculateTotalBooksRead,
	calculateTotalPagesRead,
} from "@/lib/utils"
import { useEffect, useState } from "react"
import KPICard from "../components/custom-ui/KPICard"

function KPIs() {
	const [booksReadThisMonth, setBooksReadThisMonth] = useState<number | "-">(
		"-"
	)
	const [totalBooksRead, setTotalBooksRead] = useState<number | "-">("-")
	const [totalPagesRead, setTotalPagesRead] = useState<number | "-">("-")

	useEffect(() => {
		const booksThisMonth = calculateBooksReadThisMonth() ?? "-"
		const totalBooks = calculateTotalBooksRead() ?? "-"
		const totalPages = calculateTotalPagesRead() ?? "-"
		setBooksReadThisMonth(booksThisMonth)
		setTotalBooksRead(totalBooks)
	}, [])
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
			<KPICard cardCount={totalBooksRead} cardTitle={"Total Books Read"} />
			<KPICard
				cardCount={booksReadThisMonth}
				cardTitle={"Books Read This Month"}
			/>
			{/* </div>
			<div className="flex gap-4 flex-col "> */}
			<KPICard cardCount={totalPagesRead} cardTitle={"Total Pages Read"} />
			<KPICard cardCount="10 / 12" cardTitle={"Annual Goal"} />
			{/* </div> */}
		</div>
	)
}

export default KPIs

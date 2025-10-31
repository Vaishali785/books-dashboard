"use client"
import { getRecentFavQuote } from "@/lib/utils"
import GlassCard from "../components/custom-ui/GlassCard"

function FavQuoteDashboard() {
	const bookWithQuote = getRecentFavQuote()
	const favQuote = bookWithQuote?.favQuote || "Viva La Vida"
	const bookName = bookWithQuote?.name || "Twinkling Watermelon"

	return (
		<GlassCard cardBg="p-6 px-8 bg-light-primary/44 max-sm:max-w-[600] flex  flex-col justify-evenly sm:max-lg:w-full lg:flex-1">
			{/* <div className="flex flex-col "> */}
			<div className="text-light-secondary text-sm">Last Favorite Quote</div>

			<blockquote className="text-light-secondary text-3xl font-bold">
				{favQuote}
			</blockquote>
			<div className="text-light-secondary text-sm">-{bookName}</div>
			{/* </div> */}
		</GlassCard>
	)
}

export default FavQuoteDashboard

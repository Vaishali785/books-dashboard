"use client"
import clsx from "clsx"
import { QuoteIcon } from "lucide-react"
import GlassCard from "../components/custom-ui/GlassCard"

function FavQuote({
	quote,
	bookTitle,
	customClasses,
	hideFavQuoteHeading,
	showQuotesIcon,
}: {
	quote?: string
	bookTitle?: string
	customClasses?: string
	hideFavQuoteHeading?: boolean
	showQuotesIcon?: boolean
}) {
	const favQuote = quote || "Viva La Vida"
	const bookName = bookTitle || "Twinkling Watermelon"

	return (
		<GlassCard
			cardBg={clsx(
				"p-6 px-8 bg-light-primary/44 max-sm:max-w-[600] flex  flex-col items-center justify-center sm:max-lg:w-full lg:flex-1",
				customClasses
			)}
		>
			{showQuotesIcon && (
				<span>
					<QuoteIcon />
				</span>
			)}
			<div className="flex justify-center flex-col h-full text-center gap-2">
				<blockquote className="text-light-secondary text-3xl font-bold">
					{favQuote}
				</blockquote>
				<div className="text-light-secondary text-sm">-{bookName}</div>
			</div>
			{/* </div> */}
		</GlassCard>
	)
}

export default FavQuote

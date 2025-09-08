import GlassCard from "../components/custom-ui/GlassCard"
type Props = {
	quote: string
	book: string
}

function FavQuote({ quote, book }: Props) {
	return (
		<GlassCard cardBg="p-6 px-8 bg-light-primary/44 max-sm:max-w-[600] flex  flex-col justify-evenly sm:max-lg:w-full lg:flex-1">
			{/* <div className="flex flex-col "> */}
			<div className="text-light-secondary text-sm">Last Favorite Quote</div>
			<blockquote className="text-light-secondary text-3xl font-bold">
				{quote}
			</blockquote>
			<div className="text-light-secondary text-sm">-{book}</div>
			{/* </div> */}
		</GlassCard>
	)
}

export default FavQuote

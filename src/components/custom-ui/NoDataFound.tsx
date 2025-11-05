import GlassCard from "./GlassCard"

function NoDataFound() {
	return (
		<div className="h-3/4 w-full flex items-center justify-center">
			<GlassCard classes="text-xl text-light-primary w-3/4 flex items-center justify-center">
				No Data Found!
			</GlassCard>
		</div>
	)
}

export default NoDataFound

import GlassCard from "./GlassCard"

type Props = {
	cardCount: string
	cardTitle: string
}
function KPICard({ cardCount, cardTitle }: Props) {
	return (
		<GlassCard classes="px-8 text-light-primary w-full">
			<div className="flex items-center flex-col">
				<div className="font-bold text-3xl">{cardCount}</div>
				<div className="text-sm">{cardTitle}</div>
			</div>
		</GlassCard>
	)
}

export default KPICard

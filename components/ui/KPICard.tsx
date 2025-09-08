import GlassCard from "./GlassCard"

type Props = {
	cardCount: string
	cardTitle: string
}
function KPICard({ cardCount, cardTitle }: Props) {
	return (
		<GlassCard classes=" text-light-primary w-full">
			<div className="flex items-center flex-col">
				<div className="font-bold text-3xl briem-bold-font">{cardCount}</div>
				<div className="text-sm briem-regular-font">{cardTitle}</div>
			</div>
		</GlassCard>
	)
}

export default KPICard

import LineChart from "@/components/custom-ui/charts/LineChart"
import PieChart from "@/components/custom-ui/charts/PieChart"
import GlassCard from "@/components/custom-ui/GlassCard"
import FavQuote from "@/features/FavQuoteDashboard"
import KPIs from "@/features/KPIs"
import { genreData, lineData } from "@/lib/data"

export default function Home() {
	return (
		<>
			<div className="flex gap-6 justify-end sm:max-lg:flex-wrap sm:max-lg:flex-col sm:max-lg:w-full">
				<KPIs />
				<FavQuote />
			</div>
			<div className="flex md:justify-between  mt-6 sm:max-lg:flex-wrap ">
				<div className="flex flex-col max-md:w-full md:w-[48.5%] w-[490px] gap-4">
					<GlassCard classes="w-full h-[200px] p-0">
						<LineChart data={lineData} />
						{/* <BarChart data={pagesReadData} /> */}
					</GlassCard>
					<GlassCard classes="h-[200px] w-full">
						<h1 className="p-4">Hello World</h1>
					</GlassCard>
				</div>
				<GlassCard
					classes="max-md:w-full md:w-[48.5%] w-[490px] h-[415px]"
					cardBg="bg-light-primary/24"
				>
					<PieChart data={genreData} />
				</GlassCard>
			</div>
		</>
	)
}

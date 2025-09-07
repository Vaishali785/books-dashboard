import GlassCard from "../../components/ui/GlassCard"
import ThemeBgImage from "../../components/ui/ThemeBgImage"
import DesktopHeader from "../../components/layout/DesktopHeader"
import KPIs from "../../features/KPIs"
import FavQuote from "../../features/FavQuote"

export default function Home() {
	return (
		<main className="relative h-screen w-screen p-4">
			<ThemeBgImage />
			<DesktopHeader />

			<div className="flex gap-6 justify-between">
				<GlassCard classes="w-full">
					<span>Hello</span>
				</GlassCard>
				<div>
					<div className="flex gap-6 justify-end">
						<KPIs />
						<FavQuote
							quote="Experience is what you get when you didn’t get what you wanted."
							book="The Last Lecture"
						/>
					</div>
					<div className="flex justify-end gap-6 mt-6">
						<div className="flex flex-col w-[490px] gap-4">
							<GlassCard classes="w-full h-[200px]">
								<h1 className="p-4">Hello World</h1>
							</GlassCard>
							<GlassCard classes="h-[200px] w-full">
								<h1 className="p-4">Hello World</h1>
							</GlassCard>
						</div>
						<GlassCard classes="w-[490px] h-[415px]">
							<h1 className="p-4">Hello World</h1>
						</GlassCard>
					</div>
				</div>
			</div>

			{/* <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
				
			</div> */}
		</main>
	)
}

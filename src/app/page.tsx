import GlassCard from "./components/GlassCard"
import ThemeBgImage from "./components/ThemeBgImage"

export default function Home() {
	return (
		<div className="relative h-screen w-screen p-4">
			<ThemeBgImage
			// lightBgImage={"/theme_images/Cherry_Blossom.jpeg"}
			// darkBgImage={"/theme_images/theme-dark.jpeg"}
			/>
			<GlassCard>
				<h1 className="p-4">Hello World</h1>
			</GlassCard>

			{/* <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
				
			</div> */}
		</div>
	)
}

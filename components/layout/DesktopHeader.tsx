import GlassCard from "../ui/GlassCard"
import SearchBar from "../ui/SearchBar"
import ThemeToggle from "../ui/ThemeToggle"
import UserAvatar from "../ui/UserAvatar"

function DesktopHeader() {
	return (
		<div className="flex gap-6 w-full">
			{/* <div className="w-2/7 h-[30px]"></div> */}
			<div className="z-10 relative flex gap-6 mb-6 px-4 justify-between w-full">
				<div className="text-light-primary font-bold text-2xl">Hi Vaishali</div>
				<div className="flex gap-6">
					<SearchBar />
					<div className="flex gap-6 justify-end">
						<ThemeToggle />
						<div>
							<UserAvatar />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DesktopHeader

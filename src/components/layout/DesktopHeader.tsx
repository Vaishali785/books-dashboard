import Button from "../custom-ui/ModelWithButton"
import GlassCard from "../custom-ui/GlassCard"
import SearchBar from "../custom-ui/SearchBar"
import ThemeToggle from "../custom-ui/ThemeToggle"
import UserAvatar from "../custom-ui/UserAvatar"
import ModelWithButton from "../custom-ui/ModelWithButton"

function DesktopHeader() {
	return (
		<div className="flex gap-6 w-full">
			{/* <div className="w-2/7 h-[30px]"></div> */}
			<div className="z-10 relative flex gap-6 mb-6 px-4 justify-between items-center w-full">
				<div className="text-white lg:text-light-primary font-bold text-2xl">
					Hi Vaishali
				</div>
				<div className="flex gap-6">
					<SearchBar />
					<ModelWithButton
						title="Add Book"
						icon="Plus"
						size={12}
						modelTitle="Add New Book"
						modelDesc="Enter details below to add a new book to your collection."
					></ModelWithButton>
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

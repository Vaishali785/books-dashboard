import * as Icons from "lucide-react"

import Link from "next/link"
import { DynamicIcon } from "../custom-ui/DynamicIcons"
import clsx from "clsx"

type IconName = keyof typeof Icons

type MenuOption = { name: string; link: string; icon: IconName; size?: "large" }

const allUsersMenuOptions: MenuOption[] = [
	{ name: "Home", link: "/home", icon: "Home" },
]
const loggedInUserOptions: MenuOption[] = [
	{ name: "Favorites", link: "/favorites", icon: "Heart" },
	{
		name: "Recommendations",
		link: "/recommendatins",
		icon: "Sparkles",
		size: "large",
	},
	{ name: "Fav Quotes", link: "/fav-quotes", icon: "Quote" },
	{ name: "Settings", link: "/settings", icon: "Settings" },
]
function DesktopSidebar() {
	return (
		<div className="flex items-center flex-col">
			<div className="py-6 bg-accent w-full mb-4">Logo</div>
			{allUsersMenuOptions.map((option) => (
				<Link
					key={option.name}
					href={option.link}
					className="text-light-primary briem-bold-font my-2 hover:bg-light-primary hover:text-light-secondary w-full pt-2 pb-2.5 px-4 rounded-xl flex items-end gap-2"
				>
					<DynamicIcon
						name={option.icon}
						className={clsx(
							"w-5 h-5",
							option?.size == "large" ? "scale-125" : ""
						)}
					/>

					{option.name}
				</Link>
			))}
			{loggedInUserOptions.map((option) => (
				<Link
					key={option.name}
					href={option.link}
					className="text-light-primary briem-bold-font my-2 hover:bg-light-primary hover:text-light-secondary w-full pt-2 pb-2.5 px-4 rounded-xl flex items-end gap-2"
				>
					<DynamicIcon
						name={option.icon}
						className={clsx(
							"w-5 h-5",
							option?.size == "large" ? "scale-150" : ""
						)}
					/>
					{option.name}
				</Link>
			))}
		</div>
	)
}

export default DesktopSidebar

"use client"

import { allUsersMenuOptions, loggedInUserOptions } from "@/lib/data"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { DynamicIcon } from "../custom-ui/DynamicIcons"

function Sidebar() {
	function getActiveNavItem(link: string) {
		const path = usePathname()
		return link == path
	}
	return (
		<>
			<nav className="desktop max-lg:hidden flex items-center flex-col">
				<div className="py-6 bg-accent w-full mb-4">Logo</div>
				{allUsersMenuOptions.map((option) => (
					<Link
						key={option.name}
						href={option.link}
						className={twMerge(
							clsx(
								"text-light-primary briem-bold-font my-2 hover:bg-light-primary hover:text-light-secondary w-full pt-2 pb-2.5 px-4 rounded-xl flex items-end gap-2",
								getActiveNavItem(option.link) &&
									"bg-light-primary text-white border-white"
							)
						)}
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
						className={clsx(
							"text-light-primary briem-bold-font my-2 hover:bg-light-primary hover:text-light-secondary w-full pt-2 pb-2.5 px-4 rounded-xl flex items-end gap-2",
							getActiveNavItem(option.link) &&
								"bg-light-primary text-white border-white"
						)}
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
			</nav>
		</>
	)
}

export default Sidebar

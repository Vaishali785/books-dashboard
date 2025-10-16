"use client"
import { usePathname } from "next/navigation"
import GlassCard from "../custom-ui/GlassCard"
import { allUsersMenuOptions, loggedInUserOptions } from "@/lib/data"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import clsx from "clsx"
import { DynamicIcon } from "../custom-ui/DynamicIcons"
import ModelWithButton from "../custom-ui/ModelWithButton"

function HorizontalNav() {
	function getActiveNavItem(link: string) {
		const path = usePathname()
		console.log(path, link == path)
		return link == path
	}
	return (
		<div className="flex justify-between items-center">
			<nav className="tab lg:hidden flex  w-full flex-1">
				{/* <div className="py-1 bg-accent">Logo</div> */}
				{allUsersMenuOptions.map((option) => (
					<div
						className={twMerge(
							clsx(
								"h-fit rounded-none border-b-[2px] border-light-primary p-0 flex-1",
								getActiveNavItem(option.link) &&
									"bg-light-primary  border-white"
							)
						)}
						key={option.name}
					>
						<Link
							href={option.link}
							className={twMerge(
								clsx(
									"text-light-primary briem-bold-font hover:bg-light-primary hover:text-light-secondary  flex items-end gap-2 text-xs px-4 py-2",
									getActiveNavItem(option.link) && "text-white border-white"
								)
							)}
						>
							<DynamicIcon
								name={option.icon}
								className={clsx(
									"w-4 h-4 lg:w-5 lg:h-5",
									option?.size == "large" ? "scale-125" : ""
								)}
							/>

							{option.name}
						</Link>
					</div>
				))}
				{loggedInUserOptions.map((option) => (
					<div
						className={twMerge(
							clsx(
								"h-fit rounded-none border-b-[2px] border-light-primary hover:border-light-secondary p-0 flex-1",
								getActiveNavItem(option.link) &&
									"bg-light-primary  border-white"
							)
						)}
						key={option.name}
					>
						<Link
							href={option.link}
							className={twMerge(
								clsx(
									"text-light-primary briem-bold-font  hover:bg-light-primary hover:text-light-secondary  flex items-end gap-2 text-xs px-4 py-2",
									getActiveNavItem(option.link) && " text-white border-white"
								)
							)}
						>
							<DynamicIcon
								name={option.icon}
								className={clsx(
									"w-4 h-4 lg:w-5 lg:h-5",
									option?.size == "large" ? "lg:scale-150 " : ""
								)}
							/>
							{option.name}
						</Link>
					</div>
				))}
			</nav>
			{/* <ModelWithButton
				title="Add Book"
				icon="Plus"
				size={12}
				modelTitle="Add New Book"
				modelDesc="Enter details below to add a new book to your collection."
			></ModelWithButton> */}
		</div>
	)
}

export default HorizontalNav

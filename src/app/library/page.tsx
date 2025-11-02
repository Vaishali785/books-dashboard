"use client"
import GlassCard from "@/components/custom-ui/GlassCard"
import StarRating from "@/features/StarRating"
import { getLocalStorage } from "@/lib/client"
import { libraryTabs } from "@/lib/constants"
import { BookData } from "@/lib/types"
import clsx from "clsx"
import { Heart } from "lucide-react"
import { useState } from "react"

function Library() {
	const [selectedTab, setSelectedTab] = useState<string>("")
	const tabs = libraryTabs
	const getBooksData: BookData[] = getLocalStorage("savedData")
	const getSelectedData = !selectedTab
		? getBooksData
		: getBooksData.filter((book) => book.status === selectedTab)
	return (
		<div className="h-full overflow-hidden">
			<GlassCard classes="w-full flex flex-row p-0 overflow-hidden rounded-md justify-between ">
				<div className="flex ">
					{tabs.map((tab) => (
						<div
							key={tab.id}
							className={clsx(
								"flex justify-center items-center",
								"h-fit rounded-none border-b-[2px] p-2",
								"briem-bold-font  hover:border-light-primary hover:cursor-pointer hover:text-light-primary  flex items-end gap-2 text-md px-4 py-2",
								selectedTab == tab.id
									? "border-light-primary text-white bg-light-primary hover:text-white"
									: "text-white border-transparent"
							)}
							onClick={() => setSelectedTab(tab.id)}
						>
							{tab.name}
						</div>
					))}
				</div>
			</GlassCard>

			<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 my-4 flex-wrap overflow-y-scroll h-fit pb-40 scrollbar-hidden">
				{getSelectedData?.map((book, index) => (
					<GlassCard key={index} classes="w-full h-fit flex gap-4 ">
						<div className="h-[200px] w-[150px] bg-light-primary/40 rounded-md"></div>
						<div className="flex flex-col gap-2 flex-1">
							<div className="flex justify-between items-center">
								<div className="capitalize bg-light-primary/80 px-4 py-2 rounded-lg w-fit text-xs">
									{book.genre}
								</div>
								<button>
									<Heart className="stroke-red-400 hover:fill-red-500 hover:cursor-pointer hover:stroke-red-500 duration-100 ease-in transition-colors" />
								</button>
							</div>
							<h3 className="text-2xl text-light-primary font-semibold briem-bold-font">
								{book.name}
							</h3>
							<span className="text-sm text-light-primary">{book.author}</span>
							<StarRating />
							<div>
								<span className="text-sm text-light-primary font-medium mr-2">
									Start Date:
								</span>
								<span className="text-sm text-light-primary">
									{book.startDate.toString()}
								</span>
							</div>
						</div>
					</GlassCard>
				))}
			</div>
		</div>
	)
}

export default Library

"use client"
import NoDataFound from "@/components/custom-ui/NoDataFound"
import FavQuote from "@/features/FavQuote"
import { getLocalStorage } from "@/lib/client"
import { BookData } from "@/lib/types"
import { useState } from "react"

function FavQuotes() {
	const [selectedTab, setSelectedTab] = useState<string>("all")
	const getBooksData: BookData[] = getLocalStorage("savedData")
	const bookWiseQuotes: BookData[] = getBooksData?.filter(
		(book) => book.favQuote
	)
	const allQuotes: String[] = bookWiseQuotes?.map((book) => book.favQuote)

	console.log(getBooksData, bookWiseQuotes, allQuotes)
	if (!getBooksData) return <NoDataFound />
	return (
		<div>
			{/* for tabs book should have multiple fav quotes  */}

			{/* <div className=" flex mb-4">
				<div
					className={clsx(
						"flex justify-center items-center",
						"h-fit rounded-none border-b-[2px] p-0 backdrop-blur-xs",
						"briem-bold-font  hover:border-light-primary hover:cursor-pointer hover:text-light-primary  flex items-end gap-2 text-md px-4 py-2",
						selectedTab == "all"
							? "border-light-primary text-white bg-light-primary"
							: "text-white border-transparent"
					)}
					onClick={() => setSelectedTab("all")}
				>
					All
				</div>
				<div
					className={clsx(
						"flex justify-center items-center h-fit rounded-none gap-2 text-md px-4 py-2",
						" p-0 briem-bold-font border-b-[2px] backdrop-blur-xs hover:border-light-primary hover:text-light-primary hover:cursor-pointer",
						selectedTab == "book-wise"
							? " border-light-primary text-light-primary"
							: "text-white border-transparent"
					)}
					onClick={() => setSelectedTab("book-wise")}
				>
					Book-wise
				</div>
			</div> */}

			<div className="flex gap-4 flex-wrap">
				{bookWiseQuotes.map((book, index) => (
					<FavQuote
						key={index}
						quote={book.favQuote}
						bookTitle={book.name}
						customClasses="min-w-1/3 gap-2 rounded-br-none rounded-tl-none min-h-1/2"
						hideFavQuoteHeading={true}
						showQuotesIcon={true}
					/>
				))}

				{/* // {selectedTab == "all"
				// 	? allQuotes.map((quote, index) => (
				// 			<GlassCard
				// 				key={index}
				// 				cardBg="p-6 px-8 bg-light-primary/44 max-sm:max-w-[600] flex  flex-col justify-evenly w-full lg:flex-1 "
				// 			>
				// 				<blockquote className="text-light-secondary text-xl font-bold">
				// 					{quote}
				// 				</blockquote>
				// 			</GlassCard>
				// 	  ))
				// 	: bookWiseQuotes.map((book, index) => (
				// 			<div key={index}>{book.name}</div>
				// 	  ))} */}
			</div>
		</div>
	)
}

export default FavQuotes

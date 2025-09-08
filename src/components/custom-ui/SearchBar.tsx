import { Input } from "@/components/ui/input"
import GlassCard from "./GlassCard"
import { Search } from "lucide-react"

function SearchBar() {
	return (
		<GlassCard classes="w-[450px] text-xs max-h-[40px] p-0 flex items-center justify-end relative">
			<Input
				type="text"
				placeholder="Search book.."
				className="outline-none border-none focus-visible:ring-0 shadow-none focus-visible:shadow-none text-light-primary w-full rounded-2xl h-full px-4 pb-1 placeholder:text-light-primary/60 p-4"
			/>
			<Search className="text-light-primary z-10 absolute right-4" />
		</GlassCard>
	)
}

export default SearchBar

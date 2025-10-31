import { Star } from "lucide-react"

function StarRating() {
	return (
		<div className="flex gap-2 ">
			<Star className="w-6 h-6 stroke-yellow-400 fill-yellow-400" />
			<Star className="w-6 h-6 stroke-yellow-400 fill-yellow-400" />
			<Star className="w-6 h-6 stroke-yellow-400 fill-yellow-400" />
			<Star className="w-6 h-6 stroke-yellow-400 fill-yellow-400" />
			<Star className="w-6 h-6 stroke-yellow-400 fill-yellow-400" />
		</div>
	)
}

export default StarRating

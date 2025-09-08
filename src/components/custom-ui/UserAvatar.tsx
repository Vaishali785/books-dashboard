import GlassCard from "./GlassCard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function UserAvatar() {
	return (
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" />
			{/* <GlassCard classes="rounded-full w-8 h-8"> */}
			<AvatarFallback className="text-black text-xs">CN</AvatarFallback>
			{/* </GlassCard> */}
		</Avatar>
	)
}

export default UserAvatar

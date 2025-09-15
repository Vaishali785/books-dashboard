import * as Icons from "lucide-react"
import type { LucideIcon } from "lucide-react"

type LucideIconName = keyof typeof Icons

interface DynamicIconProps {
	name: LucideIconName
	className?: string
	size?: number
}

export function DynamicIcon({ name, className, size }: DynamicIconProps) {
	const Icon = Icons[name] as LucideIcon

	if (!Icon) {
		return <span className="text-red-500">Invalid icon: {name}</span>
	}

	return <Icon className={className} size={size} />
}

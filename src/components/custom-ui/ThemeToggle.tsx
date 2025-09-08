"use client"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun } from "lucide-react"
import { useState } from "react"

function ThemeToggle() {
	const [enabled, setEnabled] = useState(false)

	return (
		<div className="flex items-center gap-3 ">
			<Switch
				checked={enabled}
				onCheckedChange={setEnabled}
				className="relative w-16 h-[35px] px-1"
				thumbClasses="h-[24px] w-[24px] flex items-center justify-center"
			>
				<span className="text-sm">
					{enabled ? (
						<Moon
							className={`h-4 w-4 transition-opacity scale-70 ${
								enabled ? "opacity-100" : "opacity-100"
							}`}
						/>
					) : (
						<Sun
							className={`h-4 w-4 transition-opacity scale-70 ${
								enabled ? "opacity-100" : "opacity-100"
							}`}
						/>
					)}
				</span>
			</Switch>
		</div>
	)
}

export default ThemeToggle

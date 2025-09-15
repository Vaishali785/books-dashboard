import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function GlassCard({
	children,
	classes,
	cardBg,
}: {
	children: React.ReactNode
	classes?: string
	cardBg?: string
}) {
	return (
		<div
			className={twMerge(
				clsx(
					"glass-card z-30 p-4 w-fit relative backdrop-blur-md rounded-2xl text-white ",
					"shadow-light",
					// "bg-transparent bg-gradient-135 from-light-card-bg-grad-start-1  to-light-card-bg-grad-stop-1  ",
					// "dark:bg-transparent dark:from-dark-card-bg-grad-start-2 dark:from-0% dark:via-dark-card-bg-grad-via-2 ",
					// "dark:via-40% dark:to-dark-card-bg-grad-stop-2 dark:to-100% dark:border-none dark:shadow-dark-2",
					classes,
					cardBg || "bg-[image:var(--background-light-bg)] "
				)
			)}
		>
			{/* <div className="absolute top-0 left-0 w-full h-full z-10"> */}
			{children}
		</div>
	)
}

export default GlassCard

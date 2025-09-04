import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function GlassCard({
	children,
	classes,
}: {
	children: React.ReactNode
	classes?: string
}) {
	return (
		<div
			className={twMerge(
				clsx(
					"glass-card z-100 p-4 w-3/4 h-3/4 relative backdrop-blur-md rounded-2xl",
					"bg-transparent bg-gradient-135 from-light-card-bg-grad-start from-0% via-light-card-bg-grad-via via-40% to-light-card-bg-grad-stop to-100% shadow-light ",
					"dark:bg-transparent dark:from-dark-card-bg-grad-start-2 dark:from-0% dark:via-dark-card-bg-grad-via-2 ",
					"dark:via-40% dark:to-dark-card-bg-grad-stop-2 dark:to-100% dark:border-none dark:shadow-dark-2",
					classes
				)
			)}
		>
			{/* <div className="absolute top-0 left-0 w-full h-full z-10"> */}
			{children}
		</div>
	)
}

export default GlassCard

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Props = {
	buttonTitle: string
	submitButton?: boolean
	cancelButton?: boolean
	className?: string
}

function CustomButton({
	buttonTitle,
	submitButton,
	cancelButton,
	className,
}: Props) {
	return (
		<>
			{cancelButton ? (
				<Button
					variant="outline"
					className={cn(
						"cursor-pointer hover:bg-red-600 hover:text-white text-red-600",
						className
					)}
				>
					{buttonTitle}
				</Button>
			) : (
				<Button
					type={submitButton ? "submit" : "button"}
					className={cn(
						"cursor-pointer border-white border bg-white text-light-primary hover:bg-light-primary hover:text-white",
						className
					)}
				>
					{buttonTitle}
				</Button>
			)}
		</>
	)
}

export default CustomButton

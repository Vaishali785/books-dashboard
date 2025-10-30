"use client"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { saveToLocalStorage } from "@/lib/client"
import { handleSubmit } from "@/lib/server-actions"
import * as Icons from "lucide-react"
import { useActionState, useEffect, useRef, useState } from "react"
import DatePicker from "./DatePicker"
import { DynamicIcon } from "./DynamicIcons"

type IconName = keyof typeof Icons

type Props = {
	title: string
	icon: IconName
	size: number
	modelTitle: string
	modelDesc?: string
}

function ModalWithButton({ title, icon, size, modelTitle, modelDesc }: Props) {
	// const handleSubmitWithUserInput = handleSubmit.bind(null, e)
	const [state, action, pending] = useActionState(handleSubmit, {})
	const formRef = useRef<HTMLFormElement>(null)
	const [statusVal, setStatusVal] = useState("")
	useEffect(() => {
		if (Object.keys(state).length) {
			saveToLocalStorage(state, "savedData")
			// Reset form using native form.reset()
			formRef.current?.reset()
		}
	}, [state])
	return (
		<Dialog>
			<DialogTrigger className="flex gap-2 items-center bg-light-primary text-light-secondary px-8 py-2 rounded-md lg:px-4 lg:py-1 lg:rounded-2xl">
				<span>
					<DynamicIcon name={icon} size={size} />
				</span>
				<span className="briem-regular-font text-xs">{title}</span>
			</DialogTrigger>
			<DialogContent className="z-50 bg-light-primary/44 text-light-secondary backdrop-blur-2xl shadow-light border-white/44">
				<form ref={formRef} className="flex gap-4 flex-col" action={action}>
					<DialogHeader>
						<DialogTitle className="briem-bold-font">{modelTitle}</DialogTitle>
						<DialogDescription className="text-light-secondary">
							{modelDesc}
						</DialogDescription>
					</DialogHeader>

					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label className="font-bold briem-regular-font" htmlFor="name-1">
								Name
								<span>*</span>
							</Label>
							<Input
								className="briem-regular-font placeholder:text-white/65"
								id="name-1"
								name="name"
								placeholder="Pedro Duarte"
							/>
						</div>
						<div className="grid gap-3">
							<Label className="font-bold briem-regular-font" htmlFor="author">
								Author
							</Label>
							<Input
								className="briem-regular-font placeholder:text-white/65"
								id="author"
								name="author"
								placeholder="@peduarte"
							/>
						</div>
						<div className="grid gap-3">
							<Label className="font-bold briem-regular-font" htmlFor="genre">
								Genre
								<span>*</span>
							</Label>
							<Select name="genre" required>
								<SelectTrigger className="w-full briem-regular-font [&>svg]:!text-white  data-[placeholder]:!text-white/65">
									<SelectValue
										placeholder="Genre"
										// className="briem-regular-font placeholder:text-white"
									/>
								</SelectTrigger>
								<SelectContent>
									<SelectItem
										className="data-[highlighted]:bg-light-primary/25  data-[highlighted]:cursor-pointer " //data-[highlighted]:text-white to change text color when highlighted
										value="fiction"
									>
										Fiction
									</SelectItem>
									<SelectItem
										className="data-[highlighted]:bg-light-primary/25 data-[highlighted]:cursor-pointer"
										value="non-fiction"
									>
										Non Fiction
									</SelectItem>

									<SelectItem
										className="data-[highlighted]:bg-light-primary/25  data-[highlighted]:cursor-pointer "
										value="technology-and-computing"
									>
										Technology & Computing
									</SelectItem>
									<SelectItem
										className="data-[highlighted]:bg-light-primary/25  data-[highlighted]:cursor-pointer "
										value="educational"
									>
										Educational
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="grid gap-3">
							<Label className="font-bold briem-regular-font" htmlFor="status">
								Status
								<span>*</span>
							</Label>

							<Select name="status" onValueChange={(val) => setStatusVal(val)}>
								<SelectTrigger className="w-full briem-regular-font [&>svg]:!text-white  data-[placeholder]:!text-white/65">
									<SelectValue
										placeholder="Status"
										// className="briem-regular-font placeholder:text-white"
									/>
								</SelectTrigger>
								<SelectContent>
									<SelectItem
										className="data-[highlighted]:bg-light-primary/25  data-[highlighted]:cursor-pointer " //data-[highlighted]:text-white to change text color when highlighted
										value="completed"
									>
										Completed
									</SelectItem>
									<SelectItem
										className="data-[highlighted]:bg-light-primary/25 data-[highlighted]:cursor-pointer"
										value="currently-reading"
									>
										Currently reading
									</SelectItem>
									<SelectItem
										className="data-[highlighted]:bg-light-primary/25  data-[highlighted]:cursor-pointer "
										value="tbr"
									>
										TBR
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						{statusVal === "completed" && (
							<div className="grid gap-3">
								<Label
									className="font-bold briem-regular-font"
									htmlFor="favQuote"
								>
									Fav Quote
								</Label>
								<Input
									className="briem-regular-font placeholder:text-white/65"
									id="favQuote"
									name="favQuote"
									placeholder="Add your fav quote..."
								/>
							</div>
						)}
						<div className="flex justify-between gap-3">
							<div className="grid gap-3 flex-1">
								<Label
									className="font-bold briem-regular-font"
									htmlFor="startDate-1"
								>
									Start Date
									<span>*</span>
									{/* <span className={`error-box ${error ? "" : "hidden"}`}></span> */}
								</Label>
								<DatePicker name="startDate" />
							</div>
							<div className="grid gap-3 flex-1">
								<Label
									className="font-bold briem-regular-font"
									htmlFor="endDate-1"
								>
									End Date
								</Label>
								<DatePicker name="endDate" />
							</div>
						</div>
					</div>

					<DialogFooter>
						<DialogClose asChild>
							<Button
								variant="outline"
								className="cursor-pointer hover:bg-red-600 hover:text-white text-red-600 "
							>
								Cancel
							</Button>
						</DialogClose>
						<Button
							type="submit"
							className="cursor-pointer border-white border bg-white text-light-primary hover:bgˀ-light-primary hover:text-white"
						>
							Save Changes
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}
export default ModalWithButton

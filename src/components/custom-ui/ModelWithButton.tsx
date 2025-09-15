"use client"

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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import DatePicker from "./DatePicker"
import { DynamicIcon } from "./DynamicIcons"
import * as Icons from "lucide-react"

type IconName = keyof typeof Icons

type Props = {
	title: string
	icon: IconName
	size: number
	modelTitle: string
	modelDesc?: string
}

function ModelWithButton({ title, icon, size, modelTitle, modelDesc }: Props) {
	return (
		<Dialog>
			<DialogTrigger className="flex gap-2 items-center bg-light-primary text-light-secondary px-4 py-1  rounded-2xl">
				<span>
					<DynamicIcon name={icon} size={size} />
				</span>
				<span className="briem-regular-font text-xs">{title}</span>
			</DialogTrigger>
			<DialogContent className="z-50 bg-light-primary/44 text-light-secondary backdrop-blur-2xl shadow-light border-white/44">
				<form className="flex gap-4 flex-col">
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
							</Label>
							<Input
								className="briem-regular-font"
								id="name-1"
								name="name"
								defaultValue="Pedro Duarte"
							/>
						</div>
						<div className="grid gap-3">
							<Label className="font-bold briem-regular-font" htmlFor="author">
								Author
							</Label>
							<Input
								className="briem-regular-font"
								id="author"
								name="author"
								defaultValue="@peduarte"
							/>
						</div>
						<div className="grid gap-3">
							<Label className="font-bold briem-regular-font" htmlFor="status">
								Status
							</Label>
							<Input
								className="briem-regular-font"
								id="status"
								name="status"
								defaultValue="@peduarte"
							/>
						</div>
						<div className="grid gap-3">
							<Label className="font-bold briem-regular-font" htmlFor="genre">
								Genre
							</Label>
							<Input
								className="briem-regular-font"
								id="genre"
								name="genre"
								defaultValue="@peduarte"
							/>
						</div>
						<div className="flex justify-between gap-3">
							<div className="grid gap-3 flex-1">
								<Label
									className="font-bold briem-regular-font"
									htmlFor="startDate-1"
								>
									Start Date
								</Label>
								<DatePicker />
							</div>
							<div className="grid gap-3 flex-1">
								<Label
									className="font-bold briem-regular-font"
									htmlFor="endDate-1"
								>
									End Date
								</Label>
								<DatePicker />
							</div>
						</div>
					</div>

					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline" className="cursor-pointer">
								Cancel
							</Button>
						</DialogClose>
						<Button type="submit" className="cursor-pointer">
							Save changes
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}
export default ModelWithButton

"use client"

import {
	Dropzone,
	DropzoneContent,
	DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone"
import { UploadIcon } from "lucide-react"
import { useState } from "react"

const DragDropImg = () => {
	const [files, setFiles] = useState<File[] | undefined>()
	const [filePreview, setFilePreview] = useState<string | undefined>()

	const handleDrop = (acceptedFiles: File[]) => {
		console.log("Dropped files:", acceptedFiles)
		setFiles(acceptedFiles)
		// You can also add logic here to upload the files to a server
		if (files && files.length > 0) {
			const reader = new FileReader()
			reader.onload = (e) => {
				if (typeof e.target?.result === "string") {
					console.log("image", e.target.result)
					setFilePreview(e.target?.result)
				}
			}
			reader.readAsDataURL(files[0])
		}
	}

	return (
		<Dropzone
			accept={{ "image/*": [] }} // Accept only image files
			maxFiles={1} // Limit to 5 files
			maxSize={1024 * 1024 * 10} // Max size of 10MB per file
			minSize={1024} // Min size of 1KB per file
			onDrop={handleDrop}
			onError={console.error}
			src={files} // Display previews of selected files if applicable
			className="bg-transparent cursor-pointer my-8 border-dashed border-white/60 w-9/10 block mx-auto hover:bg-white/70"
		>
			<DropzoneEmptyState>
				<div className="flex w-full items-center gap-4 p-8">
					<div className="flex size-16 items-center justify-center rounded-lg bg-white group-hover:bg-light-primary/60 group-hover:text-white/80 text-muted-foreground">
						<UploadIcon size={24} />
					</div>
					<div className="text-left">
						<p className="font-medium text-sm">Upload a file</p>
						<p className=" text-xs">Drag and drop or click to upload</p>
					</div>
				</div>
			</DropzoneEmptyState>
			<DropzoneContent>
				{/* {filePreview && (
					<div className="h-[300px] w-full">
						<img
							alt="Preview"
							className="absolute top-0 left-0 h-full w-full object-cover"
							src={filePreview}
						/>
					</div>
				)} */}
			</DropzoneContent>
			{/* You can add custom content here to display file previews or upload progress */}
		</Dropzone>
	)
}

export default DragDropImg

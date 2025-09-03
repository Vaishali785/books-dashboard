import Image from "next/image"

function ThemeBgImage({ bgImage }: { bgImage: string }) {
	return (
		<div>
			<Image src={bgImage} alt="Theme Background" width={1000} height={1000} />
		</div>
	)
}

export default ThemeBgImage

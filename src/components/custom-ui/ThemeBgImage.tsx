function ThemeBgImage() {
	return (
		<div
			className="fixed top-0 left-0 w-full h-full -z-10  bg-no-repeat bg-center bg-cover
                        bg-[url('/theme_images/Cherry_Blossom.jpeg')] 
                        dark:bg-[url('/theme_images/theme-dark.jpeg')] "
		>
			{/* <Image src={bgImage} alt="Theme Background" fill /> */}
		</div>
	)
}

export default ThemeBgImage

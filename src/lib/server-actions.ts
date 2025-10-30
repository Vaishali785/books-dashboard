'use server'






export async function handleSubmit(prevData: Object, formData: FormData) {
    // e.preventDefault()
    console.log(">>hello", formData)
    const rawData = Object.fromEntries(formData)
    console.log(">>raw", rawData)

    return rawData
}



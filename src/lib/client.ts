'use client'

export const getLocalStorage = (objName: string) => {
    if (typeof window === "undefined") return; // server guard
    const val = window.localStorage.getItem(objName)
    try { // trye catch just to catch error in case val is not proper string or JSON.parse gives error
        return val ? JSON.parse(val) : null;
    } catch (err) {
        console.error("Error parsing localStorage", err);
        return null;
    }
}

export const saveToLocalStorage = (dataObj: Record<string, any>, objName: string) => {
    let array = []
    if (typeof window === "undefined") return; // server guard
    const prevData = getLocalStorage(objName)
    console.log(">>saved", prevData, Array.isArray(prevData))

    if (prevData) {
        array = [...prevData, dataObj]
    } else {
        array[0] = dataObj
    }
    window.localStorage.setItem(objName, JSON.stringify(array)) //always stringified the final value 
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getLocalStorage } from "./client";
import { BookData } from "./types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function calculateTotalBooksRead() {
    const bookData: BookData[] = getLocalStorage('savedData');
    const completedBooks = bookData?.filter(book => book.status === 'completed')
    return completedBooks?.length
}

export function calculateTotalPagesRead() {
    const bookData: BookData[] = getLocalStorage('savedData') || []; // assuming this returns an array

    const completedBooks = bookData?.filter(book => book.status === 'completed')
    const totalPagesRead = completedBooks?.reduce((total, current) => { return total + current.totalPages }, 0)
    return totalPagesRead
}


export function calculateBooksReadThisMonth() {
    const bookData: BookData[] = getLocalStorage('savedData') || []; // assuming this returns an array

    const today = new Date();
    const currentMonth = today.getMonth(); // 0-indexed (Jan=0)
    const currentYear = today.getFullYear();

    // Filter completed books with endDate in the current month
    const completedThisMonth = bookData.filter(book => {
        if (book.status !== 'completed' || !book.endDate) return false;

        const endDate = new Date(book.endDate);
        return endDate.getMonth() === currentMonth && endDate.getFullYear() === currentYear;
    });

    // Option 1: Count of books completed this month
    const booksReadThisMonth = completedThisMonth.length;

    // Option 2: Total pages read this month (if you track pages)
    // const totalPagesReadThisMonth = completedThisMonth.reduce((total, book) => total + (book.pages || 0), 0);

    return booksReadThisMonth
}

export function getRecentFavQuote() {
    const bookData: BookData[] = getLocalStorage('savedData') || []; // assuming this returns an array 
    const bookWithQuote = bookData.find(book => book.favQuote)
    return bookWithQuote
}
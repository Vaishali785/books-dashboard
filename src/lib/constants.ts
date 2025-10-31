import * as Icons from "lucide-react";

type IconName = keyof typeof Icons
type MenuOption = { name: string; link: string; icon: IconName; size?: "large" }

export const allUsersMenuOptions: MenuOption[] = [
    { name: "Home", link: "/", icon: "Home" },
]
export const loggedInUserOptions: MenuOption[] = [
    { name: "Library", link: "/library", icon: "LibraryBig" },
    { name: "Favorites", link: "/favorites", icon: "Heart" },
    {
        name: "Recommendations",
        link: "/recommendations",
        icon: "Sparkles",
        size: "large",
    },
    { name: "Fav Quotes", link: "/fav-quotes", icon: "Quote" },
    { name: "Settings", link: "/settings", icon: "Settings" },
]


export const libraryTabs = [
    { name: 'All', id: '' },
    { name: 'Currently Reading', id: 'currently-reading' },
    { name: 'Completed', id: 'completed' },
    { name: 'TBR', id: 'tbr' }
]
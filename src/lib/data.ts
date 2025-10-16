import * as Icons from "lucide-react"
export const lineData = [
    {
        "id": "japan",
        "data": [
            {
                "x": "Sun",
                "y": 243
            },
            {
                "x": "Mon",
                "y": 66
            },
            {
                "x": "Tue",
                "y": 144
            },
            {
                "x": "Wed",
                "y": 232
            },
            {
                "x": "Thu",
                "y": 84
            },
            {
                "x": "Fri",
                "y": 279
            },
            {
                "x": "Sat",
                "y": 209
            }
        ]
    },

]

export const barData = [
    {
        "country": "AD",
        "hot dog": 167,
        "burger": 144,
        "sandwich": 129,
        "kebab": 148,
        "fries": 189,
        "donut": 30
    },
    {
        "country": "AE",
        "hot dog": 43,
        "burger": 30,
        "sandwich": 34,
        "kebab": 53,
        "fries": 178,
        "donut": 160
    },
    {
        "country": "AF",
        "hot dog": 89,
        "burger": 4,
        "sandwich": 132,
        "kebab": 98,
        "fries": 18,
        "donut": 64
    },
    {
        "country": "AG",
        "hot dog": 16,
        "burger": 68,
        "sandwich": 87,
        "kebab": 184,
        "fries": 7,
        "donut": 52
    },
    {
        "country": "AI",
        "hot dog": 161,
        "burger": 86,
        "sandwich": 103,
        "kebab": 167,
        "fries": 122,
        "donut": 65
    },
    {
        "country": "AL",
        "hot dog": 63,
        "burger": 144,
        "sandwich": 85,
        "kebab": 75,
        "fries": 97,
        "donut": 77
    },
    {
        "country": "AM",
        "hot dog": 164,
        "burger": 149,
        "sandwich": 35,
        "kebab": 109,
        "fries": 68,
        "donut": 181
    }
]

export const pagesReadData = [
    {
        "day": "Sun",
        "pages": 243
    },
    {
        "day": "Mon",
        "pages": 66
    },
    {
        "day": "Tue",
        "pages": 144
    },
    {
        "day": "Wed",
        "pages": 232
    },
    {
        "day": "Thu",
        "pages": 84
    },
    {
        "day": "Fri",
        "pages": 279
    },
    {
        "day": "Sat",
        "pages": 209
    }
]


export const genreData = [
    {
        "id": "fiction",
        "label": "fiction",
        "value": 538,
        "color": "hsl(268, 70%, 50%)"
    },
    {
        "id": "non-fiction",
        "label": "non-fiction",
        "value": 177,
        "color": "hsl(227, 70%, 50%)"
    },
    {
        "id": "thriller",
        "label": "thriller",
        "value": 24,
        "color": "hsl(335, 70%, 50%)"
    },
    {
        "id": "psychology",
        "label": "psychology",
        "value": 558,
        "color": "hsl(91, 70%, 50%)"
    },
    {
        "id": "fantasy",
        "label": "fantasy",
        "value": 318,
        "color": "hsl(308, 70%, 50%)"
    }
]

type IconName = keyof typeof Icons
type MenuOption = { name: string; link: string; icon: IconName; size?: "large" }

export const allUsersMenuOptions: MenuOption[] = [
    { name: "Home", link: "/", icon: "Home" },
]
export const loggedInUserOptions: MenuOption[] = [
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
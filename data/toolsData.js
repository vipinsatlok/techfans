import Tool from "@/tools/string/Tool";

export const toolsData = [
    {
        id: 1,
        icon: "/favicon.ico",
        category: "number",
        slug: "letter-counter",
        component: Tool,
        title: "Letter Counter",
        description: "this is Letter Counter"
    },
    {
        id: 2,
        icon: "/favicon.ico",
        category: "number",
        slug: "word-counter",
        component: Tool,
        title: "Word Counter",
        description: "this is Letter Counter"
    },
    {
        id: 3,
        icon: "/favicon.ico",
        category: "string",
        slug: "sentence-counter",
        component: Tool,
        title: "Sentence Counter",
        description: "this is Letter Counter"
    },
]

const categoryData = [
    {
        title: "string",
        icon: "/favicon.ico",
        path: "string"
    },
    {
        title: "number",
        icon: "/favicon.ico",
        path: "number"
    },
]
export const sidebarData = categoryData.map(item => {

    const filterByCategory = toolsData.filter(i => i.category === item.title)
    return { ...item, filterByCategory }
})

import Sidebar from "@/components/Sidebar"
import { useRouter } from "next/router"

const LayoutTools = ({ children, sidebarData }) => {

    const router = useRouter()

    const searchData = (search) => {
        const query = router.query
        router.push({ pathname: "/tools", query: { ...query, search } })
    }

    return (
        <div className="flex">

            {/* sidebar */}
            <div className="hidden md:flex sidebar">
                <Sidebar sidebarData={sidebarData} />
            </div>

            {/* content */}
            <div className="content flex-1">

                {/* search and title */}
                <div>
                    <div>Title</div>
                    <div>
                        <input className="text-gray-500" onChange={(e) => searchData(e.target.value)} type="search" placeholder="search..." />
                    </div>
                </div>

                {/* main content */}
                <div>{children}</div>
            </div>
        </div>
    )
}

export default LayoutTools
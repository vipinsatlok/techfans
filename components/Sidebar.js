import Image from "next/image"
import { useRouter } from "next/router"

const Sidebar = ({ sidebarData }) => {

    return (
        <div>
            {
                sidebarData?.map((item, i) => {

                    return <List key={i} {...item} />
                })
            }
        </div>
    )
}

const List = ({ title, path, icon, filterByCategory }) => {

    const router = useRouter()

    // pushing category in link
    const openSubList = (category) => {
        const query = router.query
        delete query.tool
        router.push({ pathname: "/tools", query: { ...query, category } })
    }


    return (
        <div>

            {/* header title */}
            <div onClick={() => openSubList(path)}>
                {/* title or icons */}
                <div>
                    <Image src={icon} width={15} height={15} alt="icon" />
                    {title}
                </div>

                {/* arrow icon */}
                <div>
                    <span>Icon</span>
                </div>
            </div>

            {/* sub list */}
            <div>
                {
                    filterByCategory.map((item, i) => {
                        return <SubList {...item} key={i} />
                    })
                }
            </div>
        </div>
    )
}

const SubList = ({ title, icon, slug }) => {

    // redirect to tool page
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/tools/${slug}`)}>
            <Image src={icon} width={15} height={15} alt="icon" />
            {title}
        </div>
    )
}

export default Sidebar
import Card from "@/components/Card"
import { sidebarData, toolsData } from "@/data/toolsData"
import LayoutTools from "@/layouts/LayoutTools"
import { useRouter } from "next/router"

const Home = ({ toolsData, sidebarData }) => {

  const router = useRouter()
  const query = router.query


  if (!toolsData || !toolsData.length) return <div>Data Not Found</div>

  const filterData = (query) => {

    const page = query?.page || 1
    const search = query?.search
    const category = query?.category

    let data = toolsData
    if (search) {
      const searchRegex = new RegExp(search, "ig")
      data = toolsData.filter(item => String(item.title).toLowerCase().match(searchRegex))
    }

    if (category) {
      data = data?.filter(item => item.category === category)
    }

    return data
  }

  const finalData = filterData(query)

  return (
    <LayoutTools sidebarData={sidebarData}>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          finalData?.map((item, i) => {
            return <Card {...item} key={i} />
          })
        }

        {
          !finalData.length && <div>No found</div>
        }
      </div>
    </LayoutTools>
  )
}


export async function getStaticProps() {

  return {
    props: {
      toolsData: JSON.parse(JSON.stringify(toolsData)),
      sidebarData: JSON.parse(JSON.stringify(sidebarData)),
    },
  }
}


export default Home
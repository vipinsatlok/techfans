import Card from "@/components/Card";
import NotFound from "@/components/NotFound";
import { sidebarData, toolsData } from "@/data/toolsData";
import LayoutTools from "@/layouts/LayoutTools";
import { useRouter } from "next/router";

const Home = ({ toolsData, sidebarData }) => {
  const router = useRouter();
  const query = router.query;

  if (!toolsData || !toolsData.length) return <NotFound />;

  const filterData = (query) => {
    const page = query?.page || 1;
    const search = query?.search;
    const category = query?.category;

    let data = toolsData;
    if (search) {
      const searchRegex = new RegExp(search, "ig");
      data = toolsData.filter(
        (item) =>
          String(item.title).toLowerCase().match(searchRegex) ||
          String(item.description).toLowerCase().match(searchRegex)
      );
    }

    if (category) {
      data = data?.filter((item) => item.category === category);
    }

    return data;
  };

  const finalData = filterData(query);
  const title = query?.category ? String(query?.category) + " Tools" : "Tools";

  return (
    <LayoutTools title={title} sidebarData={sidebarData}>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {finalData?.map((item, i) => {
          return <Card {...item} key={i} />;
        })}
      </div>
      {!finalData.length && <NotFound />}
    </LayoutTools>
  );
};

export async function getStaticProps() {
  return {
    props: {
      toolsData: JSON.parse(JSON.stringify(toolsData)),
      sidebarData: JSON.parse(JSON.stringify(sidebarData)),
    },
  };
}

export default Home;

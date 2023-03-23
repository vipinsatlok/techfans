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
      
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5828945217071181"
       crossorigin="anonymous"></script>
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-5828945217071181"
       data-ad-slot="8149088142"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
       
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

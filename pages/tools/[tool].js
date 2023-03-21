import LayoutTools from "@/layouts/LayoutTools";
import { useRouter } from "next/router";
import { sidebarData, toolsData } from "@/data/toolsData";

const Tool = ({ tool }) => {
  const ToolComponent = toolsData.find(
    (item) => item.slug === tool.slug
  ).component;

  return (
    <LayoutTools
      title={tool.title}
      description={tool.description}
      sidebarData={sidebarData}
    >
      <ToolComponent />
    </LayoutTools>
  );
};

export async function getStaticProps({ params }) {
  const data = JSON.parse(JSON.stringify(toolsData));
  const tool = data.find((item) => item.slug === params.tool);
  if (!tool) return { notFound: true };
  return { props: { tool } };
}

export async function getStaticPaths() {
  const data = JSON.parse(JSON.stringify(toolsData));
  const paths = data.map((tool) => ({
    params: { tool: tool.slug },
  }));
  return { paths, fallback: false };
}

export default Tool;

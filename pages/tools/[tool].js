import LayoutTools from "@/layouts/LayoutTools";
import { useRouter } from "next/router";
import { sidebarData, toolsData } from "@/data/toolsData";

const Tool = ({ tool }) => {
  return (
    <LayoutTools>
      <tool.component />
    </LayoutTools>
  );
};

export async function getStaticProps({ params }) {
  const tool = JSON.parse(JSON.stringify(toolsData)).find((item) => item.slug === params.tool);
  if (!tool) return { notFound: true };
  return { props: { tool } };
}

export async function getStaticPaths() {
  const paths = JSON.parse(JSON.stringify(toolsData)).map((tool) => ({
    params: { tool: tool.slug },
  }));
  return { paths, fallback: false };
}

export default Tool;

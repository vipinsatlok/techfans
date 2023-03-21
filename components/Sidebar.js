import Image from "next/image";
import { useRouter } from "next/router";

const Sidebar = ({ sidebarData }) => {
  return (
    <div className="flex md:mr-5 flex-1 md:top-0 md:m-0 relative mb-12 top-12 text-gray-500 bg-gray-700 rounded-md w-full p-4 flex-col gap-3 md:w-60">
      {sidebarData?.map((item, i) => {
        return <List key={i} {...item} />;
      })}
    </div>
  );
};

const List = ({ title, path, icon, filterByCategory }) => {
  const router = useRouter();

  // pushing category in link
  const openSubList = (category) => {
    const query = router.query;
    delete query.tool;
    router.push({ pathname: "/tools", query: { ...query, category } });
  };

  return (
    <div className="">
      {/* header title */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => openSubList(path)}
      >
        {/* title or icons */}
        <div className="flex gap-2 text-white font-medium capitalize items-center">
          <Image src={icon} width={15} height={15} alt="icon" />
          {title}
        </div>
      </div>

      {/* sub list */}
      <div className="flex mt-3 flex-col">
        {filterByCategory.map((item, i) => {
          return <SubList {...item} key={i} />;
        })}
      </div>
    </div>
  );
};

const SubList = ({ title, icon, slug }) => {
  // redirect to tool page
  const router = useRouter();
  const active = slug === router.query.tool;

  return (
    <div
      className={`cursor-pointer flex gap-2 py-1 capitalize text-sm border-l-2 border-gray-500 text-gray-300 pl-3 items-center ${
        active ? "border-lime-500" : ""
      }`}
      onClick={() => router.push(`/tools/${slug}`)}
    >
      <Image src={icon} width={13} height={13} alt="icon" />
      {title}
    </div>
  );
};

export default Sidebar;

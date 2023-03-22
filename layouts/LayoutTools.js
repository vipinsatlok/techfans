import Input from "@/components/Input";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const LayoutTools = ({ children, sidebarData, title, description }) => {
  const router = useRouter();

  const searchData = (search) => {
    const query = router.query;
    router.push({ pathname: "/tools", query: { ...query, search } });
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex w-full relative">
      {/* sidebar open hide button */}
      <div className="">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute top-1 right-1 rounded-full p-1 px-3 focus:bg-blue-700 text-white bg-blue-500"
        >
          <BiChevronDown
            className={`${isOpen ? "rotate-180" : ""} transition`}
            size={20}
          />
        </button>
      </div>

      {/* sidebar */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:w-max w-full md:flex sidebar`}
      >
        <Sidebar sidebarData={sidebarData} />
      </div>

      {/* content */}
      <div
        className={`content ${
          isOpen ? "hidden" : "flex"
        } w-full flex-col gap-3 flex-1`}
      >
        {/* search and title */}
        <div className="grid gap-5 md:grid-cols-2">
          <div className="font-medium text-4xl">
            <h1 className="text-gray-100 capitalize font-medium text-4xl">
              {title || "Title"}
            </h1>
            <p className="text-gray-300 font-medium text-xs">
              {description && description}
            </p>
          </div>
          {!router.query.tool && (
            <div className="flex w-full justify-end items-center">
              <Input
                onChange={searchData}
                type={"text"}
                placeholder="Search tools here..."
              />
            </div>
          )}
        </div>

        {/* main content */}
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
};

export default LayoutTools;

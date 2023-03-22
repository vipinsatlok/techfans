import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiCog, BiHomeAlt, BiCool, BiPhone } from "react-icons/bi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid items-start md:grid-cols-2 relative w-full text-white">
      {/* menu icon */}
      <div className="md:hidden cursor-pointer absolute top-0 right-0 p-1 hover:outline hover:outline-2 hover:outline-gray-300 rounded">
        <span onClick={() => setIsOpen(!isOpen)}>
          <BiMenu size={22} />
        </span>
      </div>

      {/* logo and name */}
      <div className="order-1 md:order-1 md:flex md:justify-center">
        <Link href="/">
          <div className="flex gap-2 items-center">
            <Image width={25} height={25} alt="Logo" src="/favicon.ico" />
            <span className="hidden md:flex text-lg font-bold">Tech Fans</span>
          </div>
        </Link>
      </div>

      {/* all list */}
      <div className="order-3 md:order-2">
        <ul
          className={`${
            !isOpen ? "hidden" : "flex"
          } md:flex md:flex-row flex-col mt-5 md:m-0 justify-start md:justify-center gap-5`}
        >
          <li>
            <Link className="flex gap-2 items-center" href={"/"}>
              <span className="md:hidden">
                <BiHomeAlt />
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link className="flex gap-2 items-center" href={"/tools"}>
              <span className="md:hidden">
                <BiCog />
              </span>
              Tools
            </Link>
          </li>
          <li>
            <Link className="flex gap-2 items-center" href={"/about"}>
              <span className="md:hidden">
                <BiCool />
              </span>
              About
            </Link>
          </li>
          <li>
            <Link className="flex gap-2 items-center" href={"/contact"}>
              <span className="md:hidden">
                <BiPhone />
              </span>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* profile or login button */}
      {/* <div className="md:order-3 order-2 flex justify-end relative right-10 md:right-0">
        <Link href="#">
          <div className="flex gap-2 items-center">
            <span>Login</span>
            <Image width={25} height={25} alt="Logo" src="/favicon.ico" />
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Header;

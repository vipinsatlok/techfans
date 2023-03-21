import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiCog, BiHomeAlt } from "react-icons/bi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid items-start grid-cols-2 md:grid-cols-3 relative w-full text-white">
      {/* menu icon */}
      <div className="md:hidden absolute top-0 right-0 p-1 border-2 border-white  rounded">
        <span onClick={() => setIsOpen(!isOpen)}>
          <BiMenu size={22} />
        </span>
      </div>

      {/* logo and name */}
      <div className="order-1 md:order-1">
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
          } md:flex md:flex-row flex-col mt-5 md:m-0 justify-start gap-5 md:gap-2`}
        >
          <li>
            <Link className="flex gap-2 items-center" href={"/"}>
              <span>
                <BiHomeAlt />
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link className="flex gap-2 items-center" href={"/tools"}>
              <span>
                <BiCog />
              </span>
              Tools
            </Link>
          </li>
          <li>
            <Link className="flex gap-2 items-center" href={"/about"}>
              <span>
                <BiHomeAlt />
              </span>
              About
            </Link>
          </li>
          <li>
            <Link className="flex gap-2 items-center" href={"/contact"}>
              <span>
                <BiHomeAlt />
              </span>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* profile or login button */}
      <div className="md:order-3 order-2 flex justify-end relative right-10 md:right-0">
        <Link href="#">
          <div className="flex gap-2 items-center">
            <span>Login</span>
            <Image width={25} height={25} alt="Logo" src="/favicon.ico" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

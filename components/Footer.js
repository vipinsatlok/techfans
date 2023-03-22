import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-700 p-5 flex flex-col md:items-center md:flex-row-reverse gap-2 text-gray-500">
      {/* social site links */}
      <div className="flex items-center text-gray-400 gap-4 mt-5 md:m-0">
        <span>
          <a
            target="_blank"
            href="https://twitter.com/vipinsatlok"
            className="hover:text-gray-300  cursor-pointer"
          >
            <FaTwitter />
          </a>
        </span>
        <span>
          <a
            href="https://facebook.com/vipinsatlok"
            target="_blank"
            className="hover:text-gray-300  cursor-pointer"
          >
            <FaFacebookF />
          </a>
        </span>
        <span>
          <a
            target="_blank"
            href="https://instagram.com/vipinsatlok"
            className="hover:text-gray-300  cursor-pointer"
          >
            <FaInstagram />
          </a>
        </span>
      </div>

      {/* copy right section */}
      <div className="text-sm flex-1 gap-1 flex justify-start text-gray-400">
        <span>Copyright 2023</span>
        <Link className="hover:text-gray-200 text-gray-300" href="/">
          techfans.in
        </Link>
      </div>
    </div>
  );
};

export default Footer;

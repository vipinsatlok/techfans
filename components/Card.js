import Image from "next/image";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

const Card = ({ title, description, slug, icon }) => {
  const router = useRouter();

  return (
    <div className="grid gap-3 rounded-xl p-5 bg-gray-700">
      {/* svg */}
      <div>
        <Image width={40} height={40} alt="Icon" src={icon} />
      </div>

      {/* title and dis */}
      <div>
        <h3 className="text-gray-200 font-medium text-xl">{title}</h3>
        <p className="text-gray-400 text-xs">
          {String(description).length > 70 ? (
            <div>
              <span>{String(description).slice(0, 77)}</span>
              <span className="text-gray-200">{" more..."}</span>
            </div>
          ) : (
            description
          )}
        </p>
      </div>

      {/* redirect or more buttons */}
      <div>
        <button
          onClick={() => router.push(`/tools/${slug}`)}
          className="rounded-full bg-blue-600 hover:bg-blue-500 p-0.5 flex gap-2 text-gray-300 items-center h-8 text-xs px-4"
        >
          Open <BiArrowBack className="rotate-180 transition" />
        </button>
      </div>
    </div>
  );
};

export default Card;

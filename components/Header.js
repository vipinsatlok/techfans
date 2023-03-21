import Image from "next/image"
import Link from "next/link"

const Header = () => {

  return (
    <div>

      {/* logo and name */}
      <div>
        <div>
          <Image width={10} height={10} alt="Logo" src="/favicon.ico" />
          <span>Tech Fans</span>
        </div>
      </div>

      {/* all list */}
      <div>
        <ul>
          <li>
            <Link href={"/"}><span>Icon</span>Home</Link>
          </li>
          <li>
            <Link href={"/tools"}><span>Icon</span>Tools</Link>
          </li>
          <li>
            <Link href={"/about"}><span>Icon</span>About</Link>
          </li>
          <li>
            <Link href={"/contact"}><span>Icon</span>Contact</Link>
          </li>
        </ul>
      </div>

      {/* profile or login button */}
      <div>
        <div>
          <span>Login</span>
          <Image width={10} height={10} alt="Logo" src="/favicon.ico" />
        </div>
      </div>

    </div>
  )
}

export default Header
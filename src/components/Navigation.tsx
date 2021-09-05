import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";
import Image from 'next/image';
// import tslogo from "../../public/images/tslogo.png";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className="main-nav-child">
        <h3 >TSpirit  </h3>
        {/* <Image width="100" height="50"src={tslogo} alt='Picture'/> */}
        <ul className="main-nav__primary">
          <li className="nav-item nav-item-1">
            <Link href="/">
              <a className="nav-item-link">About</a>
            </Link>
          </li>
          <li className="nav-item nav-item-2 ">
            <Link href="/posts">
              <a
                className="nav-item-link"
              >
                Blog
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

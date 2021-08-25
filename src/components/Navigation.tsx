import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      
      <div className="main-nav-child">
      {/* <div className={"container " + (active ? "active" : "")}> */}
        <ul className="main-nav__primary">
        <button className="py-2 px-4 bg-red-650 text-white font-semibold rounded-lg  hover:bg-red-700 focus:outline-none focus:ring-2  focus:ring-opacity-75">

          <li className="nav-item ">
            <Link href="/" >
              <a className="nav-item-link">About</a>
            </Link>
            
          </li>
          </button>
          <button className="py-2 px-4 bg-red-650 text-white font-semibold rounded-lg  hover:bg-red-700 focus:outline-none focus:ring-2  focus:ring-opacity-75">


          <li className="nav-item ">
          
            <Link href="/posts">
              <a
                className="nav-item-link"
              >
                Blog
              </a>
            </Link>
            

          </li>
          </button>

        </ul>
        <style jsx>
          {`
          .main-nav-child{
            display: flex;
            height: 100%;
            align-items: center;
            width:80%;
            margin: 0 auto;
          }
            // .container {
            //   width: 0;
            // }
            // ul {
            //   opacity: 0;
            //   width: 100%;
            //   height: 100vh;
            //   text-align: right;
            //   list-style: none;
            //   margin: 0;
            //   padding: 0;
            //   position: fixed;
            //   top: 0;
            //   // background-color: #fff;
            //   display: flex;
            //   flex-direction: column;
            //   justify-content: center;
            //   z-index: 1;
            //   transform: translateY(100%);
            //   transition: opacity 200ms;
            // }
            // .active ul {
            //   opacity: 1;
            //   transform: translateY(0);
            // }
            // li {
            //   margin-bottom: 1.75rem;
            //   font-size: 2rem;
            //   padding: 0 1.5rem 0 0;
            // }
            // li:last-child {
            //   margin-bottom: 0;
            // }
            // .active {
            //   color: #222;
            // }

            // @media (min-width: 769px) {
            //   .container {
            //     width: 7rem;
            //     display: block;
            //   }
            //   ul {
            //     opacity: 1;
            //     width: 7rem;
            //     top: auto;
            //     display: block;
            //     transform: translateY(0);
            //   }
            //   li {
            //     font-size: 1rem;
            //     padding: 0;
            //   }
            // }
          `}
        </style>
      </div>
      {/* </div> */}
      
    </>
  );
}

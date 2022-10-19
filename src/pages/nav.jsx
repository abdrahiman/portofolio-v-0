import { React, useState } from "react";
import {
  AiOutlineGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Logo from "../imgs/Group 20.svg";
import { Link } from "react-router-dom";
export default function Nav() {
  let [isNav, setNav] = useState(false);
  let [isreal, setreal] = useState(false);
  let [ishide, sethide] = useState(false);
  let [isnone, setnone] = useState(true);
  const navTogelle = () => {
    // if the nav is not showing
    if (!isNav) {
      setnone(false);
      setNav(true);
      setTimeout(() => {
        if (!isNav) {
          setreal(true);
        }
      }, 2000);
    } else {
      // if the nav is showing
      sethide(true);
      setreal(false);
      setNav(false);
      setTimeout(() => {
        if (!isnone) {
          setnone(true);
        }
      }, 2000);
    }
  };
  return (
    <div className="">
      <div
        className="boxs"
        id={
          isNav
            ? "showBoxs"
            : ishide
            ? isnone
              ? "remove"
              : "hideNav"
            : "remove"
        }
      >
        <div className="b1"></div>
        <div className="b2"></div>
        <div className="b3"></div>
        <div className="b4"></div>
      </div>
      <div
        style={{
          display: isreal && isNav ? "flex" : "none",
        }}
        className="real-nav container"
      >
        <div className="side1">
          <h3>on the web</h3>
          <div className="web flex-center gap-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/abderrahim101"
            >
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.facebook.com/unictos/"
              rel="noreferrer"
              target="_blank"
            >
              <BsFacebook />
            </a>
            <a
              href="https://twitter.com/abderrahim812"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://twitter.com/unictos"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
        <div className="side2">
          <h3>navigation</h3>
          <ul className="nav-links">
            <li>
              <Link to={"/"} onClick={navTogelle}>
                home
              </Link>
            </li>
            <li>
              <Link to={"/about"} onClick={navTogelle}>
                about
              </Link>
            </li>
            <li>
              <Link to={"/skills"} onClick={navTogelle}>
                skills
              </Link>
            </li>
            <li>
              <Link to={"/work"} onClick={navTogelle}>
                work
              </Link>
            </li>
            <li>
              <Link to={"/contact"} onClick={navTogelle}>
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="flex w-full h-16 flex-row items-center justify-between">
        <Link to={"/"}>
          <div
            className="name"
            id={isreal ? "changb" : ""}
            onClick={!isnone ? navTogelle : () => {}}
          >
            A B
          </div>
        </Link>
        <button className="toggel w-12 h-12" onClick={navTogelle}>
          <img src={Logo} alt="" />
        </button>
        <Link to={"/contact"}>
          <button
            className="w-8 h-4 main capitalize"
            id={isreal ? "change" : ""}
            onClick={isNav ? navTogelle : () => {}}
          >
            say hello
          </button>
        </Link>
      </nav>
    </div>
  );
}

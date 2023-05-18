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
  return (
    <nav className="flex w-full h-16 flex-row items-center justify-between">
      <Link to={"/"}>
        <div className="name">A B</div>
      </Link>
      <button className="toggel w-12 h-12">
        <img src={Logo} alt="" />
      </button>
      <Link to={"/contact"}>
        <button className="w-8 h-4 main capitalize">say hello</button>
      </Link>
    </nav>
  );
}

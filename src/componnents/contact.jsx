import Img from "../assest/image_processing20210728-21422-80psll-removebg-preview 1.png";
import { FiInstagram, FiGithub, FiCodepen, FiTwitter } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Sides from "./sides";

export default function About() {
  // const [name, setName] = useState("");
  // const [mail, setMail] = useState("");
  // const [msg, setMsg] = useState("");
  // const [alr, setalr] = useState(false);
  // function formCheck(ev) {
  //   setalr(true);
  //   ev.preventDefault();
  // }
  return (
    <motion.div exit={{ opacity: 0 }} className="contact relative">
      <Sides />
      <main>
        <form
          action=""
          className="flex flex-col justify-around gap-5 items-end "
          onSubmit={(ev) => ev.preventDefault()}
          netlify
        >
          <h2>contact</h2>
          {/* {alr && console.log("render")} */}

          <div className="flex handllar flex-row justify-between gap-4 items-start">
            <div className="hand1">
              <input type="text" placeholder="name" />
              <span className="underlineAnime"></span>
            </div>
            <div className="hand2">
              <input type="email" placeholder="Email" required />

              <span className="underlineAnime"></span>
            </div>
          </div>
          <div className="nah">
            <textarea
              name="mes"
              id="message"
              cols="30"
              rows="10"
              placeholder="message"
              required
            ></textarea>
            <span className="underlineAnime"></span>
          </div>
          <button className="sub main" type="Submit">
            Submit
          </button>
        </form>
        <img src={Img} alt="" />
      </main>
    </motion.div>
  );
}

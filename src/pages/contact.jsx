import Img from "../imgs/3d-art-google-partners.jpg.pagespeed.ce.ylqz3X95EW-removebg-preview.png";
import { FiInstagram, FiGithub, FiCodepen, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";
import Sides from "./sides";

export default function About() {
  return (
    <motion.div exit={{ opacity: 0 }} className="contact relative">
      <Sides />
      <main>
        <form
          action=""
          // onSubmit={(ev) => ev.preventDefault()}
          className="flex flex-col justify-around gap-5 items-end "
          // this proprty for save data in netlify hosting  :
          netlify
        >
          <h2>
            <span>c</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
          </h2>
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
        <div className="conImg">
          <img src={Img} className="w-full h-full" alt="" />
        </div>
      </main>
    </motion.div>
  );
}

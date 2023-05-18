import Img from "../imgs/3d-art-google-partners.jpg.pagespeed.ce.ylqz3X95EW-removebg-preview.png";
import { motion } from "framer-motion";
import Sides from "./sides";
import { useState } from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export default function Contact() {
  let [name, setname] = useState("");
  let [msg, setmsg] = useState("");
  let [mail, setmail] = useState("");
  let [seccess, setSeccess] = useState(false);
  function submit(e) {
    let requestOptions = {
      method: "POST",
      body: JSON.stringify({
        name: `${name}`,
        email: `${mail}`,
        message: `${msg}`,
      }),
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("https://www.actionforms.io/e/rr/contact2123", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log("successfuly"))
      .catch((error) => console.log("error", error));
    setmail("");
    setmsg("");
    setname("");
    setSeccess(true);
    e.preventDefault();
  }
  return (
    <motion.div exit={{ opacity: 0 }} className="contact relative">
      <Sides />
      {seccess && (
        <div class="modal popCon fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div
            class="modal-overlay popBg2 absolute w-full h-full"
            onClick={(e) => setSeccess(false)}
          ></div>
          <div class="modal-overlay popBg absolute w-full h-full"></div>
          <div class="modal-container pop bg-white w-11/12 md:max-w-md mx-auto shadow-lg  overflow-y-auto">
            <div class="modal-content py-12 text-center px-22 flex flex-col justify-center items-center gap-3">
              <IoCheckmarkDoneCircleSharp fill="#7510f7" />
              <h3 class="text-center">the form is send successfuly</h3>
              <button
                class="modal-close main "
                onClick={(e) => setSeccess(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
      <main>
        <form
          action=""
          onSubmit={(e) => submit(e)}
          className="flex flex-col justify-around gap-5 items-end "
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
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <span className="underlineAnime"></span>
            </div>
            <div className="hand2">
              <input
                type="email"
                placeholder="Email"
                value={mail}
                onChange={(e) => setmail(e.target.value)}
                required
              />
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
              value={msg}
              onChange={(e) => setmsg(e.target.value)}
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

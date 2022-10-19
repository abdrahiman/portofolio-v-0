import { React, useState, useEffect } from "react";
import Avatar from "../imgs/Group 27(1).svg";
import { motion } from "framer-motion";
import Sides from "./sides";

export default function Home() {
  return (
    <div className="">
      <motion.div exit={{ opacity: 0 }} className="home">
        <motion.div className="side absolute"></motion.div>
        <Sides />
        <main className="flex items-center justify-center flex-col mt-32 w-full">
          <div className="text flex items-center justify-center flex-col">
            <h5 className="capitalize">
              hello th<span>here I Am</span>
            </h5>
            <h1>
              Abder<span>rahim</span>
            </h1>
            <h2>
              i build thing<span>s For The Web</span>
            </h2>
            <p>
              I am front end devleop<span>er, And I Love What I Do.</span>
            </p>
          </div>
          <motion.div
            animate={{ top: "1rem", opacity: 1 }}
            initial={{ top: "0rem", opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="avatar mt-4"
          >
            <img src={Avatar} alt="" className="w-full h-full" />
          </motion.div>
        </main>
      </motion.div>
    </div>
  );
}

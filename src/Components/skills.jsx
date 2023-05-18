import Img from "../imgs/26a179ba89e9421b9b389566a2aae379.png";
import Img2 from "../imgs/ezgif-2-67a9b2b23e.png";
import Sides from "./sides";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div className="skills relative" exit={{ opacity: 0 }}>
      <h2>Skills</h2>
      <main>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="box flex items-start justify-start gap-5 flex-col"
        >
          <div className="imghand">
            <img src={Img} alt="" />
          </div>
          <div className="text">
            <h3>front end developer</h3>
            <p className="des">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <h4>Skills</h4>
            <div>
              Html, Css, Js, React, Git, Sass, Bootstrap, Tailwind, etc.
            </div>
            <h4>dev tools</h4>
            <div>VScode, Github, Codepen etc.</div>
          </div>
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="box flex items-start justify-start gap-5 flex-col"
        >
          <div className="imghand">
            <img src={Img2} alt="nah just refrech" />
          </div>
          <div className="text">
            <h3>designer</h3>
            <p className="des">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
            <h4>Skills</h4>
            <div>web design</div>
            <h4>tools</h4>
            <div>Figma, Font Awesome, Pen & Paper</div>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}

import Img from "../imgs/image_processing20210728-21422-80psll-removebg-preview.png";
import Sides from "./sides";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div exit={{ opacity: 0 }} className="about relative">
      <Sides />
      <main>
        <motion.h2
          animate={{ top: "1rem", opacity: 1 }}
          initial={{ top: "0rem", opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          About
        </motion.h2>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="box"
        >
          <p>
            I'm a front-end developer located in Morocco. I love to create
            simple but beautiful websites with great user experience. I'm
            interested in the whole frontend stack Like trying new things and
            building great projects. I'm an independent freelancer . I believe
            everything is an Art when you put your consciousness in it. You can
            connect with me via social links.
          </p>
        </motion.div>
      </main>
      <motion.img
        src={Img}
        alt=""
        className="img"
        animate={{ translateY: "-4rem" }}
        initial={{ translateY: "0rem" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
}

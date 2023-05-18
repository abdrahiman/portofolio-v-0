import { FiInstagram, FiGithub, FiCodepen, FiTwitter } from "react-icons/fi";

export default function Sides() {
  return (
    <div className="">
      <div className="medai flex absolute bottom-0 left-8 flex-col items-center justify-center">
        <a href="https://github.com/abderrahim101">
          <FiGithub />
        </a>
        <a href="https://twitter.com/abderrahim812">
          <FiTwitter />
        </a>
        <a href="https://codepen.io/abderrahim0">
          <FiCodepen />
        </a>
        <a href="https://instagram/abderrahim0">
          <FiInstagram />
        </a>
        <span className="line mt-2 w-0.5 h-24 "></span>
      </div>
      <div className="email flex absolute bottom-0 right-8 flex-col items-center gap-1 justify-center">
        <a href="mailto:abderrahimaneddam1@gmail.com">
          abderrahimaneddam1@gmail.com
        </a>
        <span className="line mt-2 w-0.5 h-24 "></span>
      </div>
    </div>
  );
}

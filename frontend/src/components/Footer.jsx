import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer bg-base-300  items-center p-4">
  <aside className="grid-flow-col items-center">
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end mx-12">
    <a href="https://www.linkedin.com/in/mohammad-aamir-51584b227/">
     <FaLinkedin className="text-3xl"/>
    </a>
    <a href="https://github.com/aamir9185">
      <FaGithub className="text-3xl"/>
    </a>
  </nav>
</footer>
  )
}

export default Footer
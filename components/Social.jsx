import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import Link from "next/link";
const Socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/ahmad-ayman-8759262b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/ahmadayman000/",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {Socials.map((social, index) => {
        return (
          <Link href={social.path} key={index} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

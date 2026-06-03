import {
  SiTailwindcss,
  SiGooglegemini,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFramer,
  SiGithub,
} from "react-icons/si";
import { FaJava, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export function TailwindIcon(props) { return <SiTailwindcss size={16} {...props} />; }
export function GeminiIcon(props) { return <SiGooglegemini size={16} {...props} />; }
export function PostgreSQLIcon(props) { return <SiPostgresql size={16} {...props} />; }
export function ReactIcon(props) { return <SiReact size={16} {...props} />; }
export function NodeIcon(props) { return <SiNodedotjs size={16} {...props} />; }
export function JavaIcon(props) { return <FaJava size={16} {...props} />; }
export function MongoIcon(props) { return <SiMongodb size={16} {...props} />; }
export function MotionIcon(props) { return <SiFramer size={16} {...props} />; }

export function GitHubIcon(props) { return <SiGithub size={16} {...props} />; }
export function LinkedInIcon(props) { return <FaLinkedin size={16} {...props} />; }
export function ExternalLinkIcon(props) { return <FiExternalLink size={16} {...props} />; }

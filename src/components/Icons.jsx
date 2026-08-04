import {
  SiTailwindcss,
  SiGooglegemini,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFramer,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiFirebase,
  SiNestjs,
  SiOpenai,
} from "react-icons/si";
import { FaJava, FaLinkedin, FaRobot, FaBrain } from "react-icons/fa";
import { FiExternalLink, FiDownload } from "react-icons/fi";
import { GiBearFace, GiPineTree } from "react-icons/gi";

export function TailwindIcon(props) { return <SiTailwindcss size={16} aria-hidden="true" {...props} />; }
export function GeminiIcon(props) { return <SiGooglegemini size={16} aria-hidden="true" {...props} />; }
export function PostgreSQLIcon(props) { return <SiPostgresql size={16} aria-hidden="true" {...props} />; }
export function ReactIcon(props) { return <SiReact size={16} aria-hidden="true" {...props} />; }
export function NodeIcon(props) { return <SiNodedotjs size={16} aria-hidden="true" {...props} />; }
export function JavaIcon(props) { return <FaJava size={16} aria-hidden="true" {...props} />; }
export function MongoIcon(props) { return <SiMongodb size={16} aria-hidden="true" {...props} />; }
export function MotionIcon(props) { return <SiFramer size={16} aria-hidden="true" {...props} />; }
export function JavaScriptIcon(props) { return <SiJavascript size={16} aria-hidden="true" {...props} />; }
export function NextIcon(props) { return <SiNextdotjs size={16} aria-hidden="true" {...props} />; }
export function FirebaseIcon(props) { return <SiFirebase size={16} aria-hidden="true" {...props} />; }
export function NestIcon(props) { return <SiNestjs size={16} aria-hidden="true" {...props} />; }
export function GrokIcon(props) { return <FaRobot size={16} aria-hidden="true" {...props} />; }
export function OpenAIIcon(props) { return <SiOpenai size={16} aria-hidden="true" {...props} />; }
export function ZustandIcon(props) { return <GiBearFace size={16} aria-hidden="true" {...props} />; }
export function PineconeIcon(props) { return <GiPineTree size={16} aria-hidden="true" {...props} />; }
export function RAGIcon(props) { return <FaBrain size={16} aria-hidden="true" {...props} />; }

export function GitHubIcon(props) { return <SiGithub size={16} title="GitHub" aria-label="GitHub" {...props} />; }
export function LinkedInIcon(props) { return <FaLinkedin size={16} title="LinkedIn" aria-label="LinkedIn" {...props} />; }
export function ExternalLinkIcon(props) { return <FiExternalLink size={16} title="External Link" aria-label="External Link" {...props} />; }
export function DownloadIcon(props) { return <FiDownload size={16} title="Download" aria-label="Download" {...props} />; }

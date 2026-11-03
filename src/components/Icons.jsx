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
  SiFlutter,
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
export function FlutterIcon(props) { return <SiFlutter size={16} aria-hidden="true" {...props} />; }


export function EnvelopeIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#b59a72"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function CopyIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#10b981"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function ArrowUpRightIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: "rotate(-45deg)" }}
      aria-hidden="true"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

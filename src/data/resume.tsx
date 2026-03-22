import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { LinuxIcon } from "@/components/ui/svgs/linuxIcon";
import { FastApiIcon } from "@/components/ui/svgs/fastApiIcon";
import { ExpressIcon } from "@/components/ui/svgs/expressIcon";
import { HuggingFaceIcon } from "@/components/ui/svgs/huggingFaceIcon";
import { FinetuneIcon } from "@/components/ui/svgs/finetuneIcon";
import { LLMEvalsIcon } from "@/components/ui/svgs/llmEvalsIcon";
import { EmbeddingIcon } from "@/components/ui/svgs/embeddingIcon";
import { RAGIcon } from "@/components/ui/svgs/ragIcon";
import { LangChainIcon } from "@/components/ui/svgs/langChainIcon";
import { LangGraphIcon } from "@/components/ui/svgs/langGraphIcon";
import { AgentIcon } from "@/components/ui/svgs/agentIcon";
import { RedisIcon } from "@/components/ui/svgs/redisIcon";
import { MongoIcon } from "@/components/ui/svgs/mongoIcon";
import { Neo4jIcon } from "@/components/ui/svgs/neo4jIcon";
import { VectorDBIcon } from "@/components/ui/svgs/vectorDBIcon";
export const DATA = {
  name: "Chandan N",
  initials: "DV",
  url: "https://chandan-n.vercel.app/",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description:
    "I build modern and responsive web applications with clean design and efficient performance..",
  summary:
    "I’m a Computer Science Engineering student who builds end-to-end full-stack products. I’m passionate on building scalable and user-centric web applications using modern technologies. I work independently, move fast, and focus on shipping complete solutions that actually work.",
  avatarUrl: "me.jpeg",
  skills: [
 

    // --- Languages & Backend ---
    { name: "Python", icon: Python },
    { name: "Typescript", icon: Typescript },
    { name: "FastAPI", icon: FastApiIcon },
    // { name: "Node.js", icon: Nodejs },
    // { name: "Express", icon: ExpressIcon },

       // --- AI / LLM Engineering ---
    { name: "AI Agents", icon: AgentIcon },
    // { name: "RAG Systems", icon: RAGIcon },
    // { name: "LangGraph", icon: LangGraphIcon },
    { name: "Hugging Face", icon: HuggingFaceIcon },

    // --- Frontend ---
    { name: "React", icon: ReactLight },
    // { name: "Next.js", icon: NextjsIconDark },

    // --- Databases & Storage ---
    { name: "Postgres", icon: Postgresql },
    // { name: "Vector Databases", icon: VectorDBIcon },
    // { name: "Redis", icon: RedisIcon },
    { name: "Power BI", icon: Icons.powerbi },
    // { name: "MongoDB", icon: MongoIcon },
    // { name: "Graph DB", icon: Neo4jIcon },

    // --- Infrastructure & DevOps ---
    { name: "Docker", icon: Docker },
    // { name: "Kubernetes", icon: Kubernetes },
    // { name: "Linux", icon: LinuxIcon },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  // here is the all details and personal information to be added
  contact: {
    email: "chandan2004.n@gmail.com",
    tel: "+91 6360475219",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Chandan-me",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chandan-niranjan/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/n_chandan2004",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://youtube.com/@chandan-niranjan",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  // work: [
  //   {
  //     company: " Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   }
  // ],
  education: [
    {
      school: "Visvesvaraya Technological University",
      href: "https://vtu.ac.in/",
      degree: "B.E in Computer Science and Engineering",
      logoUrl: "/vtu.png",
      start: "2022",
      end: "2026",
    }
  ],
  projects: [

    {
      title: "PharmaGuard – AI-Powered Drug Safety Platform",
      href:  "https://rift-2026-ai-hunters.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "AI-powered pharmacogenomic risk prediction platform designed to analyze patient genetic data and predict personalized drug response risks.",
      technologies: [
        "React",
        "Python Flask API",
        "TypeScript",
        "Flask",
        "Tailwind CSS",
        "Framer Motion ",
        "VCF processing pipeline",
        "LLM integration",
      
      ],
      links: [
        {
          type: "Website",
          href: "https://rift-2026-ai-hunters.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Chandan-me/RIFT2026_AI_HUNTERS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

//     {
//       title: "Credit Card Fraud Detection System",
//       href: "https://github.com/Chandan-me/Credit-Card-Transactions-Fraud-Detection",
//       dates: "2025",
//       active: true,
//       description:
//         "A machine learning project that detects fraudulent credit card transactions using supervised learning on an imbalanced dataset..",
//       technologies: [
//         "Python",
//         "Groq API",
//         "CLI",
//         "LLM",
//       ],
//       links: [
//         {
//           type: "GitHub",
//           href: "https://github.com/rkshith/mika",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "",
//       video: "",
//     },

//     {
//       title: "Marine Ecosystem Guardian",
//       href: "https://github.com/rkshith/Marine-Ecosystem-Guardian",
//       dates: "2025",
//       active: true,
//       description:
//         "Interactive dashboard that analyzes marine ecosystem health, coral reef conditions, and pollution patterns.",
//       technologies: [
//         "Python",
//         "Streamlit",
//         "OpenCV",
//         "Matplotlib",
//       ],
//       links: [
//         {
//           type: "GitHub",
//           href: "https://github.com/rkshith/Marine-Ecosystem-Guardian",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "",
//       video: "",
//     },

//     {
//       title: "Deep Learning Churn Prediction",
//       href: "https://github.com/rkshith/Churn_prediction",
//       dates: "2025",
//       active: true,
//       description:
//         "Neural network model that predicts customer churn using behavioral data with preprocessing, feature scaling, and evaluation.",
//       technologies: [
//         "Python",
//         "TensorFlow",
//         "Keras",
//         "Scikit-learn",
//       ],
//       links: [
//         {
//           type: "GitHub",
//           href: "https://github.com/rkshith/Churn_prediction",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "",
//       video: "",
    // }
    ,]
} as const;

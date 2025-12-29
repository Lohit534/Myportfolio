import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code2,
  Star,
  ChevronRight,
  Layers,
  Layout,
  Globe,
  Package,
  Cpu,
  Code,
} from "lucide-react";
import Swal from "sweetalert2";

// JSON data
const dispro = [
  {
    id: "Food delivery website",
    Description:
      "A responsive MERN stack food delivery website where users can browse restaurants, view menus, add items to cart, and place orders. It’s designed to simulate real-world food delivery platforms with a smooth user experience.",
    Features: [
      "Browse restaurants and food items",
      "Add items to cart and checkout",
      "User login and signup with authentication",
      "Admin dashboard for managing orders and menus",
      "Responsive design for mobile and desktop",
      "Built using MERN stack (MongoDB, Express, React, Node.js)",
      "Secure routing and protected pages",
      "Real-time order status updates",
      "Search and filter functionality",
      "Clean UI/UX with modular components",
    ],
    Github: "https://github.com/your-github-repo",
    Img: "/food.png",
    Link: "https://foodie-del-frontend.onrender.com/",
    TechStack: ["MongoDB", "expressJS", "ReactJS", "NodeJS", "Javascript"],
    Title: "Food Delivery Website",
  },
];

const medi = [
  {
    id: "MiniMedi-AI Chatbot",
    Description:
      "A responsive MERN stack food delivery website where users can browse restaurants, view menus, add items to cart, and place orders. It’s designed to simulate real-world food delivery platforms with a smooth user experience.",
    Features: [
      "Chatbot interface for medical consultation",
      "Integration with OpenAI for AI-powered responses",
      "User authentication and session management",
      "Responsive design for mobile and desktop",
      "Built using full stack (Django, React, Node.js)",
      "Secure routing and protected pages",
      "Real-time order status updates",
      "Search and filter functionality",
      "Clean UI/UX with modular components",
    ],
    Github: "https://github.com/your-github-repo",
    Img: "/minimedi.png",
    Link: "https://minimedi-ai.vercel.app/",
    TechStack: ["Django", "Groqapi", "ReactJS", "NodeJS", "Postgresql"],
    Title: "MiniMedi-AI Chatbot",
  },
];

const TECH_ICONS = {
  React: Globe,
  Tailwind: Layout,
  Express: Cpu,
  Python: Code,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  default: Package,
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];

  return (
    <div className="group relative overflow-hidden px-3 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <div className="relative flex items-center gap-2">
        <Icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};

const handleGithubClick = (githubLink) => {
  if (githubLink === "Private") {
    Swal.fire({
      icon: "info",
      title: "Source Code Private",
      text: "Maaf, source code untuk proyek ini bersifat privat.",
      confirmButtonText: "Mengerti",
      confirmButtonColor: "#3085d6",
      background: "#030014",
      color: "#ffffff",
    });
    return false;
  }
  return true;
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedProject = dispro.find((p) => String(p.id) === id);

    if (selectedProject) {
      setProject(selectedProject);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <h2 className="text-3xl font-bold text-white">Loading Project...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] px-4 sm:px-0 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 rounded-xl text-white/90 hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 text-base"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>
          <div className="flex items-center space-x-2 text-base text-white/50">
            <span>Projects</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90 truncate">{project.Title}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-10">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              {project.Title}
            </h1>

            <p className="text-lg text-gray-300/90">{project.Description}</p>

            <div className="flex flex-wrap gap-4">
              {project.Link ? (
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-300 rounded-xl transition-all border border-blue-500/20 hover:border-blue-500/40 text-base"
                >
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <div className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-800 text-gray-400 rounded-xl border border-gray-600 text-base">
                  <ExternalLink className="w-5 h-5 opacity-50" />
                  <span>Link not available</span>
                </div>
              )}

              <a
                href={project.Github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 text-purple-300 rounded-xl transition-all border border-purple-500/20 hover:border-purple-500/40 text-base"
                onClick={(e) =>
                  !handleGithubClick(project.Github) && e.preventDefault()
                }
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Github</span>
              </a>
            </div>

            <h3 className="text-xl font-semibold text-white/90">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.TechStack.map((tech, index) => (
                <TechBadge key={index} tech={tech} />
              ))}
            </div>
          </div>

          <div>
            <img
              src={project.Img}
              alt={project.Title}
              className="w-full rounded-2xl shadow-lg border border-white/10 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

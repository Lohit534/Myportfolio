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

// Internship data
const internships = [
  {
    id: "Frontend web",
    Img: "/front.jpg",
    Title: "Frontend Web Devlopment",
    Description:
      "Frontend development focuses on building the visual part of websites It uses HTML, CSS, and JavaScript to create responsive and interactive interfaces.",
    Link: "https://eduskillsfoundation.org", // Update if there's a specific internship page
    Features: [
      "Build responsive user interfaces with HTML, CSS, and JavaScript",
      "Create interactive components using React",
      "Ensure smooth user experience across all devices",
    ],
    TechStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "web fullstack eduskills",
    Img: "/webfull.jpg",
    Title: "Web Full Stack Developer",
    Description:
      "Completed a full-stack development program on EduSkills, covering front-end and back-end technologies to build web applications.",
    Link: "https://eduskillsfoundation.org", // replace with actual link if you have one
    Features: [
      "Built full-stack projects from scratch",
      "Learned modern front-end and back-end web development",
      "Gained hands-on experience with databases and server-side logic",
    ],
    TechStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    id: "Mernstack AICTE",
    Img: "/mern.jpg",
    Title: "Web application with mern stack AICTE",
    Description:
      "A responsive MERN stack food delivery website where users can browse restaurants, view menus, add items to cart, and place orders. It’s designed to simulate real-world food delivery platforms with a smooth user experience.",
    Link: "https://internship.aicte-india.org/amrut.php", // update if you have a specific program link
    Features: [
      "Browse restaurants and food items",
      "Add items to cart and checkout",
      "User login and signup with authentication",
      "Admin dashboard for managing orders and menus",
    ],
    TechStack: ["MongoDB", "ExpressJS", "ReactJS", "NOdeJS"],
  },
];

// Icons for technologies
const TECH_ICONS = {
  React: Globe,
  Python: Code,
  Azure: Package,
  CSharp: Code,
  NodeJs: Code,
  TensorFlow: Package,
  default: Package,
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];
  return (
    <div className="px-3 py-2 bg-blue-500/10 rounded-xl border border-blue-500/30 flex items-center gap-2">
      <Icon className="w-4 h-4 text-blue-400" />
      <span className="text-sm font-medium text-blue-300">{tech}</span>
    </div>
  );
};

const InternshipDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [internship, setInternship] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedInternship = internships.find((i) => i.id === id);

    if (selectedInternship) setInternship(selectedInternship);
  }, [id]);

  if (!internship) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <h2 className="text-3xl font-bold text-white">Loading Internship...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] px-4 sm:px-0">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 rounded-xl text-white hover:bg-white/10 border border-white/10 hover:border-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <div className="text-white text-lg">{internship.Title}</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-white">
              {internship.Title}
            </h1>
            <p className="text-lg text-gray-300">{internship.Description}</p>

            <h3 className="text-xl font-semibold text-white">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {internship.Features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-white">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {internship.TechStack.map((tech, index) => (
                <TechBadge key={index} tech={tech} />
              ))}
            </div>

            <a
              href={internship.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Official Internship Page</span>
            </a>
          </div>

          <div>
            <img
              src={internship.Img}
              alt={internship.Title}
              className="w-full rounded-2xl shadow-lg border border-white/10 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetails;

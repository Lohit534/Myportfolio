import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import CardInternship from "../components/CardInternship";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes, Briefcase } from "lucide-react"; // ✅ Added Briefcase

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "python.svg", language: "Python" },
  { icon: "django.svg", language: "Django" },
  { icon: "sql.svg", language: "Sql" },
  { icon: "mongodb.svg", language: "MongoDB" },
  { icon: "git.svg", language: "Git" },
];

const discer = [
  {
    Img: "c.jpg",
  },
  {
    Img: "python.jpg",
  },
  {
    Img: "bit.jpg",
  },
  {
    Img: "web.png",
  },
  {
    Img: "vpy.png",
  },
  {
    Img: "p3.jpg",
  },
  {
    Img: "front.jpg",
  },
  {
    Img: "webfull.jpg",
  },
  {
    Img: "mern.jpg",
  },
];

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
    Img: "food.png",
    // "Link": "https://your-live-demo-link.com",
    TechStack: ["MongoDB", "expressJS", "ReactJS", "NodeJS", "Javascript"],
    Title: "Food Delivery Website",
  },
];

// ✅ Added Internship Data
// const internships = [
//   {
//     id: "QR Code Generator",
//     Img: "tcs.jpg",
//     Title: "Software Development Intern",
//     Description: "Worked on full-stack web applications using React and Node.js.",
//     Link: "https://example.com",
//   },
//   {
//     id: "QR Code Generator",
//     Img: "tcs.jpg",
//     Title: "AI Research Intern",
//     Description: "Developed machine learning models for predictive analytics.",
//     Link: "https://example.com",
//   },
// ];

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
    Img: "webfull.jpg",
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

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [showAllInternships, setShowAllInternships] = useState(false); // ✅ Add this line
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const initialProjects = 6; // Show only 3 projects initially
  const initialCertificates = 6; // Show only 4 certificates initially
  const initialInternships = 6;

  const toggleShowMore = useCallback((type) => {
    if (type === "projects") {
      setShowAllProjects((prev) => !prev);
    } else {
      setShowAllCertificates((prev) => !prev);
    }
  }, []);

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Portofolio"
    >
      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={2}
          sx={{
            bgcolor: "rgba(30, 30, 46, 0.55)", // ✅ Glassmorphism background
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            padding: "8px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              "& .MuiTab-root": {
                fontSize: "1rem",
                fontWeight: "600",
                color: "#ffffffb3",
                textTransform: "none",
                transition: "all 0.3s",
                "&:hover": {
                  color: "#fff",
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "rgba(139, 92, 246, 0.2)",
                },
              },
            }}
          >
            <Tab icon={<Code />} label="Projects" />
            <Tab icon={<Award />} label="Certificates" />
            <Tab icon={<Boxes />} label="Tech Stack" />
            <Tab icon={<Briefcase />} label="Internships" />{" "}
            {/* ✅ Fixed Briefcase icon */}
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
              {dispro
                .slice(0, showAllProjects ? dispro.length : initialProjects)
                .map((pro, index) => (
                  <CardProject
                    key={index}
                    Img={pro.Img}
                    Title={pro.Title}
                    Description={pro.Description}
                    Link={pro.Link}
                    id={pro.id}
                  />
                ))}
            </div>

            {/* Show More/Less Button for Projects */}
            {dispro.length > initialProjects && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setShowAllProjects((prev) => !prev)}
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {showAllProjects ? "Show Less Projects" : "Show All Projects"}
                </button>
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {discer
                .slice(
                  0,
                  showAllCertificates ? discer.length : initialCertificates
                )
                .map((cer, index) => (
                  <Certificate key={index} ImgSertif={cer.Img} />
                ))}
            </div>

            {/* Show More/Less Button */}
            {discer.length > initialCertificates && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setShowAllCertificates((prev) => !prev)}
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {showAllCertificates ? "Show Less" : "Show All Certificates"}
                </button>
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {techStacks.map((stack, index) => (
                <TechStackIcon
                  key={index}
                  TechStackIcon={stack.icon}
                  Language={stack.language}
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel value={value} index={3} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {internships
                  .slice(
                    0,
                    showAllInternships ? internships.length : initialInternships
                  )
                  .map((internship, index) => (
                    <CardInternship
                      key={index}
                      Img={internship.Img}
                      Title={internship.Title}
                      Description={internship.Description}
                      Link={internship.Link}
                      id={internship.id}
                    />
                  ))}
              </div>
            </div>

            {/* Show More/Less Button for Internships */}
            {internships.length > initialInternships && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setShowAllInternships((prev) => !prev)}
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {showAllInternships
                    ? "Show Less Internships"
                    : "Show All Internships"}
                </button>
              </div>
            )}
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

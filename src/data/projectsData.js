// src/data/projectsData.js
import taskMasterImage from '../assets/TaskMaster.jpeg';
import nationalHealthDbRecordsImage from '../assets/NationalHealthDbRecords.jpeg';

export const projectsData = [
  {
    id: "01",
    name: "TaskMaster",
    category: "Student Productivity Hub",
    description:
      "A front-end productivity platform helping students manage tasks, track deadlines, and maintain focus across multiple projects.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Firebase"],
    previewImg: taskMasterImage,
    githubUrl: "https://github.com/NadeenElshenawy/Task_Master",
     overview: "TaskMaster is a task management application built for students to organize their workload, set priorities, and track progress across multiple projects with real-time data sync.",
    challenge: "Building an interface that feels lightweight and frictionless while still surfacing enough information to be genuinely useful for students managing multiple deadlines simultaneously.",
    approach: "Clean component architecture, real-time Firebase sync, and a carefully considered information hierarchy that keeps the most urgent tasks front and center without overwhelming the user.",
    outcome: "A fully functional productivity platform with real-time data persistence, responsive layouts, and an intuitive task flow that works seamlessly across all screen sizes."

  },
  {
    id: "02",
    name: "National Health Database",
    category: "Medical Records Platform",
    description: "A secure multi-role medical records platform where doctors manage patient records and prescriptions with role-based access control.",
    tech: ["PHP OOP", "MySQL", "MVC", "HTML5", "CSS3"],
    previewImg: nationalHealthDbRecordsImage,
    githubUrl: "https://github.com/nadeensamy/national-health-db",
    overview: "A secure medical records platform designed to manage patient information, prescriptions, profiles, and healthcare workflows across multiple user roles.",
    challenge: "Managing sensitive medical data securely while providing different levels of access and functionality for Admins, Doctors, and Patients.",
    approach: "MVC architecture, PHP OOP, secure authentication with password hashing and sessions, and role-based access control with middleware to enforce permissions throughout the application.",
    outcome: "A fully functional healthcare management system with role-aware dashboards, patient records, prescriptions, user management, patient search, and secure data access tailored to each user role."
  },
  // {
  //   id: "03",
  //   name: "BuggsBunnies",
  //   category: "Ethical Cybersecurity Tool",
  //   description:
  //     "Combines artificial intelligence, remote access, and ethical cybersecurity practices into a single compact desktop application.",
  //   tech: ["C++", "QT", "QML"],
  //   previewImg: null,
  //   githubUrl: "https://github.com/nadeensamy/buggsbunnies"
  // }
];
const icon = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

export const skills = [
  {
    title: "Languages",
    items: [
      { name: "C", icon: icon("c") },
      { name: "C++", icon: icon("cplusplus") },
      { name: "Python", icon: icon("python") },
      { name: "JavaScript", icon: icon("javascript") },
    ],
  },
  {
    title: "Frontend & Backend",
    items: [
      { name: "React.js", icon: icon("react") },
      { name: "Node.js", icon: icon("nodejs") },
      { name: "Express.js", icon: icon("express") },
      { name: "Tailwind CSS", icon: icon("tailwindcss") },
      { name: "REST API Design", icon: icon("express") },
    ],
  },
  {
    title: "Databases & Cloud",
    items: [
      { name: "MongoDB", icon: icon("mongodb") },
      { name: "PostgreSQL", icon: icon("postgresql") },
      { name: "Oracle", icon: icon("oracle") },
      { name: "Firebase", icon: icon("firebase") },
      { name: "Microsoft Azure", icon: icon("azure") },
    ],
  },
  {
    title: "Tools & Core Concepts",
    items: [
      { name: "Git", icon: icon("git") },
      { name: "GitHub", icon: icon("github") },
      { name: "Linux", icon: icon("linux") },
      { name: "Docker", icon: icon("docker") },
      { name: "Authentication & RBAC", icon: icon("shield") },
      { name: "Multithreading & Memory Management", icon: icon("cplusplus") },
    ],
  },
  {
    title: "Data & Machine Learning",
    items: [
      { name: "Pandas", icon: icon("pandas") },
      { name: "NumPy", icon: icon("numpy") },
      { name: "Scikit-learn", icon: icon("python") },
      { name: "Data Visualization", icon: icon("python") },
    ],
  },
];

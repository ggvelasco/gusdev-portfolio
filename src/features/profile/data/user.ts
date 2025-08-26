import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Gustavo",
  lastName: "Velasco",
  displayName: "Gustavo Velasco",
  username: "gusdev",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Software Engineer",
    "Open Source Contributor",
    "Developing with love",
  ],
  address: "São Paulo, Brazil",
  phoneNumber: "KzU1MTE5ODg5NTk4MzE", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "Z3ZlbGFzY28uZGV2QGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://linkedin.com/in/ggvelasco",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Junior Software Engineer",
      company: "gusdev",
      website: "https://gusdev-portfolio-chi.vercel.app/",
    },
    {
      title: "Founder",
      company: "gusdev",
      website: "https://gusdev-portfolio-chi.vercel.app/",
    },
  ],
  about: `
Hello, World! I’m Gus, a Software Developer passionate about building modern, scalable, and user-focused web applications.  

With experience in full-stack development, I specialize in **TypeScript, Node.js, React, and Next.js**, crafting clean, efficient, and maintainable solutions. My focus is on creating applications that balance performance, usability, and elegant code design.  

I’m constantly exploring new technologies and sharpening my skills through personal projects, where I turn ideas into real-world applications. Beyond coding, I enjoy diving into system architecture, product design, and how technology can simplify complex problems.  

Currently, I’m working on projects that involve **authentication systems, API integrations, and real-time applications**, combining my love for back-end logic with engaging front-end experiences.  

Always open to collaboration and new challenges, let’s connect and create something impactful together!  

  `,
  avatar: "https://avatars.githubusercontent.com/u/108646387?v=4",
  ogImage: "/og-image.png",
  namePronunciationUrl: "",
  keywords: [
    "gusdev",
    "Gustavo Velasco",
    "gvelasco.dev",
    "gusdev.com",
    "gus dev",
  ],
  dateCreated: "2025-08-25", // YYYY-MM-DD
};

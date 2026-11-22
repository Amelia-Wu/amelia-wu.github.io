// From Amelia_Resume.pdf. Edit here to update the resume page.
export const resume = {
  summary:
    'Software Engineer with 2+ years of experience building and supporting production backend systems in enterprise environments. I work mostly with Java, Kotlin, Spring Boot, REST APIs, microservices, Docker and the cloud, and I love making engineering workflows smoother with automation and AI-assisted development.',
  experience: [
    {
      role: 'Software Engineer',
      company: 'Telstra',
      location: 'Melbourne VIC',
      period: 'Feb 2024 – Present',
      points: [
        'Designed, developed, and maintained backend services and RESTful APIs using Java, Kotlin, and Spring Boot within a microservices architecture.',
        'Designed and deployed a GitHub Copilot Agent with custom instructions to automate API Gateway (OGW) script generation, including forward/rollback deployment scripts, proxy feature configs, and consumer onboarding, reducing manual scripting effort across the team.',
        'Deployed a Bash script to automate Kubernetes Helm chart deployments via the GitHub API, supporting image tag updates and zero-downtime restarts across multiple microservices.',
        'Contributed to migrating multiple production services from Pivotal Cloud Foundry (PCF) to Microsoft Azure, ensuring a smooth transition and service continuity.',
        'Refactored applications for cloud-native deployment patterns, improving scalability, maintainability, and deployment flexibility.',
        'Built and deployed Docker images through CI/CD pipelines and automated build and release workflows with Bamboo.',
        'Implemented blue-green deployment strategies to enable zero-downtime releases.',
        'Used Splunk and New Relic for monitoring, logging, and troubleshooting production systems.',
        'Wrote unit and integration tests, and collaborated with developers, testers, and stakeholders in agile delivery teams.',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Startupbootcamp',
      location: 'Melbourne VIC',
      period: 'Dec 2023 – Feb 2024',
      points: [
        'Built and deployed responsive web apps with Next.js, React (TypeScript), and Tailwind CSS on Vercel.',
        'Integrated HubSpot and Airtable via Zapier, automating workflows and improving data synchronization.',
        'Migrated the database from FaunaDB to Sanity, optimizing data structure and scalability.',
        'Developed a dynamic blog carousel in React and implemented a schemaless backend using GROQ.',
      ],
    },
  ],
  education: [
    {
      degree: 'Master of Information Technology (Artificial Intelligence)',
      school: 'The University of Melbourne',
      period: 'Feb 2022 – Dec 2023',
      note: 'Melbourne Graduate Scholarship',
    },
    {
      degree: 'Bachelor of Commerce',
      school: 'Monash University',
      period: 'Feb 2020 – Dec 2021',
      note: 'Double major in Actuarial Studies and Business Analytics',
    },
  ],
  certifications: [
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon', year: '2024' },
    { name: 'Advanced Google Analytics', issuer: 'Google', year: '2021' },
  ],
  skillGroups: [
    { label: 'Languages', items: ['Java', 'Kotlin', 'SQL', 'Python', 'JavaScript'] },
    {
      label: 'Tools & platforms',
      items: ['Spring Boot', 'Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'Splunk', 'New Relic', 'Node.js', 'Next.js', 'React', 'Django', 'MongoDB'],
    },
  ],
};

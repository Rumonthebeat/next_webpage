const experiences = [
  {
    type: "work",
    title: "Backend Software Development Engineer Intern",
    company: "Apple Inc.",
    date: "May 2021 - September 2021",
    location: "Beijing",
    description: `
      - Utilized Java for back-end development for management systems, focusing on module development, debugging, and maintenance, alongside enhancing data parallel processing and computing services.
      - Demonstrated proactive engagement in meeting project timelines and ensuring stable development and delivery, contributing significantly to the team's ability to address and fulfill technical requirements efficiently.
      - Facilitated in managing and processing millions of data points with Python, showcasing strong analytical skills and the ability to handle large-scale data operations effectively.
    `,
  },
  {
    type: "work",
    title: "English Teaching and Research Intern",
    company: "New Oriental Education & Technology Group Inc.",
    date: "June 2023 - September 2023",
    location: "Beijing",
    description: `
      - Collaborated in the development and refinement of educational content, played a key role in course design and reviewing processes, ensuring the material's relevance and effectiveness in meeting educational standards.
      - Demonstrated exceptional efficiency by completing ahead deadline without compromising quality, directly contributing to the alleviation of workload for several teachers by handling up to 80% of their responsibilities.
    `,
  },
  {
    type: "school",
    title: "Education",
    company: "University of Toronto",
    location: "Major in Computer Science & Statistic (Honours Bachelor of Science)",
    date: "September 2020 - August 2024",
    description: `- Excelled in courses including Software Design, Computer Organization, Data Structures, Algorithms, Database Systems, Machine Learning, and Probability.`,
  },
  {
    type: "school",
    title: "Asian Youth-cultural Association",
    company: "Vice President",
    location: "Toronto",
    date: "September 2022 - August 2024",
    description: `
    - Spearheaded the organization of numerous Asian youth culture events for more than 1000 people, including rock music festivals and stand-up comedy shows. Leaded in both planning and execution phases.
    - Excelled in the strategic planning of activities well in advance, ensuring the efficient allocation of tasks among team members. Monitored project progress across all project tiers.
    - Fostered strong relationships through effective communication and coordination with student organizations, venue managers, artists, and executives, ensuring the successful realization of each event.
`,
  },
];

export default function Experience() {
  const workExperiences = experiences.filter(exp => exp.type === "work");
  const schoolExperiences = experiences.filter(exp => exp.type === "school");

  const renderExperiences = (expList) => (
    expList.map((exp, index) => (
      <div key={index} className="mb-8">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">{exp.title}</h3>
          <p className="text-lg">{exp.date}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg">{exp.company}</p>
          <p className="text-lg">{exp.location}</p>
        </div>
        <p className="text-lg mt-2 text-gray-400">{exp.description.trim().split('\n').map((line, i) => (
          <span key={i} className="block">{line.trim()}</span>
        ))}</p>
      </div>
    ))
  );

  return (
    <section className="text-white">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div>
        <h3 className="text-2xl font-semibold mb-4">- Work Experience</h3>
        {renderExperiences(workExperiences)}
        <h3 className="text-2xl font-semibold mb-4">- School Experience</h3>
        {renderExperiences(schoolExperiences)}
      </div>
    </section>
  );
}


const experiences = [
    {
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
        title: "English Teaching and Research Intern",
        company: "New Oriental Education & Technology Group Inc.",
        date: "June 2023 - September 2023",
        location: "Beijing",
        description: `
          - Collaborated in the development and refinement of educational content, played a key role in course design and reviewing processes, ensuring the material's relevance and effectiveness in meeting educational standards.
          - Demonstrated exceptional efficiency by completing ahead deadline without compromising quality, directly contributing to the alleviation of workload for several teachers by handling up to 80% of their responsibilities.
        `,
      },
  ];
  
  export default function Experience() {
    return (
      <section className="text-white">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <p className="text-lg text-gray-400">{exp.location}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-400">{exp.company}</p>
                <p className="text-lg text-gray-400">{exp.date}</p>
              </div>
              <p className="text-lg mt-2">{exp.description.trim().split('\n').map((line, i) => (
                <span key={i} className="block">{line.trim()}</span>
              ))}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
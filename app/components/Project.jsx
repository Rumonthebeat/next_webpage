
const projects = [
    {
      title: "Air Ticket Booking System",
      description: `Designed an airline ticket booking system with Java, implementing clean architecture and design patterns for scalability. Also directed GUI development to improve user experience and streamline the booking process.`,
    },
    {
        title: "Website Development",
        description: `Developed a volunteer management website for a Canadian charity using React, enhancing the coordination process and boosting operational efficiency.`,
      },
    {
        title: "Product Design",
        description: `Conducted field studies for an on-campus parking system design, identifying key needs and challenges. Developed and prototyped with Figma to enhance stakeholder engagement and feedback.`,
    },
    {
        title: "Game Design",
        description: `Design and develop a local multiplayer party game using Unity, in collaboration with Sheridan College's Game Design program. This project involves close coordination with game design students to create engaging and interactive gameplay experiences.`,
    },
    {
        title: "Databse Management System",
        description: `Develop and design databases for a student course selection system and a recording studio management system using PostgreSQL (PSQL). Ensure efficient data organization, retrieval, and management to support the functional requirements of these systems.`,
    },
    {
        title: "Neural Networks and Deep Learning",
        description: `Design and implement advanced neural network algorithms, including K-Nearest Neighbors (KNN), Convolutional Neural Networks (CNN), and Recurrent Neural Networks (RNN), to accomplish complex tasks such as handwriting recognition, word embeddings, differential privacy, and text classification. Primarily responsible for the application and optimization of neural networks and algorithms using Python, ensuring high performance and accuracy across various machine learning projects.`,
    },
    {
        title: "Statistical Methods for Machine Learning",
        description: `Utilize advanced techniques such as Decision Theory, Bernoulli Naïve Bayes model, Loopy Belief Propagation (Loopy-BP), Markov Chain Monte Carlo (MCMC), Stochastic Variational Inference, and the Expectation-Maximization (EM) algorithm to perform tasks including spam classification, image denoising, data prediction, data analysis, and image generation.`,
    },
    {
        title: "Computer Graphics",
        description: `Utilize C++ to implement advanced graphics and simulation tasks, including ray casting and ray tracing, shader programming, bounding volume collision detection, and object motion. Ensure efficient and optimized execution of these tasks to achieve high-performance graphical applications.`,
    },
    {
        title: "Computer Vision",
        description: `Process images using tools such as Python and OpenCV for tasks including Fourier Transform, Gaussian Filtering, Haar Wavelet Transform, and more. Apply these techniques to enhance image quality, extract features, and perform various image analysis tasks.`,
    },
  ];
  
  export default function Project() {
    return (
      <section className="text-white">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div>
          {projects.map((exp, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
              </div>
              <p className="text-lg mt-2 text-gray-400">{exp.description.trim().split('\n').map((line, i) => (
                <span key={i} className="block">{line.trim()}</span>
              ))}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
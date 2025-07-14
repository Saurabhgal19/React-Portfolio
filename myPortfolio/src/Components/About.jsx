import {
  Briefcase,
  Code,
  User,
  Network,
  GitBranch,
  Wrench,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"  data-aos="fade-up">
          About <span className="text-primary">Me</span>
        </h2>

        {/* TOP: Info Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16"
          data-aos="fade-up"
          data-aos-delay="300">
          <h3 className="text-2xl font-semibold">Passionate Full Stack Developer</h3>

          <p className="text-muted-foreground">
            With overall 3 years of experience in Java Full Stack Development,
            I specialize in creating responsive, accessible, and performant web
            applications using modern technologies.
          </p>

          <p className="text-muted-foreground">
            I'm passionate about creating elegant solutions to complex
            problems, and I'm constantly learning new technologies and
            techniques to stay at the forefront of the ever-evolving web
            landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button text-center">
              Get In Touch
            </a>
            <a
              href="/Saurabh_Galpalliwar_resume.pdf"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* BOTTOM: 3x2 Grid of Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div data-aos="zoom-in">
          <SkillCard
            icon={<Code className="h-6 w-6 text-primary" />}
            title="Full Stack Development"
            desc="Building scalable web apps using Java, Spring Boot, React.js, REST APIs, and MySQL/PostgreSQL."
          />
          </div>

          <div data-aos="zoom-in"  data-aos-delay="100">
          <SkillCard
            icon={<User className="h-6 w-6 text-primary" />}
            title="Backend Engineering"
            desc="Designing secure APIs, DB integration, and business logic using Java & Spring Boot."
          />
          </div>

          <div data-aos="zoom-in"  data-aos-delay="200">
          <SkillCard
            icon={<Briefcase className="h-6 w-6 text-primary" />}
            title="Frontend Development"
            desc="Interactive UIs with React.js, Tailwind CSS, API integration, and responsive design."
          />
          </div>

          <div data-aos="zoom-in"  data-aos-delay="300">
          <SkillCard
            icon={<Network className="h-6 w-6 text-primary" />}
            title="Microservices Architecture"
            desc="Experience with Spring Cloud, API Gateway, Eureka, and inter-service communication."
          />
          </div>

          <div data-aos="zoom-in"  data-aos-delay="400">
          <SkillCard
            icon={<GitBranch className="h-6 w-6 text-primary" />}
            title="Version Control & Collaboration"
            desc="Skilled in Git, GitHub, Agile tools like Jira for branching, PRs, and CI workflows."
          />
          </div>

          <div data-aos="zoom-in"  data-aos-delay="500">
          <SkillCard
            icon={<Wrench className="h-6 w-6 text-primary" />}
            title="Tech Stack & Tools"
            desc="Hands-on with IntelliJ, Postman, Maven, GitHub, MySQL Workbench, VS Code & dev tools."
          />
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable card
const SkillCard = ({ icon, title, desc }) => (
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">{icon}</div>
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-muted-foreground">{desc}</p>
      </div>
    </div>
  </div>
);

export default About;

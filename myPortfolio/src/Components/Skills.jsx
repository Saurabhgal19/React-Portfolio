import { useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML5/CSS3", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "ES6+", level: 90, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "React Redux", level: 80, category: "frontend" },
  { name: "React Hooks", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Material UI", level: 80, category: "frontend" },

  { name: "Spring Boot", level: 95, category: "backend" },
  { name: "Spring Rest", level: 95, category: "backend" },
  { name: "Spring Security", level: 90, category: "backend" },
  { name: "Spring JPA", level: 90, category: "backend" },
  { name: "Mockito", level: 90, category: "backend" },
  { name: "JUnit", level: 90, category: "backend" },
  { name: "Microservices", level: 90, category: "backend" },

  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Maven", level: 90, category: "tools" },
  { name: "Postman", level: 90, category: "tools" },
  { name: "Swagger", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleBars, setVisibleBars] = useState({});
  const skillRefs = useRef({});

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");
          if (entry.isIntersecting) {
            setVisibleBars((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(skillRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(skillRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredSkills]);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(category);
                setVisibleBars({}); // Reset animation when filter changes
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

               <div className="w-full h-2 rounded-full relative bg-primary/10 overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-2 rounded-full bg-primary transition-all duration-1000 ease-out"
                  style={{
                    width: visibleBars[index] ? `${skill.level}%` : "0%",
                  }}
                />
              </div> 
            

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight opacity-0 animate-[var(--animate-fade-in)]">
            Hi!{" "}
            <span className="text-primary">Saurabh Galpalliwar</span>
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl text-gradient font-medium">
              I am a{" "}
              <span className="text-red-500">
                <Typewriter
                  words={[
                    " Software Engineer",
                    " Full Stack Developer",
                    " React Developer",
                    " UI/UX Designer",
                    " Backend Developer",
                    " Frontend Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            A passionate Software Engineer who loves building full-stack apps
            with Java, Spring Boot, and React. With 2.7 years of experience, I
            specialize in clean architecture, REST APIs, and real-world
            business solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <button onClick={scrollToProjects} className="cosmic-button">
              View my work
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>

  );
};

export default HeroSection;

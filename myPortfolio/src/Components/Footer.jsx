import { ArrowUp, Github, Linkedin, Mail  } from "lucide-react";

export const Footer = () => {

    const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
  return (
    <footer className="py-6 px-4 bg-card border-t border-border mt-12 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

     
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <h4 className="font-medium text-sm md:mb-0 mb-1">Connect With Me</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/saurabh-galpalliwar-4165b2195/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/Saurabhgal19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github />
            </a>
            <a
             href="mailto:saurabh1999gal@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
            <Mail/>
            </a>
          </div>
        </div>

      
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Saurabh Galpalliwar. All rights reserved.
        </p>

        
        <div
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 cursor-pointer z-50"
            data-aos="fade-up"
            data-aos-delay="500"
            >
          <ArrowUp size={20} />
        </div>
      </div>
    </footer>
  );
};

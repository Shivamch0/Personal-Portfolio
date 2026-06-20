import { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

// Technologies
export const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the viewport width is mobile size (max-width: 768px)
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* Iterate over each technology */}
        {TECHNOLOGIES.map((technology) => (
          <div className="w-28 h-28 flex items-center justify-center" key={technology.name}>
            {isMobile ? (
              // Beautiful 2D Skill circle for mobile screens to avoid WebGL context limits & battery drain
              <div 
                className="w-20 h-20 rounded-full bg-tertiary flex items-center justify-center shadow-card p-4 border border-secondary/10 hover:border-[#915eff]/50 hover:shadow-[0_0_15px_rgba(145,94,255,0.3)] transition-all duration-300 ease-in-out cursor-pointer select-none"
                title={technology.name}
              >
                <img 
                  src={technology.icon} 
                  alt={technology.name} 
                  className="w-12 h-12 object-contain" 
                />
              </div>
            ) : (
              // 3D Ball for larger screens
              <BallCanvas icon={technology.icon} />
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
